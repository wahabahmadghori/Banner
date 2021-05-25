import React from 'react'
import { ResourceItem, TextStyle ,Thumbnail } from '@shopify/polaris'
import {
  SmileyHappyMajor
} from '@shopify/polaris-icons';
const ProductItem = ({product}) => {
    const { title } = product;
    const image = product.images[0]?products.images[0].originalSrc:SmileyHappyMajor
          return (
            <ResourceItem
            >
              <Thumbnail source={image} alt={title}/>
              <h3>
                <TextStyle variation="strong">{title}</TextStyle>
              </h3>
            </ResourceItem>
          );
}

export default ProductItem
