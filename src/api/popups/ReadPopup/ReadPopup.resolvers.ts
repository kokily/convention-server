import { getRepository } from 'typeorm';
import { ReadPopupQueryArgs, ReadPopupResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Popup } from '../../../entities/Popup';

const resolvers: Resolvers = {
  Query: {
    ReadPopup: authResolver(
      async (_, args: ReadPopupQueryArgs): Promise<ReadPopupResponse> => {
        const { id } = args;

        try {
          const popup = await getRepository(Popup).findOne(id);

          if (!popup) {
            return {
              ok: false,
              error: '해당하는 게시물이 없습니다.',
              popup: null,
            };
          }

          return {
            ok: true,
            error: null,
            popup,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            popup: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
