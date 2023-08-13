import React , {useState} from 'react'
import { useCallback } from 'react'
import {Form, InputGroup, Button} from 'react-bootstrap'
import { useConverstionsContext } from '../contexts/ConverstionsProvider'

const OpenConversation = () => {
  const [text,setText] = useState('')

  const {sendMessage, selectedConversation} = useConverstionsContext()

  const setRef = useCallback(node=>{
    if(node){
      node.scrollIntoView({smooth: true})
    }
  },[])

  const handleSubmit = e=>{
    e.preventDefault()
    sendMessage(selectedConversation.recipients.map(r=> r.id), text)
    setText('')
  }

  return (
    <div className='d-flex flex-column flex-grow-1'>
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-2">
          {selectedConversation?.messages.map((message, index)=>{
            let lastMessage = selectedConversation.messages.length - 1 === index 
            return(
              <div className={`d-flex flex-column my-2 ${message.fromMe ? 'align-self-end align-items-end' : 'align-items-start'} ` }
              ref={lastMessage? setRef : null} key={index}>
                <div className={`px-2 py-1 rounded ${message.fromMe ? 'bg-primary text-white' : 'border'}`}>
                  {message.text}
                </div>
                <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>
                  {message.fromMe ? 'You' : message.senderName}
                </div>
            
              </div>
            )

          })}
        </div>
      </div>

      <Form onSubmit ={handleSubmit}>
        <Form.Group className='m-2'>
          <InputGroup>
          <Form.Control required as='textarea' value={text}
           onChange={e=>setText(e.target.value)} style={{"height": "75px"}}>
          </Form.Control>
          {/* <InputGroup.Append> */}
          <Button type='submit'>Send</Button>
          {/* </InputGroup.Append> */}
          </InputGroup>
        </Form.Group>
      </Form>
     
    </div>
  )
}

export default OpenConversation
