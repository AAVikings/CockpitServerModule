import {
  GraphQLObjectType,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import OrderStateEnumType from './enum/OrderState';

const Type = new GraphQLObjectType({
  name: 'OrderChangeLog',
  description: 'OrderChangeLog definition',
  fields: () => ({
    reason: { type: GraphQLJSON },
    fromState: { type: OrderStateEnumType },
    toState: { type: OrderStateEnumType },
    date: Number,
  }),
});

export default Type;
