import { getRepository } from 'typeorm';
import { ReadBanquetQueryArgs, ReadBanquetResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Banquet } from '../../../entities/Banquet';

const resolvers: Resolvers = {
  Query: {
    ReadBanquet: authResolver(
      async (_, args: ReadBanquetQueryArgs): Promise<ReadBanquetResponse> => {
        const { id } = args;

        try {
          const banquet = await getRepository(Banquet).findOne(id);

          if (!banquet) {
            return {
              ok: false,
              error: '해당하는 게시물이 없습니다.',
              banquet: null,
            };
          }

          return {
            ok: true,
            error: null,
            banquet,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            banquet: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
