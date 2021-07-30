import { getRepository } from 'typeorm';
import {
  RemoveBanquetMutationArgs,
  RemoveBanquetResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Banquet } from '../../../entities/Banquet';

const resolvers: Resolvers = {
  Mutation: {
    RemoveBanquet: authResolver(
      async (
        _,
        args: RemoveBanquetMutationArgs
      ): Promise<RemoveBanquetResponse> => {
        const { id } = args;

        try {
          await getRepository(Banquet).delete(id);

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
