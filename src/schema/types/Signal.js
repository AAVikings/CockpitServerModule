import {
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import SignalChangeLogType from './SignalChangeLog';
import SignalStateEnumType from './enum/SignalState';

const Type = new GraphQLObjectType({
  name: 'Signal',
  description: 'Signal definition',
  fields: () => ({
    id: { type: GraphQLID },
    state: { type: SignalStateEnumType },
    cloneId: { type: GraphQLString },
    context: { type: GraphQLJSON },
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
