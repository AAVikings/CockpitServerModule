import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import { CloneSettingsType } from '../types';
import { CloneSettings } from '../../models';

const args = {
  cloneId: { type: new GraphQLNonNull(GraphQLString) },
  autopilot: { type: new GraphQLNonNull(GraphQLBoolean) },
  reason: { type: GraphQLJSON },
};

const resolve = (parent, {
  cloneId,
  autopilot,
  reason,
}) => {
  const date = Date.now();
  const signalUpdate = {
    autopilot,
    $push: {
      changeLogs: {
        reason,
        autopilot,
        date,
      },
    },
  };

  return new Promise((res, rej) => {
    CloneSettings.findOneAndUpdate(
      { cloneId },
      signalUpdate,
      { new: true, upsert: true },
      (err, modifiedCloneSettings) => {
        if (err) {
          rej(err);
          return;
        }
        res(modifiedCloneSettings);
      },
    );
  });
};

const mutation = {
  updateCloneSettingsByCloneId: {
    type: CloneSettingsType,
    args,
    resolve,
  },
};

export default mutation;
