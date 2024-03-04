import { generateContext } from '../../lib/generateContext';

export const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
};

export default generateContext();
