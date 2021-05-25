import React from 'react'
import {Page} from "@shopify/polaris";
import ProductList from "../components/ProductList";

const ProductPage = ({ setIsOpen, products }) => {
    return (
        <Page
            primaryAction={{
                content: 'Select Products',
                onAction: () => setIsOpen(true)
            }}
        >
            <ProductList products={products} />

        </Page>
    )
}

export default ProductPage
