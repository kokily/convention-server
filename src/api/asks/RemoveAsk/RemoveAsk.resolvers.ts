import { getRepository } from 'typeorm';
import { RemoveAskMutationArgs, RemoveAskResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Ask } from '../../../entities/Ask';

const resolvers: Resolvers = {
  Mutation: {
    RemoveAsk: authResolver(
      async (_, args: RemoveAskMutationArgs): Promise<RemoveAskResponse> => {
        const { id } = args;

        try {
          await getRepository(Ask).delete(id);

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
