import {
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import OrderChangeLogType from './OrderChangeLog';
import OrderStateEnumType from './enum/OrderState';

const Type = new GraphQLObjectType({
  name: 'Order',
  description: 'Order definition',
  fields: () => ({
    state: { type: OrderStateEnumType },
    cloneId: { type: GraphQLString },
    orderData: { type: GraphQLJSON },
    changeLogs: {
      type: new GraphQLList(OrderChangeLogType),
      resolve(parent) {
        return parent.changeLogs;
      },
    },
  }),
});

export default Type;
