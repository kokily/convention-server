import { getRepository } from 'typeorm';
import { AddBannerMutationArgs, AddBannerResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Banner } from '../../../entities/Banner';

const resolvers: Resolvers = {
  Mutation: {
    AddBanner: authResolver(
      async (_, args: AddBannerMutationArgs): Promise<AddBannerResponse> => {
        try {
          const banner = await getRepository(Banner).create({ ...args });

          await banner.save();

          return {
            ok: true,
            error: null,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
          };
        }
      }
    ),
  },
};

export default resolvers;
