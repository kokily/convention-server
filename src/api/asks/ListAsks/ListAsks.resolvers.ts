import { getManager } from 'typeorm';
import { ListAsksQueryArgs, ListAsksResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Ask } from '../../../entities/Ask';

const resolvers: Resolvers = {
  Query: {
    ListAsks: authResolver(
      async (_, args: ListAsksQueryArgs): Promise<ListAsksResponse> => {
        const { page, name } = args;

        try {
          const query = await getManager()
            .createQueryBuilder(Ask, 'asks')
            .limit(10)
            .skip((page ? page - 1 : 0) * 10)
            .orderBy('asks.created_at', 'DESC')
            .addOrderBy('asks.id', 'DESC');

          if (name) {
            query.andWhere('asks.name like : name', {
              name: `%${name}%`,
            });
          }

          const asks = await query.getMany();
          const asksCount = await query.getCount();

          return {
            ok: true,
            error: null,
            asks,
            lastPage: Math.ceil(asksCount / 10),
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            asks: null,
            lastPage: 0,
          };
        }
      }
    ),
  },
};

export default resolvers;
