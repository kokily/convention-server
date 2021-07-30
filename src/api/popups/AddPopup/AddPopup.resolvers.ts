import { getRepository } from 'typeorm';
import { AddPopupMutationArgs, AddPopupResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Popup } from '../../../entities/Popup';

const resolvers: Resolvers = {
  Mutation: {
    AddPopup: authResolver(
      async (_, args: AddPopupMutationArgs): Promise<AddPopupResponse> => {
        try {
          const popup = await getRepository(Popup).create({ ...args });

          await popup.save();

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
