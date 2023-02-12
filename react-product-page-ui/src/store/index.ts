import { configureCustomStore } from '../lib/state/store';
import { cartReducer } from './cart';

export default configureCustomStore({}, { cart: cartReducer });
