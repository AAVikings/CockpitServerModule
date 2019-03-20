import {
  GraphQLObjectType,
} from 'graphql';

import SignalsByCloneIdQuery from './SignalsByCloneId';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: Object.assign(
    SignalsByCloneIdQuery,
  ),
});

export default RootQuery;
