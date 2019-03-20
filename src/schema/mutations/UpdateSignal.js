import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import { SignalType } from '../types';
import { Signal } from '../../models';
import SignalStateEnum from '../types/enum/SignalState';

const args = {
  id: { type: new GraphQLNonNull(GraphQLID) },
  state: { type: SignalStateEnum },
  context: { type: GraphQLJSON },
  orderData: { type: GraphQLJSON },
  reason: { type: GraphQLJSON },
};

const resolve = (parent, {
  id: _id,
  state,
  context,
  orderData,
  reason,
}) => {
  const date = Date.now();
  const signalUpdate = Object.assign(
    (state) ? { state } : {},
    (context) ? { context } : {},
    (orderData) ? { orderData } : {},
  );
  const changeLog = Object.assign(
    (reason) ? { reason } : {},
    (state) ? { state } : {},
    (context) ? { context } : {},
    (orderData) ? { orderData } : {},
    { date },
  );

  signalUpdate.$push = { changeLogs: changeLog };

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
