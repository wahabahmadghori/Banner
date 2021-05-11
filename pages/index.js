import {Page } from "@shopify/polaris";
import {ResourcePicker} from '@shopify/app-bridge/actions';

const [isOpen, setIsOpen] = useState(false)
const Index = () => (
  <Page
    primaryAction={{
    content: 'Select Products',
    onAction:()=>setIsOpen(true)
  }}
  >
    <ResourcePicker 
    resourceType="Product" 
    open={isOpen} 
    onCancel={()=>setIsOpen(false)}
    onSelection={(payload)=>{
      setIsOpen(false);
      console.log(payload);
    }}
    />
  </Page>
);

export default Index;
