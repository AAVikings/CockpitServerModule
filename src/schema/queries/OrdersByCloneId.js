import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import { OrderType } from '../types';
import { Order } from '../../models';
import OrderState from '../types/enum/OrderState';

const args = {
  cloneId: { type: new GraphQLNonNull(GraphQLString) },
  state: { type: OrderState },
};

const resolve = (parent, { cloneId, state }) => new Promise((res, rej) => {
  const request = { cloneId };
  if (state) { request.state = state; }
  Order.find(request).exec((err, strategies) => {
    if (err) {
      rej(err);
      return;
    }
    res(strategies);
  });
});

const query = {
  ordersByClondeId: {
    type: new GraphQLList(OrderType),
    args,
    resolve,
  },
};

export default query;
