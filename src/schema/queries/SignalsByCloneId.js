import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import { SignalType } from '../types';
import { Signal } from '../../models';

const args = {
  cloneId: { type: new GraphQLNonNull(GraphQLString) },
  orderStatus: { type: GraphQLString },
};

const resolve = (parent, { cloneId, orderStatus }) => new Promise((res, rej) => {
  const request = { cloneId };
  if (orderStatus) { request.orderStatus = orderStatus; }

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
