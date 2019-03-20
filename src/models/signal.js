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
    changeLogs: [{
      reason: Object,
      state: {
        type: String,
        enum: SignalStateEnum,
      },
      context: Object,
      orderData: Object,
      date: Date,
    }],
  },
  {
    timestamps: true,
  },
);

const Signal = mongoose.model('Signal', signalSchema);

export default Signal;
