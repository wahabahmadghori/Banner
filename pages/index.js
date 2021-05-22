import { Page } from "@shopify/polaris";
import { ResourcePicker } from '@shopify/app-bridge-react';
import React, { useState } from 'react'
import ProductList from "../components/ProductList";



function Index() {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])
  function handleProductsSelection(payload){
    setIsOpen(false)
    setProducts(payload.selection)
    console.log(products)
  }
  return (
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
        <ProductList products={product}/>
    </Page>
  )
}

export default Index;
