import {
  GraphQLEnumType,
} from 'graphql';

import { OrderStateEnum } from '../../../enums/OrderState';

const values = {};
OrderStateEnum.forEach((OrderState) => {
  values[OrderState] = { value: OrderState };
});

const OrderStateEnumType = new GraphQLEnumType({
  name: 'OrderStateEnum',
  values,
});

export {
  OrderStateEnumType as default,
};
