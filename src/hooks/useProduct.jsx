import {useContext, useMemo} from 'react';
import {ProductContext} from '../context/product';
import {flatFilteredProducts, flattenedProductsData} from '../lib/helpers';
import DATA from '../dataSource/getAllProductsWithCategories.json';

const useProduct = () => {
  const context = useContext(ProductContext);

  const setState = context.setState;

  const methods = useMemo(
    () => ({
      getAllProducts: async () => {
        setState(ctx => ({...ctx, loading: true}));
        const data = await flattenedProductsData(DATA);
        if (data) {
          setState(ctx => ({
            ...ctx,
            products: data,
            filteredProducts: data,
            loading: false,
          }));
        }
      },

      onFilteredProducts: async (selectedIds, data) => {
        setState(ctx => ({...ctx, loading: true}));

        const keys = ['categoryId', 'brandId', 'modelId', 'variantId'];
        const result = data.filter(function (e) {
          return keys.some(function (a) {
            return selectedIds.includes(e[a]);
          });
        });
        if (result) {
          setState(ctx => ({
            ...ctx,
            products: selectedIds.length == 0 ? data : result,
            loading: false,
          }));
        }
      },

      clearState() {
        setState({
          products: [],
          filteredProducts,
          loading: false,
        });
      },
    }),
    [setState],
  );

  return useMemo(
    () => ({
      ...context,
      ...methods,
    }),
    [context, methods],
  );
};

export default useProduct;
