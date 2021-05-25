import React from 'react'
import { ResourceItem, TextStyle ,Thumbnail } from '@shopify/polaris'
import {
  SmileyHappyMajor
} from '@shopify/polaris-icons';
const ProductItem = ({product}) => {
    const { title } = product;
    const image = product.images[0]?product.images[0].originalSrc:SmileyHappyMajor
          return (
            <ResourceItem
            >
              <Thumbnail source={image} alt={title}/>
                <TextStyle variation="strong">{title}</TextStyle>
            </ResourceItem>
          );
}

export default ProductItem
