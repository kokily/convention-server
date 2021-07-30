import { getRepository } from 'typeorm';
import {
  CancelReserveMutationArgs,
  CancelReserveResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Reserve } from '../../../entities/Reserve';

const resolvers: Resolvers = {
  Mutation: {
    CancelReserve: authResolver(
      async (
        _,
        args: CancelReserveMutationArgs
      ): Promise<CancelReserveResponse> => {
        const { id } = args;

        try {
          await getRepository(Reserve).update(
            { id },
            {
              confirmDate: null,
              confirmTime: null,
              isConfirm: false,
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
