import { getRepository } from 'typeorm';
import {
  ConfirmReserveMutationArgs,
  ConfirmReserveResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Reserve } from '../../../entities/Reserve';

const resolvers: Resolvers = {
  Mutation: {
    ConfirmReserve: authResolver(
      async (
        _,
        args: ConfirmReserveMutationArgs
      ): Promise<ConfirmReserveResponse> => {
        const { id, confirmDate, confirmTime } = args;

        try {
          await getRepository(Reserve).update(
            { id },
            {
              confirmDate,
              confirmTime,
              isConfirm: true,
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
