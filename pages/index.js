import { ResourcePicker } from '@shopify/app-bridge-react';
import React, { useState,useEffect } from 'react'
import ProductEmptyState from '../components/ProductEmptyState';
import ProductPage from "../components/ProductPage";

function Index() {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [productIds, setProductIds] = useState([])
  useEffect(() => {
    const ids = products.map((product)=>{
      return {
        id:product.id
      }
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
        <ProductPage setIsOpen={setIsOpen} products={products}/>
        :
        <ProductEmptyState setIsOpen={setIsOpen}/>
      }


    </>

  )
}

export default Index;
