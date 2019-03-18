import {
  GraphQLString,
  GraphQLInputObjectType,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';

const Type = new GraphQLInputObjectType({
  name: 'OrderInput',
  description: 'Payload for order input',
  fields: () => ({
    cloneId: { type: GraphQLString },
    orderData: { type: GraphQLJSON },
    reason: { type: GraphQLJSON },
  }),
});

export default Type;
