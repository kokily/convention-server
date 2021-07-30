import { getRepository } from 'typeorm';
import { ReadReserveQueryArgs, ReadReserveResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Reserve } from '../../../entities/Reserve';

const resolvers: Resolvers = {
  Query: {
    ReadReserve: authResolver(
      async (_, args: ReadReserveQueryArgs): Promise<ReadReserveResponse> => {
        const { id } = args;

        try {
          const reserve = await getRepository(Reserve).findOne(id);

          if (!reserve) {
            return {
              ok: false,
              error: '해당하는 게시물이 없습니다.',
              reserve: null,
            };
          }

          return {
            ok: true,
            error: null,
            reserve,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            reserve: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
