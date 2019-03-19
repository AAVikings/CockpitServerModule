import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import { OrderType } from '../types';
import { Order } from '../../models';
import { OrderInputType } from '../types/input';
import { ORDERED } from '../../enums/OrderState';

export const args = {
  cloneId: { type: new GraphQLNonNull(GraphQLString) },
  order: { type: OrderInputType },
  reason: { type: GraphQLJSON },
};

const resolve = (parent, { cloneId, order, reason }) => {
  order.cloneId = cloneId;
  order.changeLogs.push({ reason, toState: ORDERED, date: Date.now() });
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
