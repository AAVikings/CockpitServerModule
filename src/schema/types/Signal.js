import {
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import SignalChangeLogType from './SignalChangeLog';

const Type = new GraphQLObjectType({
  name: 'Signal',
  description: 'Signal definition',
  fields: () => ({
    id: { type: GraphQLID },
    cloneId: { type: GraphQLString },
    orderId: { type: GraphQLString },
    orderCreator: { type: GraphQLString },
    orderStatus: { type: GraphQLString },
    orderData: { type: GraphQLJSON },
    changeLogs: {
      type: new GraphQLList(SignalChangeLogType),
      resolve(parent) {
        return parent.changeLogs;
      },
    },
  }),
});

export default Type;
