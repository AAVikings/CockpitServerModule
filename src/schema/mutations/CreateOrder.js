import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { OrderType } from '../types';
import { Order } from '../../models';
import { OrderInputType } from '../types/input';

export const args = {
  cloneId: { type: new GraphQLNonNull(GraphQLString) },
  order: { type: OrderInputType },
};

const resolve = (parent, { cloneId, order }) => {
  order.cloneId = cloneId;
  const newOrder = new Order(order);
  return new Promise((res, rej) => {
    newOrder.save((err) => {
      if (err) {
        rej(err);
        return;
      }
      res(newOrder);
    });
  });
};

const mutation = {
  createOrder: {
    type: OrderType,
    args,
    resolve,
  },
};

export default mutation;
