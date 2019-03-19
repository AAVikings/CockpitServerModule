import {
  GraphQLObjectType,
} from 'graphql';

import CreateSignalMutation from './CreateSignal';
import CreateOrderMutation from './CreateOrder';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: Object.assign(
    CreateSignalMutation,
    CreateOrderMutation,
  ),
});

export default Mutation;
