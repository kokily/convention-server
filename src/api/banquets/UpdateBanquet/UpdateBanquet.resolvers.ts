import { getRepository } from 'typeorm';
import {
  UpdateBanquetMutationArgs,
  UpdateBanquetResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { cleanNullArgs } from '../../../libs/utils';
import { Banquet } from '../../../entities/Banquet';

const resolvers: Resolvers = {
  Mutation: {
    UpdateBanquet: authResolver(
      async (
        _,
        args: UpdateBanquetMutationArgs
      ): Promise<UpdateBanquetResponse> => {
        const { id } = args;

        try {
          await getRepository(Banquet).update(
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
