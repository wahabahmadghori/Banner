import { Page } from "@shopify/polaris";
import {ResourcePicker} from '@shopify/app-bridge-react';
import React ,{ useState } from 'react'
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
      onCancel={()=>isOpen(false)}
      onSelection={(payload)=>{
        isOpen(false)
        console.log(payload)
      }}/>
    </Page>
  )
}

export default Index;
