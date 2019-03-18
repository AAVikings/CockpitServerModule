import mongoose, { Schema } from 'mongoose';
import {
  ORDERED,
  OrderStateEnum,
} from '../enums/OrderState';

const orderSchema = new Schema(
  {
    state: {
      type: String,
      enum: OrderStateEnum,
      default: ORDERED,
    },
    cloneId: {
      type: String,
      required: true,
    },
    orderData: Object,
    reason: Object,
    changeLogs: [{
      fromState: {
        type: String,
        enum: OrderStateEnum,
        required: true,
      },
      toState: {
        type: String,
        enum: OrderStateEnum,
        required: true,
      },
      date: Date,
    }],
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
