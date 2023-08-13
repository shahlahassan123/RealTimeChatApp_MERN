import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

const ContactModal = ({closeModal}) => {
    const idRef=React.useRef()
    const nameRef = React.useRef()
    console.log(useContacts())
    const {createContact} = useContacts()


    const handleContactFormSubmit = e =>{
        e.preventDefault()
        createContact(idRef.current.value, nameRef.current.value)
        closeModal()
    }


  return (
    <>
    <Modal.Header closeButton>
       Create Contact
    </Modal.Header>
    <Modal.Body>
        <Form onSubmit={handleContactFormSubmit}>
            <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control type='text' required ref={idRef}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' required ref={nameRef}></Form.Control>
            </Form.Group>
            <Button type='submit'>Create</Button>


        </Form>

    </Modal.Body>
    
    </>
  )
}

export default ContactModal
