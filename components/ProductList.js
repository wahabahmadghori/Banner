import React from 'react'
import {Card,ResourceList, ResourceItem,TextStyle} from '@shopify/polaris'

const ProductList = ({pro}) => {
    return (
        <Card>
            <ResourceList
                showHeader
                resourceName={{ singular: 'customer', plural: 'customers' }}
                items={}
                renderItem={(product) => {
                    const {title} = product;
                    return (
                      <ResourceItem
                      >
                        <h3>
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
