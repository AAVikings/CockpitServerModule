import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import { SignalType } from '../types';
import { Signal } from '../../models';
import { WrongArgumentsError } from '../../errors';

const args = {
  id: { type: new GraphQLNonNull(GraphQLID) },
  message: { type: new GraphQLNonNull(GraphQLJSON) },
};

const resolve = (parent, {
  id: _id,
  message,
}) => {
  const date = Date.now();

  if (message.order === undefined) {
    throw new WrongArgumentsError('"message" should contain an "order" property');
  }

  const signalUpdate = {
    orderId: message.order.id,
    orderCreator: message.order.creator,
    orderStatus: message.order.status,
    orderData: message.order,
    $push: {
      changeLogs: {
        message,
        date,
      },
    },
  };

  return new Promise((res, rej) => {
    Signal.findOneAndUpdate(
      { _id },
      signalUpdate,
      { new: true },
      (err, modifiedSignal) => {
        if (err) {
          rej(err);
          return;
        }
        res(modifiedSignal);
      },
    );
  });
};

const mutation = {
  updateSignal: {
    type: SignalType,
    args,
    resolve,
  },
};

export default mutation;
