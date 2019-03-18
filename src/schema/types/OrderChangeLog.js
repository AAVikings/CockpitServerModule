import {
  GraphQLObjectType,
} from 'graphql';
import OrderStateEnumType from './enum/OrderState';

const Type = new GraphQLObjectType({
  name: 'OrderChangeLog',
  description: 'OrderChangeLog definition',
  fields: () => ({
    fromState: { type: OrderStateEnumType },
    toState: { type: OrderStateEnumType },
    date: Number,
  }),
});

export default Type;
