import {
  GraphQLObjectType,
} from 'graphql';

import CreateSignalMutation from './CreateSignal';
import UpdateSignalMutation from './UpdateSignal';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: Object.assign(
    CreateSignalMutation,
    UpdateSignalMutation,
  ),
});

export default Mutation;
