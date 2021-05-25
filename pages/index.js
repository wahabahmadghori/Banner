import { Page, Card, EmptyState } from "@shopify/polaris";
import { ResourcePicker } from '@shopify/app-bridge-react';
import React, { useState } from 'react'
import ProductList from "../components/ProductList";



function Index() {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [productIds, setProductIds] = useState([])
  useEffect(() => {
    const ids = products.map((product)=>{
      return product.id
    })
    setProductIds(ids)
  }, [products])
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
            onSelection={handleProductsSelection}
            initialSelectionIds={productIds} />
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
          </EmptyState>
        </Card>
      }


    </>

  )
}

export default Index;
