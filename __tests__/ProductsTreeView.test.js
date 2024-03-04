import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ProductsTreeView from '../src/components/molecules/ProductsTreeView/ProductsTreeView';

describe('ProductsTreeView', () => {
  const data = [
    { id: 1, name: 'Product 1', labelCount: 2 },
    { id: 2, name: 'Product 2', labelCount: 1 },
  ];

  const selectedIds = [1];
  const setSelectedIdsMock = jest.fn();

  it('renders correctly', () => {
    const { getByTestId } = render(
      <ProductsTreeView
        data={data}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIdsMock}
      />
    );

    // Check if the component renders correctly
    expect(getByTestId('productsTreeView')).toBeDefined();
  });

  it('renders FlatList with correct data and keyExtractor', () => {
    const { getByText, getByTestId } = render(
      <ProductsTreeView
        data={data}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIdsMock}
      />
    );

    // Check if the FlatList is rendered
    expect(getByTestId('productsTreeViewList')).toBeDefined();

    // Check if the data is rendered correctly
    data.forEach(item => {
      expect(getByText(item.name)).toBeDefined();
      expect(getByText(item.labelCount.toString())).toBeDefined();
    });
  });
});
