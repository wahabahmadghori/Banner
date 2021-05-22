import React from 'react'
import {Card,ResourceList, ResourceItem,TextStyle} from '@shopify/polaris'

const ProductList = ({products}) => {
    return (
        <Card>
            <ResourceList
                resourceName={{ singular: 'Product', plural: 'Products' }}
                items={products}
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
