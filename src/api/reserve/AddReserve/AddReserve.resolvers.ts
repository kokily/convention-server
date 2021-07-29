import { getRepository } from 'typeorm';
import { AddReserveMutationArgs, AddReserveResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Reserve } from '../../../entities/Reserve';

const resolvers: Resolvers = {
  Mutation: {
    AddReserve: async (
      _,
      args: AddReserveMutationArgs
    ): Promise<AddReserveResponse> => {
      try {
        const reserve = await getRepository(Reserve).create({ ...args });

        await reserve.save();

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
    },
  },
};

export default resolvers;
