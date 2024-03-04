import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ProductTreeItem from '../src/components/atoms/ProductTreeItem/ProductTreeItem';

describe('ProductTreeItem', () => {
  const item = {
    id: 1,
    name: 'Product 1',
    labelCount: 2,
    children: [
      {id: 2, name: 'Subproduct 1'},
      {id: 3, name: 'Subproduct 2'},
    ],
  };

  const onToggleMock = jest.fn();
  const selectedIds = [1];

  it('renders correctly', () => {
    const {getByText, getByTestId} = render(
      <ProductTreeItem
        item={item}
        onToggle={onToggleMock}
        selectedIds={selectedIds}
      />,
    );

    // Check if the component renders correctly
    expect(getByTestId('productTreeItem')).toBeDefined();
    expect(getByText('Product 1')).toBeDefined();
    expect(getByText('2')).toBeDefined(); // Check for labelCount
  });

  it('handles toggle correctly', () => {
    const {getByTestId} = render(
      <ProductTreeItem
        item={item}
        onToggle={onToggleMock}
        selectedIds={selectedIds}
      />,
    );

    fireEvent.press(getByTestId('productTreeItemToggle'));

  });

  it('renders children when open', () => {
    const {getByTestId, getByText} = render(
      <ProductTreeItem
        item={item}
        onToggle={onToggleMock}
        selectedIds={selectedIds}
      />,
    );

    fireEvent.press(getByTestId('productTreeItemToggle'));

    // Check if the children are rendered dynamically
    item.children.forEach(child => {
      expect(getByText(child.name)).toBeDefined();
    });
  });
});
