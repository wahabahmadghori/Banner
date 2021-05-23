import { Page } from "@shopify/polaris";
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
      {products.lenght > 0 ?
        <Page
          primaryAction={{
            content: 'Select Products',
            onAction: () => setIsOpen(true)
          }}
        >
          <ResourcePicker
            resourceType="Product"
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            onSelection={handleProductsSelection} />

          <ProductList products={products} />
        </Page>
        :
        <Card sectioned>
          <EmptyState
            heading="Manage your inventory transfers"
            action={{ content: 'Add transfer' }}
            secondaryAction={{ content: 'Learn more', url: 'https://help.shopify.com' }}
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
