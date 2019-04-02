import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import { SignalType } from '../types';
import { Signal } from '../../models';
import { WrongArgumentsError } from '../../errors';


export const args = {
  cloneId: { type: new GraphQLNonNull(GraphQLString) },
  message: { type: new GraphQLNonNull(GraphQLJSON) },
};

const resolve = (parent, {
  cloneId,
  message,
}) => {
  if (message.order === undefined) {
    throw new WrongArgumentsError('"message" should contain an "order" property');
  }
  const date = Date.now();

  const newSignal = new Signal({
    cloneId,
    orderId: message.order.id,
    orderCreator: message.order.creator,
    orderStatus: message.order.status,
    orderData: message.order,
    changeLogs: [{
      message,
      date,
    }],
  });

  return new Promise((res, rej) => {
    newSignal.save((err) => {
      if (err) {
        rej(err);
        return;
      }
      res(newSignal);
    });
  });
};

const mutation = {
  createSignal: {
    type: SignalType,
    args,
    resolve,
  },
};

export default mutation;
