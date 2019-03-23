import {
  GraphQLObjectType,
} from 'graphql';

import SignalsByCloneIdQuery from './SignalsByCloneId';
import CloneSettingsByCloneId from './CloneSettingsByCloneId';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: Object.assign(
    SignalsByCloneIdQuery,
    CloneSettingsByCloneId,
  ),
});

export default RootQuery;
