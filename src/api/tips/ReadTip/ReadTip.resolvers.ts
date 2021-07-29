import { getRepository } from 'typeorm';
import { ReadTipQueryArgs, ReadTipResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Tip } from '../../../entities/Tip';

const resolvers: Resolvers = {
  Query: {
    ReadTip: async (_, args: ReadTipQueryArgs): Promise<ReadTipResponse> => {
      const { id } = args;

      try {
        const tip = await getRepository(Tip).findOne(id);

        if (!tip) {
          return {
            ok: false,
            error: '존재하지 않는 게시물입니다.',
            tip: null,
          };
        }

        return {
          ok: true,
          error: null,
          tip,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          tip: null,
        };
      }
    },
  },
};

export default resolvers;
