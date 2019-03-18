import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { SignalType } from '../types';
import { Signal } from '../../models';
import { SignalInputType } from '../types/input';

export const args = {
  cloneId: { type: new GraphQLNonNull(GraphQLString) },
  signal: { type: SignalInputType },
};

const resolve = (parent, { cloneId, signal }) => {
  signal.cloneId = cloneId;
  const newSignal = new Signal(signal);
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
