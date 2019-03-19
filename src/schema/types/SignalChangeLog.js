import {
  GraphQLObjectType,
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
    date: Number,
  }),
});

export default Type;
