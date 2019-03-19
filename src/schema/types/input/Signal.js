import {
  GraphQLInputObjectType,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';

const Type = new GraphQLInputObjectType({
  name: 'SignalInput',
  description: 'Payload for signal input',
  fields: () => ({
    context: { type: GraphQLJSON },
    orderData: { type: GraphQLJSON },
  }),
});

export default Type;
