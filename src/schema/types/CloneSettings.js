import {
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
} from 'graphql';
import CloneSettingsChangeLogType from './CloneSettingsChangeLog';

const Type = new GraphQLObjectType({
  name: 'CloneSettings',
  description: 'CloneSettings definition',
  fields: () => ({
    id: { type: GraphQLID },
    cloneId: { type: GraphQLString },
    autopilot: { type: GraphQLBoolean },
    changeLogs: {
      type: new GraphQLList(CloneSettingsChangeLogType),
      resolve(parent) {
        return parent.changeLogs;
      },
    },
  }),
});

export default Type;
