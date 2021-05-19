import { Page } from "@shopify/polaris";
import { ResourcePicker } from '@shopify/app-bridge-react';
import React, { useState } from 'react'
function Index() {
  const [isOpen, setIsOpen] = useState(false)
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
        onSelection={(payload) => {
          setIsOpen(false)
          console.log(payload.selection)
        }} />
    </Page>
  )
}

export default Index;
