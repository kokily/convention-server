import { getRepository } from 'typeorm';
import { ReadBannerQueryArgs, ReadBannerResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Banner } from '../../../entities/Banner';

const resolvers: Resolvers = {
  Query: {
    ReadBanner: authResolver(
      async (_, args: ReadBannerQueryArgs): Promise<ReadBannerResponse> => {
        const { id } = args;

        try {
          const banner = await getRepository(Banner).findOne(id);

          if (!banner) {
            return {
              ok: false,
              error: '해당하는 게시물이 없습니다.',
              banner: null,
            };
          }

          return {
            ok: true,
            error: null,
            banner,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            banner: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
