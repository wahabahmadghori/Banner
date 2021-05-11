import { Heading, Page } from "@shopify/polaris";

const Index = () => (
  <Page
    primaryAction={{
    content: 'Select Products',
    onAction:()=>{
      console.log('Select Products Primary Buttons Click.....')
    }
  }}
  >
    <Heading>Welcome to shopify react app🎉</Heading>
  </Page>
);

export default Index;
