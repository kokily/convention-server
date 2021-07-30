import { getManager } from 'typeorm';
import { ListPopupsQueryArgs, ListPopupsResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Popup } from '../../../entities/Popup';

const resolvers: Resolvers = {
  Query: {
    ListPopups: async (
      _,
      args: ListPopupsQueryArgs
    ): Promise<ListPopupsResponse> => {
      const { isUse } = args;

      try {
        const query = await getManager()
          .createQueryBuilder(Popup, 'popups')
          .orderBy('popups.created_at', 'DESC')
          .addOrderBy('popups.id', 'DESC');

        if (isUse) {
          query.andWhere('popups.isUse = true');
        }

        const popups = await query.getMany();

        return {
          ok: true,
          error: null,
          popups,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          popups: null,
        };
      }
    },
  },
};

export default resolvers;
