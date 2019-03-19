import {
  GraphQLObjectType,
} from 'graphql';

import CreateSignalMutation from './CreateSignal';
import CreateOrderMutation from './CreateOrder';
import UpdateSignalStateMutation from './UpdateSignalState';
import UpdateOrderStateMutation from './UpdateOrderState';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: Object.assign(
    CreateSignalMutation,
    CreateOrderMutation,
    UpdateSignalStateMutation,
    UpdateOrderStateMutation,
  ),
});

export default Mutation;
