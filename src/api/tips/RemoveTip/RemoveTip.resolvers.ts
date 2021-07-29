import { getRepository } from 'typeorm';
import { RemoveTipMutationArgs, RemoveTipResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Tip } from '../../../entities/Tip';

const resolvers: Resolvers = {
  Mutation: {
    RemoveTip: authResolver(
      async (_, args: RemoveTipMutationArgs): Promise<RemoveTipResponse> => {
        const { id } = args;

        try {
          await getRepository(Tip).delete(id);

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
