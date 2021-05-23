import React from 'react'

const ProductItem = ({product}) => {
    const { title } = product;
          return (
            <ResourceItem
            >
              <h3 style={{ color: "red" }}>
                <TextStyle variation="strong">{title}</TextStyle>
              </h3>
            </ResourceItem>
          );
}

export default ProductItem
