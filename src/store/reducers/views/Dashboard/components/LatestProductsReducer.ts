import { Action, Reducer } from 'redux';
import ILatestProductsState from 'src/store/states/views/Dashboard/components/LatestProductsState';
import uuid from 'uuid/v1';
import moment from 'moment';

const unloadedState: ILatestProductsState = { 
  products: [
    {
      id: uuid(),
      name: 'Dropbox',
      imageUrl: '/images/products/product_1.png',
      updatedAt: moment().subtract(2, 'hours')
    },
    {
      id: uuid(),
      name: 'Medium Corporation',
      imageUrl: '/images/products/product_2.png',
      updatedAt: moment().subtract(2, 'hours')
    },
    {
      id: uuid(),
      name: 'Slack',
      imageUrl: '/images/products/product_3.png',
      updatedAt: moment().subtract(3, 'hours')
    },
    {
      id: uuid(),
      name: 'Lyft',
      imageUrl: '/images/products/product_4.png',
      updatedAt: moment().subtract(5, 'hours')
    },
    {
      id: uuid(),
      name: 'GitHub',
      imageUrl: '/images/products/product_5.png',
      updatedAt: moment().subtract(9, 'hours')
    }
  ]
}

export const LatestProductsReducer: Reducer<ILatestProductsState> = (state: ILatestProductsState = unloadedState, incomingAction: Action) => {
/*     const action = incomingAction as KnownLatestOrdersAction;

    switch (action.type) {
        case LatestOrdersConstants.CHANGE:
            return {
                ...state,
                [action.event.target.name]: action.event.target.value
            };
        default:
            const exhaustiveCheck: never = action;
    } */

    return state || unloadedState;
};