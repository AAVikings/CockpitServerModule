import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import { SignalType } from '../types';
import { Signal } from '../../models';
import { SignalInputType } from '../types/input';
import { SIGNALED } from '../../enums/SignalState';

export const args = {
  cloneId: { type: new GraphQLNonNull(GraphQLString) },
  signal: { type: SignalInputType },
  reason: { type: GraphQLJSON },
};

const resolve = (parent, { cloneId, signal, reason }) => {
  signal.cloneId = cloneId;
  signal.changeLogs.push({ reason, toState: SIGNALED, date: Date.now() });
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
