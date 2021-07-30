import { getRepository } from 'typeorm';
import { UpdatePopupMutationArgs, UpdatePopupResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { cleanNullArgs } from '../../../libs/utils';
import { Popup } from '../../../entities/Popup';

const resolvers: Resolvers = {
  Mutation: {
    UpdatePopup: authResolver(
      async (
        _,
        args: UpdatePopupMutationArgs
      ): Promise<UpdatePopupResponse> => {
        const { id } = args;

        try {
          await getRepository(Popup).update({ id }, { ...cleanNullArgs(args) });

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
