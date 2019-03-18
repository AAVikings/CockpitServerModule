import {
  GraphQLObjectType,
} from 'graphql';
import SignalStateEnumType from './enum/SignalState';

const Type = new GraphQLObjectType({
  name: 'SignalChangeLog',
  description: 'SignalChangeLog definition',
  fields: () => ({
    fromState: { type: SignalStateEnumType },
    toState: { type: SignalStateEnumType },
    date: Number,
  }),
});

export default Type;
