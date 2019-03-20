import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import { SignalType } from '../types';
import { Signal } from '../../models';
import SignalState from '../types/enum/SignalState';

const args = {
  cloneId: { type: new GraphQLNonNull(GraphQLString) },
  state: { type: SignalState },
};

const resolve = (parent, { cloneId, state }) => new Promise((res, rej) => {
  const request = { cloneId };
  if (state) { request.state = state; }
  Signal.find(request).exec((err, strategies) => {
    if (err) {
      rej(err);
      return;
    }
    res(strategies);
  });
});

const query = {
  signalsByCloneId: {
    type: new GraphQLList(SignalType),
    args,
    resolve,
  },
};

export default query;
