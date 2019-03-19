import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import {
  WrongArgumentsError,
} from '../../errors';
import { OrderType } from '../types';
import { Order } from '../../models';
import OrderStateEnum from '../types/enum/OrderState';

import {
  CANCELED,
  ORDERED,
  FAILED,
  PROCESSED,
} from '../../enums/OrderState';

const args = {
  id: { type: new GraphQLNonNull(GraphQLID) },
  state: { type: OrderStateEnum },
  reason: { type: GraphQLJSON },
};

const resolve = (parent, { id: _id, state, reason }) => {
  switch (state) {
    case CANCELED:
      return new Promise((res, rej) => {
        Order.findOneAndUpdate({ _id, state: ORDERED }, {
          state,
          $push: {
            reason,
            fromState: ORDERED,
            toState: state,
            date: Date.now(),
          },
        }, { new: true }, (err, modifiedOrder) => {
          if (err) {
            rej(err);
            return;
          }
          res(modifiedOrder);
        });
      });
    case FAILED:
      return new Promise((res, rej) => {
        Order.findOneAndUpdate({ _id, state: ORDERED }, {
          state,
          $push: {
            reason,
            fromState: ORDERED,
            toState: state,
            date: Date.now(),
          },
        }, { new: true }, (err, modifiedOrder) => {
          if (err) {
            rej(err);
            return;
          }
          res(modifiedOrder);
        });
      });
    case PROCESSED:
      return new Promise((res, rej) => {
        Order.findOneAndUpdate({ _id, state: ORDERED }, {
          state,
          $push: {
            reason,
            fromState: ORDERED,
            toState: state,
            date: Date.now(),
          },
        }, { new: true }, (err, modifiedOrder) => {
          if (err) {
            rej(err);
            return;
          }
          res(modifiedOrder);
        });
      });
    default:
      throw new WrongArgumentsError('If you\'re here, you are probably doing something wrong'
      + ', if you don\'t think so, feel free to contact us');
  }
};

const mutation = {
  updateOrderState: {
    type: OrderType,
    args,
    resolve,
  },
};

export default mutation;
