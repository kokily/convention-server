import { getManager, getRepository } from 'typeorm';
import { ListBannersQueryArgs, ListBannersResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Banner } from '../../../entities/Banner';

const resolvers: Resolvers = {
  Query: {
    ListBanners: async (
      _,
      args: ListBannersQueryArgs
    ): Promise<ListBannersResponse> => {
      const { cursor } = args;

      try {
        const query = await getManager()
          .createQueryBuilder(Banner, 'banners')
          .limit(15)
          .orderBy('banners.order', 'ASC')
          .addOrderBy('banners.id', 'ASC');

        if (cursor) {
          const banner = await getRepository(Banner).findOne({ id: cursor });

          if (!banner) {
            return {
              ok: false,
              error: '알 수 없는 에러',
              banners: null,
            };
          }

          query.andWhere('banners.order > :order', {
            order: banner.order,
          });

          query.orWhere('banners.order = :order AND banners.id = :id', {
            order: banner.order,
            id: banner.id,
          });
        }

        const banners = await query.getMany();

        return {
          ok: true,
          error: null,
          banners,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          banners: null,
        };
      }
    },
  },
};

export default resolvers;
