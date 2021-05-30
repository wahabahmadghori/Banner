import React from 'react'
import { withRouter } from 'next/router'
import {ClientRouter as AppBridgeClientRouter} from '@shopify/app-bridge-react'

const ClientRouter = (props) => {
    const {router,shopOrigin} = props
    return <AppBridgeClientRouter history={router} shopOrigin={shopOrigin}/>
}

export default withRouter(ClientRouter)
