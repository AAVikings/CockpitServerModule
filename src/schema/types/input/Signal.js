import {
  GraphQLString,
  GraphQLInputObjectType,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';

const Type = new GraphQLInputObjectType({
  name: 'SignalInput',
  description: 'Payload for signal input',
  fields: () => ({
    cloneId: { type: GraphQLString },
    context: { type: GraphQLJSON },
    orderData: { type: GraphQLJSON },
    reason: { type: GraphQLJSON },
  }),
});

export default Type;
