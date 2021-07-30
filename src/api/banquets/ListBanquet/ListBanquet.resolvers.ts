import { getManager } from 'typeorm';
import { ListBanquetQueryArgs, ListBanquetResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Banquet } from '../../../entities/Banquet';
import authResolver from '../../../libs/authenticate';

const resolvers: Resolvers = {
  Query: {
    ListBanquet: authResolver(
      async (_, args: ListBanquetQueryArgs): Promise<ListBanquetResponse> => {
        const { date } = args;

        try {
          const year = date.substring(0, 4);
          const month = date.substring(5, 7);

          const query = await getManager()
            .createQueryBuilder(Banquet, 'banquets')
            .where('banquets.eventDate like :date', {
              date: `%${year}-${month}-%`,
            })
            .orderBy('banquets.eventDate', 'ASC');

          const banquets = await query.getMany();

          return {
            ok: true,
            error: null,
            banquets,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            banquets: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
