import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { CloneSettingsType } from '../types';
import { CloneSettings } from '../../models';

const args = {
  cloneId: { type: new GraphQLNonNull(GraphQLString) },
};

const resolve = (parent, { cloneId }) => new Promise((res, rej) => {
  CloneSettings.findOne({ cloneId }).exec((err, cloneSettings) => {
    if (err) {
      rej(err);
      return;
    }
    if (!cloneSettings) {
      const date = Date.now();
      const newCloneSettings = new CloneSettings({
        cloneId,
        changeLogs: [{
          autopilot: true,
          date,
        }],
      });
      newCloneSettings.save((errbis) => {
        if (errbis) {
          rej(errbis);
          return;
        }
        res(newCloneSettings);
      });
    } else {
      res(cloneSettings);
    }
  });
});

const query = {
  CloneSettingsByCloneId: {
    type: CloneSettingsType,
    args,
    resolve,
  },
};

export default query;
