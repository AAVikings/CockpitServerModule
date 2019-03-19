import {
  GraphQLInputObjectType,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';

const Type = new GraphQLInputObjectType({
  name: 'OrderInput',
  description: 'Payload for order input',
  fields: () => ({
    orderData: { type: GraphQLJSON },
  }),
});

export default Type;
