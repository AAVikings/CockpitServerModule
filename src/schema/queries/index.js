import {
  GraphQLObjectType,
} from 'graphql';

import OrdersByCloneIdQuery from './OrdersByCloneId';
import SignalsByCloneIdQuery from './SignalsByCloneId';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: Object.assign(
    OrdersByCloneIdQuery,
    SignalsByCloneIdQuery,
  ),
});

export default RootQuery;
