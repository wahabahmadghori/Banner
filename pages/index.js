import { ResourcePicker } from '@shopify/app-bridge-react';
import React, { useState,useEffect } from 'react'
import ProductEmptyState from '../components/ProductEmptyState';
import ProductPage from "../components/ProductPage";
import store from 'store-js'
function Index({shopOrigin}) {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [productIds, setProductIds] = useState([])
  const ishopOrigin = shopOrigin
  useEffect(() => {
    const productList = store.get(`${ishopOrigin}-products`)
    if(productList){
      setProducts(productList)
    }
  }, [])
  useEffect(() => {
    console.log(shopOrigin)
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
    store.set(`${ishopOrigin}-products`, payload.selection)
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
