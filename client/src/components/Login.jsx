import React, {useRef} from 'react'
import {Button, Container,  Form, } from 'react-bootstrap'
import {v4 as uuidV4} from 'uuid'

const Login = ({setId}) => {
    const inputRef = useRef()

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        setId(inputRef.current.value)
    }

    const handleCreateID = () =>{
        setId(uuidV4())
    }

    

  return (
   
   <Container className='d-flex align-items-center' style={{'height' : '100vh'}}>
    <Form onSubmit={handleFormSubmit} className='w-100 p-3' >
        <Form.Group>
            <Form.Label>Enter your ID</Form.Label>
            <Form.Control type='text' required ref={inputRef}></Form.Control>
        </Form.Group>
        <Button type='submit' className="m-4">Login</Button>
        <Button onClick={handleCreateID} variant='secondary'>Create a new id</Button>
    </Form>
   
   </Container>
  )
}

export default Login
