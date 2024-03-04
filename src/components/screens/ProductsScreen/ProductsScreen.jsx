import Products from './Products';
import {ProductContextProvider} from '../../../context/product';

const ProductsScreen = () => (
  <ProductContextProvider>
    <Products />
  </ProductContextProvider>
);

export default ProductsScreen;
