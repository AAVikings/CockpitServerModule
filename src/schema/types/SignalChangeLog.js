import {
  GraphQLObjectType,
  GraphQLInt,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';

const Type = new GraphQLObjectType({
  name: 'SignalChangeLog',
  description: 'SignalChangeLog definition',
  fields: () => ({
    message: { type: GraphQLJSON },
    date: {
      type: GraphQLInt,
      resolve(parent) {
        return Math.trunc(parent.date.getTime() / 1000);
      },
    },
  }),
});

export default Type;
