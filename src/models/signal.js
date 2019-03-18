import mongoose, { Schema } from 'mongoose';
import {
  SIGNALED,
  SignalStateEnum,
} from '../enums/SignalState';

const signalSchema = new Schema(
  {
    state: {
      type: String,
      enum: SignalStateEnum,
      default: SIGNALED,
    },
    cloneId: {
      type: String,
      required: true,
    },
    context: Object,
    orderData: Object,
    reason: Object,
    changeLogs: [{
      fromState: {
        type: String,
        enum: SignalStateEnum,
        required: true,
      },
      toState: {
        type: String,
        enum: SignalStateEnum,
        required: true,
      },
      date: Date,
    }],
  },
  {
    timestamps: true,
  },
);

const Signal = mongoose.model('Signal', signalSchema);

export default Signal;
