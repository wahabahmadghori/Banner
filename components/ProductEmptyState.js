import React from 'react'
import { Card, EmptyState } from "@shopify/polaris";
const ProductEmptyState = ({setIsOpen}) => {
    return (
        <Card sectioned>
          <EmptyState
            heading="Add your Products for promotion"
            action={{ 
              content: 'Add Product',
              onAction:()=>setIsOpen(true)
           }}
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          >
          </EmptyState>
        </Card>
    )
}

export default ProductEmptyState
