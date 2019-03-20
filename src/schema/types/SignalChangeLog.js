import {
  GraphQLObjectType,
  GraphQLInt,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import SignalStateEnumType from './enum/SignalState';

const Type = new GraphQLObjectType({
  name: 'SignalChangeLog',
  description: 'SignalChangeLog definition',
  fields: () => ({
    reason: { type: GraphQLJSON },
    state: { type: SignalStateEnumType },
    context: { type: GraphQLJSON },
    orderData: { type: GraphQLJSON },
    date: {
      type: GraphQLInt,
      resolve(parent) {
        return Math.trunc(parent.date.getTime() / 1000);
      },
    },
  }),
});

export default Type;
