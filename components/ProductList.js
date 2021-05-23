import React from 'react'
import { Card, ResourceList, ResourceItem, TextStyle } from '@shopify/polaris'

const ProductList = ({ products }) => {
  return (
    <Card>
      {products.length> 0?
      <ResourceList
        showHeader
        resourceName={{ singular: 'Product', plural: 'Products' }}
        items={products}
        renderItem={(product) => {
          const { title } = product;
          return (
            <ResourceItem
            >
              <h3 style={{ color: "red" }}>
                <TextStyle variation="strong">{title}</TextStyle>
              </h3>
            </ResourceItem>
          );
        }}
      />

      :<EmptyState
        heading="Manage your inventory transfers"
        action={{ content: 'Add transfer' }}
        secondaryAction={{ content: 'Learn more', url: 'https://help.shopify.com' }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Track and receive your incoming inventory from suppliers.</p>
      </EmptyState>
    }
    </Card>
  )
}

export default ProductList
