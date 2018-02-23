import { Action } from '@ngrx/store';
import { CartItem } from '../cartItem.model';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_PRODUCT_LIST = 'ADD_TO_PRODUCT_LIST';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export class AddToCart implements Action {
    readonly type:string = ADD_TO_CART;

    constructor(public payload: CartItem) {
        console.warn('AddToCart Action');
    }

}
export class RemoveFromCart implements Action {
    readonly type:string = REMOVE_FROM_CART;

    constructor(public payload: CartItem) {
        console.warn('RemoveFromCart Action');
    }
}
export class UpdateQuanity implements Action {
    readonly type:string = UPDATE_QUANTITY;

    constructor(public payload: CartItem) {
        console.warn('UpdateQuantity Action');
    }
}

export type All
  = RemoveFromCart
  | AddToCart
  | UpdateQuanity