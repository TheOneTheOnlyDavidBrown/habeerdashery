import { Action } from '@ngrx/store';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_PRODUCT_LIST = 'ADD_TO_PRODUCT_LIST';
export const UPDATE_QUANTITY = 'INCREASE_QUANTITY';

export class AddToCart implements Action {
    readonly type = ADD_TO_CART;

    constructor(public payload: object) {
        console.warn('AddToCart Action');
    }

}
export class RemoveFromCart implements Action {
    readonly type = REMOVE_FROM_CART;

    constructor(public payload: number) {
        console.warn('RemoveFromCart Action');
    }
}
export class AddToProductList implements Action {
    readonly type = ADD_TO_PRODUCT_LIST;

    constructor(public payload: number) {
        console.warn('AddToProductList Action');
    }
}
export class UpdateQuanity implements Action {
    readonly type = UPDATE_QUANTITY;

    constructor(public payload: number) {
        console.warn('increaseQuantity Action');
    }
}

export type All
  = RemoveFromCart
  | AddToCart
  | AddToProductList
  | UpdateQuanity