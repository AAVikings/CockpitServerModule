import {
  GraphQLObjectType,
} from 'graphql';

import CreateSignalMutation from './CreateSignal';
import UpdateSignalMutation from './UpdateSignal';
import UpdateSettingsByCloneIdMutation from './UpdateSettingsByCloneId';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: Object.assign(
    CreateSignalMutation,
    UpdateSignalMutation,
    UpdateSettingsByCloneIdMutation,
  ),
});

export default Mutation;
