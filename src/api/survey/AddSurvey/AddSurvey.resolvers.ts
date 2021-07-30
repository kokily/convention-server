import { getRepository } from 'typeorm';
import { AddSurveyMutationArgs, AddSurveyResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Survey } from '../../../entities/Survey';

const resolvers: Resolvers = {
  Mutation: {
    AddSurvey: async (
      _,
      args: AddSurveyMutationArgs
    ): Promise<AddSurveyResponse> => {
      try {
        const survey = await getRepository(Survey).create({ ...args });

        await survey.save();

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
