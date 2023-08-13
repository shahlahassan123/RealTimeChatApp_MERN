import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConverstionsContext } from '../contexts/ConverstionsProvider'

const Conversations = () => {
  const {conversations,selectConversationIndex} = useConverstionsContext()
 

  return (
<ListGroup>
  {conversations.map((conversation, index)=>{
    return(
      <ListGroup.Item key={index} action 
      onClick={()=>{selectConversationIndex(index)}} active={conversation.selected}>
        {conversation.recipients.map(r=>r.name).join(',')}
      </ListGroup.Item>
    )
  })}
</ListGroup>
  )
}

export default Conversations
