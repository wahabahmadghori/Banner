import React from 'react'
import { ResourceItem, TextStyle, Thumbnail,Stack } from '@shopify/polaris'
import {
  SmileyHappyMajor
} from '@shopify/polaris-icons';
const ProductItem = ({ product }) => {
  const { title } = product;
  const image = product.images[0] ? product.images[0].originalSrc : SmileyHappyMajor
  const media = <Thumbnail source={image} alt={title} />
  const price = product.variants[0].price 
  return (
    <ResourceItem
    media={media}
    id={product.id}
    accessibilityLabel={`accessibility lable for ${product.title}`}
    >
      <Stack>
        <Stack.Item fill>
          <h4><TextStyle variation="strong">{title}</TextStyle></h4>
        </Stack.Item>
        <Stack.Item>
          {price}
        </Stack.Item>
      </Stack>
    </ResourceItem>
  );
}

export default ProductItem
