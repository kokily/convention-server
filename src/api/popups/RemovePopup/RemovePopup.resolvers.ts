import { getRepository } from 'typeorm';
import { RemovePopupMutationArgs, RemovePopupResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Popup } from '../../../entities/Popup';

const resolvers: Resolvers = {
  Mutation: {
    RemovePopup: authResolver(
      async (
        _,
        args: RemovePopupMutationArgs
      ): Promise<RemovePopupResponse> => {
        const { id } = args;

        try {
          await getRepository(Popup).delete(id);

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
