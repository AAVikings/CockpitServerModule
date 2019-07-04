const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const cloneSettingsSchema = new Schema(
  {
    cloneId: {
      type: String,
      required: true,
    },
    autopilot: {
      type: Boolean,
      required: true,
      default: true,
    },
    changeLogs: [{
      reason: Object,
      autopilot: Boolean,
      date: Date,
    }],
  },
  {
    timestamps: true,
  },
);

const CloneSettings = mongoose.model('CloneSettings', cloneSettingsSchema);

export default CloneSettings;
