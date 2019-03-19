import {
  GraphQLEnumType,
} from 'graphql';

import { SignalStateEnum } from '../../../enums/SignalState';

const values = {};
SignalStateEnum.forEach((SignalState) => {
  values[SignalState] = { value: SignalState };
});

const SignalStateEnumType = new GraphQLEnumType({
  name: 'SignalStateEnum',
  values,
});

export {
  SignalStateEnumType as default,
};
