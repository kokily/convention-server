import { getRepository } from 'typeorm';
import { ReadAskQueryArgs, ReadAskResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Ask } from '../../../entities/Ask';

const resolvers: Resolvers = {
  Query: {
    ReadAsk: authResolver(
      async (_, args: ReadAskQueryArgs): Promise<ReadAskResponse> => {
        const { id } = args;

        try {
          const ask = await getRepository(Ask).findOne(id);

          if (!ask) {
            return {
              ok: false,
              error: '해당하는 게시물이 없습니다.',
              ask: null,
            };
          }

          return {
            ok: true,
            error: null,
            ask,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            ask: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
