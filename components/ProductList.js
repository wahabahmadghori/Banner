import React from 'react'
import {Card,ResourceList, ResourceItem,TextStyle} from '@shopify/polaris'

const ProductList = ({products}) => {
    return (
        <Card>
            <ResourceList
                showHeader
                resourceName={{ singular: 'Product', plural: 'Products' }}
                items={products}
                renderItem={(product) => {
                    const {title} = product;
                    return (
                      <ResourceItem
                      >
                        <h3 style={{color: "red"}}>
                          <TextStyle variation="strong">{title}</TextStyle>
                        </h3>
                      </ResourceItem>
                    );
                  }}
            />
        </Card>
    )
}

export default ProductList
