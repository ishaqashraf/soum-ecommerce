export const flattenedProductsData = data => {
  return data.reduce((acc, category) => {
    const categoryData = category.children.reduce((brandAcc, brand) => {
      const brandData = brand.children.reduce((modelAcc, model) => {
        const modelData = model.children.map(variant => ({
          categoryId: category.id,
          categoryName: category.name,
          brandId: brand.id,
          brandName: brand.name,
          modelId: model.id,
          modelName: model.name,
          variantId: variant.id,
          variantName: variant.name,
          imageUrl: variant.imageUrl,
          price: variant.price
        }));

        return modelAcc.concat(modelData);
      }, []);

      return brandAcc.concat(brandData);
    }, []);

    return acc.concat(categoryData);
  }, []);
};