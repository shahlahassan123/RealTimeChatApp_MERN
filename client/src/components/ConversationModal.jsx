import React, {useState} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import { useConverstionsContext } from '../contexts/ConverstionsProvider'

const ConversationModal = ({closeModal}) => {
    const [selectedContactIds, setSelectedContactIds] = useState([])
    const {contacts} = useContacts()

    const {createConversation} = useConverstionsContext()


    const handleConversationFormSubmit = e =>{
        e.preventDefault()
        createConversation(selectedContactIds)
        closeModal()
    }


    const handleChange = (contactID) =>{
        setSelectedContactIds(prev=>{
            if(prev.includes(contactID)){
                return prev.filter(id=> id!==contactID)
            }else{
                return [...prev, contactID]
            }
        })

    }


  return (
    <>
    <Modal.Header closeButton>
       Create Conversation
    </Modal.Header>
    <Modal.Body>
        <Form onSubmit={handleConversationFormSubmit}>
            {contacts.map((contact)=>{
                return(
                    <Form.Group key={contact.id} controlId={contact.id}>
                    <Form.Check type='checkbox'
                     value={selectedContactIds.includes(contact.id)}
                     label={contact.name} onChange={()=>handleChange(contact.id)}></Form.Check>
                </Form.Group>

                )
            })}
           
           <Button type='submit'>Create</Button>


        </Form>

    </Modal.Body>
    
    </>
  )
}

export default ConversationModal
