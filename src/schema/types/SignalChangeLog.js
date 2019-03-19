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
    fromState: { type: SignalStateEnumType },
    toState: { type: SignalStateEnumType },
    date: { type: GraphQLInt },
  }),
});

export default Type;
