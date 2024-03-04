import React, { useMemo, useState } from 'react';

import ProductContext, { initialState } from './ProductContext';

const ProductContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const context = useMemo(() => ({ ...state, setState }), [state, setState]);
  return <ProductContext.Provider value={context}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
