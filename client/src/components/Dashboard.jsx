import React from 'react'
import { useConverstionsContext } from '../contexts/ConverstionsProvider'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation';


const Dashboard = ({id}) => {

    const {selectedConversation} = useConverstionsContext()
 
  return (
    <div className='d-flex' style={{height : '100vh'}}>
        <Sidebar id={id} />
        {selectedConversation && <OpenConversation />}
        {/* <OpenConversation /> */}

      
    </div>
  )
}

export default Dashboard
