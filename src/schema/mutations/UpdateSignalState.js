import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import {
  WrongArgumentsError,
} from '../../errors';
import { SignalType } from '../types';
import { Signal } from '../../models';
import SignalStateEnum from '../types/enum/SignalState';

import {
  SIGNALED,
  ACCEPTED,
  REFUSED,
  CANCELED,
  FAILED,
  PROCESSED,
} from '../../enums/SignalState';

const args = {
  id: { type: new GraphQLNonNull(GraphQLID) },
  state: { type: SignalStateEnum },
};

const resolve = (parent, { id: _id, state }) => {
  switch (state) {
    case ACCEPTED:
      return new Promise((res, rej) => {
        Signal.findOneAndUpdate({ _id, state: SIGNALED }, { state }, { new: true }, (err, modifiedSignal) => {
          if (err) {
            rej(err);
            return;
          }
          res(modifiedSignal);
        });
      });
    case REFUSED:
      return new Promise((res, rej) => {
        Signal.findOneAndUpdate({ _id, state: SIGNALED }, { state }, { new: true }, (err, modifiedSignal) => {
          if (err) {
            rej(err);
            return;
          }
          res(modifiedSignal);
        });
      });
    case CANCELED:
      return new Promise((res, rej) => {
        Signal.findOneAndUpdate({ _id, state: SIGNALED }, { state }, { new: true }, (err, modifiedSignal) => {
          if (err) {
            rej(err);
            return;
          }
          res(modifiedSignal);
        });
      });
    case FAILED:
      return new Promise((res, rej) => {
        Signal.findOneAndUpdate({ _id, state: ACCEPTED }, { state }, { new: true }, (err, modifiedSignal) => {
          if (err) {
            rej(err);
            return;
          }
          res(modifiedSignal);
        });
      });
    case PROCESSED:
      return new Promise((res, rej) => {
        Signal.findOneAndUpdate({ _id, state: ACCEPTED }, { state }, { new: true }, (err, modifiedSignal) => {
          if (err) {
            rej(err);
            return;
          }
          res(modifiedSignal);
        });
      });
    default:
      throw new WrongArgumentsError('If you\'re here, you are probably doing something wrong'
      + ', if you don\'t think so, feel free to contact us');
  }
};

const mutation = {
  updateSignalState: {
    type: SignalType,
    args,
    resolve,
  },
};

export default mutation;
