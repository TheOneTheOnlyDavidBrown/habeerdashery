import { Action } from '@ngrx/store';
import { AppState } from '../appstate.interface';
import { Product } from '../product.model';

import * as CartActions from '../actions/cart.actions';

export type Action = CartActions.All;

const defaultState: AppState = {
  user:{},
  products: [],
  cart: []
}

export function cartReducer(state: AppState = defaultState, action: any = { product: Product }) {
  console.log('REDUCER', action, state);
  let { cart, products } = state;
  switch (action.type) {
      case CartActions.ADD_TO_CART:
        // mock price to id because it's a demo and I want different numbers on each product
        action.payload.product.price = action.payload.product.id*.75;
          
        if (!cart.find((c)=> c.id === action.payload.product.id)) {
         
          action.payload.product.quantity = 1;
          cart.push(action.payload.product);
        } else {
          cart.find((c) => c.id === action.payload.product.id).quantity += 1;
        }
      
        return { ...state, cart };
      case CartActions.REMOVE_FROM_CART:
        cart = cart.filter((product) => action.payload.product.id !== product.id);
        return { ...state, cart };
      case CartActions.UPDATE_QUANTITY:
        cart.find((c) => c.id === action.payload.product.id).quantity = action.payload.quantity;
        return { ...state, cart };
      case CartActions.ADD_TO_PRODUCT_LIST:
        products.push(action.payload.product);
        return { ...state, products };
      default:
        return state;
  }

}