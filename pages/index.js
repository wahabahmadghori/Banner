import { Page, Card, EmptyState } from "@shopify/polaris";
import { ResourcePicker } from '@shopify/app-bridge-react';
import React, { useState } from 'react'
import ProductList from "../components/ProductList";



function Index() {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])
  function handleProductsSelection(payload) {
    setIsOpen(false)
    setProducts(payload.selection)
    console.log(products)
  }
  return (
    <>
      <ResourcePicker
            resourceType="Product"
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            onSelection={handleProductsSelection} />
      {products.length > 0 ?
        <Page
          primaryAction={{
            content: 'Select Products',
            onAction: () => setIsOpen(true)
          }}
        >
          <ProductList products={products} />
          
        </Page>
        :
        <Card sectioned>
          <EmptyState
            heading="Add your Products for promotion"
            action={{ 
              content: 'Add Product',
              onAction:()=>setIsOpen(true)
           }}
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          >
            <p>Track and receive your incoming inventory from suppliers.</p>
          </EmptyState>
        </Card>
      }


    </>

  )
}

export default Index;
