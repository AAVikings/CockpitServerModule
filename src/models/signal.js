const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const signalSchema = new Schema(
  {
    cloneId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    orderCreator: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: String,
      required: true,
    },
    orderData: Object,
    changeLogs: [{
      message: Object,
      date: Date,
    }],
  },
  {
    timestamps: true,
  },
);

const Signal = mongoose.model('Signal', signalSchema);

export default Signal;
