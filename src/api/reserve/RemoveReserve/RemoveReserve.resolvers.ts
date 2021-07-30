import { getRepository } from 'typeorm';
import {
  RemoveReserveMutationArgs,
  RemoveReserveResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Reserve } from '../../../entities/Reserve';

const resolvers: Resolvers = {
  Mutation: {
    RemoveReserve: authResolver(
      async (
        _,
        args: RemoveReserveMutationArgs
      ): Promise<RemoveReserveResponse> => {
        const { id } = args;

        try {
          await getRepository(Reserve).delete(id);

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
