import React from 'react'
import { ResourceItem, TextStyle } from '@shopify/polaris'
const ProductItem = ({product}) => {
    const { title } = product;
          return (
            <ResourceItem
            >
              <h3>
                <TextStyle variation="strong">{title}</TextStyle>
              </h3>
            </ResourceItem>
          );
}

export default ProductItem
