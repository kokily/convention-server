import { getManager, getRepository } from 'typeorm';
import { ListReservesQueryArgs, ListReservesResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Reserve } from '../../../entities/Reserve';
import authResolver from '../../../libs/authenticate';

const resolvers: Resolvers = {
  Query: {
    ListReserves: authResolver(
      async (_, args: ListReservesQueryArgs): Promise<ListReservesResponse> => {
        const { page, confirm, name, phone, email } = args;

        try {
          const query = await getManager()
            .createQueryBuilder(Reserve, 'reserves')
            .limit(10)
            .skip((page ? page - 1 : 0) * 10)
            .orderBy('reserves.created_at', 'DESC')
            .addOrderBy('reserves.id', 'DESC');

          if (confirm !== null && confirm !== undefined) {
            query.andWhere('reserves.isConfirm = :confirm', { confirm });
          }

          if (name) {
            query.andWhere('reserves.husbandName = :name', { name });
            query.andWhere('reserves.brideName = :name', { name });
          }

          if (phone) {
            query.andWhere('reserves.husbandPhone = :phone', { phone });
            query.andWhere('reserves.bridePhone = :phone', { phone });
          }

          if (email) {
            query.andWhere('reserves.husbandEmail = :email', { email });
            query.andWhere('reserves.brideEmail = :email', { email });
          }

          const reserves = await query.getMany();
          const reservesCount = await query.getCount();

          return {
            ok: true,
            error: null,
            reserves,
            lastPage: Math.ceil(reservesCount / 10),
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            reserves: null,
            lastPage: 0,
          };
        }
      }
    ),
  },
};

export default resolvers;
