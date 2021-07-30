import { getRepository } from 'typeorm';
import { AddBanquetMutationArgs, AddBanquetResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Banquet } from '../../../entities/Banquet';

const resolvers: Resolvers = {
  Mutation: {
    AddBanquet: authResolver(
      async (_, args: AddBanquetMutationArgs): Promise<AddBanquetResponse> => {
        try {
          const banquet = await getRepository(Banquet).create({ ...args });

          await banquet.save();

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
