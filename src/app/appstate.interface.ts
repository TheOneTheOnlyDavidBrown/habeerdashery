import { Product } from './product.model';
import { CartItem } from './cartItem.model';

export interface AppState {
    products: Product[]
    cart: CartItem[]
    user: object
  }
  