import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';

const Type = new GraphQLObjectType({
  name: 'CloneSettingsChangeLog',
  description: 'CloneSettingsChangeLog definition',
  fields: () => ({
    reason: { type: GraphQLJSON },
    autopilot: { type: GraphQLBoolean },
    date: {
      type: GraphQLInt,
      resolve(parent) {
        return Math.trunc(parent.date.getTime() / 1000);
      },
    },
  }),
});

export default Type;
