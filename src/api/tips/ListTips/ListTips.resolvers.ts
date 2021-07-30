import { getManager } from 'typeorm';
import { ListTipsQueryArgs, ListTipsResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Tip } from '../../../entities/Tip';

const resolvers: Resolvers = {
  Query: {
    ListTips: async (_, args: ListTipsQueryArgs): Promise<ListTipsResponse> => {
      const { page, title } = args;

      try {
        const query = await getManager()
          .createQueryBuilder(Tip, 'tips')
          .limit(10)
          .skip((page ? page - 1 : 0) * 10)
          .orderBy('tips.created_at', 'DESC')
          .addOrderBy('tips.id', 'DESC');

        if (title) {
          query.andWhere('tips.title like :title', {
            title: `%${title}%`,
          });
        }

        const tips = await query.getMany();
        const tipsCount = await query.getCount();

        return {
          ok: true,
          error: null,
          tips,
          lastPage: Math.ceil(tipsCount / 10),
        };
      } catch (err) {
        return {
          ok: false,
          error: null,
          tips: null,
          lastPage: 0,
        };
      }
    },
  },
};

export default resolvers;
