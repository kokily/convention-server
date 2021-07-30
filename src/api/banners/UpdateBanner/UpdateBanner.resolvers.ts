import { getRepository } from 'typeorm';
import {
  UpdateBannerMutationArgs,
  UpdateBannerResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { cleanNullArgs } from '../../../libs/utils';
import { Banner } from '../../../entities/Banner';

const resolvers: Resolvers = {
  Mutation: {
    UpdateBanner: authResolver(
      async (
        _,
        args: UpdateBannerMutationArgs
      ): Promise<UpdateBannerResponse> => {
        const { id } = args;

        try {
          await getRepository(Banner).update(
            { id },
            {
              ...cleanNullArgs(args),
            }
          );

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
