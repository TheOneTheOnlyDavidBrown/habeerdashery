import { Action } from '@ngrx/store';
import { AppState } from '../appstate.interface';

import * as CartActions from '../actions/cart.actions';
import { CartItem } from '../cartItem.model';

const initialState: AppState = {
  cart: []
}

export function cartReducer(state: AppState = initialState, action: CartActions.All) {
  console.log('CART REDUCER', action, state);
  let { cart: cartItems } = state;
  switch (action.type) {
      case CartActions.ADD_TO_CART:
        if (!cartItems.find((c)=> c.product.id === action.payload.product.id)) {
          action.payload.quantity = 1;
          action.payload.price = action.payload.product.price;
          cartItems.push(action.payload);
        } else {
          cartItems.find((c) => c.product.id === action.payload.product.id).quantity += 1;
        }
        return { ...state, cart: cartItems };
      case CartActions.REMOVE_FROM_CART:
        cartItems = cartItems.filter((cartItem) => action.payload.product.id !== cartItem.product.id);
        return { ...state, cart: cartItems };
      case CartActions.UPDATE_QUANTITY:
        cartItems.find((c) => c.product.id === action.payload.product.id).quantity = action.payload.quantity;
        return { ...state, cart: cartItems };
      default:
        return state;
  }

}