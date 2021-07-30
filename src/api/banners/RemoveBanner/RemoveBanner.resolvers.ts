import { getRepository } from 'typeorm';
import {
  RemoveBannerMutationArgs,
  RemoveBannerResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Banner } from '../../../entities/Banner';

const resolvers: Resolvers = {
  Mutation: {
    RemoveBanner: authResolver(
      async (
        _,
        args: RemoveBannerMutationArgs
      ): Promise<RemoveBannerResponse> => {
        const { id } = args;

        try {
          await getRepository(Banner).delete(id);

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
