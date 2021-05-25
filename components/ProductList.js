import React from 'react'
import { Card, ResourceList, ResourceItem, TextStyle } from '@shopify/polaris'
import ProductItem from '../components/ProductItem'

const ProductList = ({ products }) => {
  return (
    <Card>
      <ResourceList
        showHeader
        resourceName={{ singular: 'Product', plural: 'Products' }}
        items={products}
        renderItem={(product) => {
          console.log(product)
          return (
            <ProductItem product={product}/>
          );
        }}
      />
    </Card>
  )
}

export default ProductList
