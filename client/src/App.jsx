import React from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { ContactsProvider } from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConverstionsProvider'
import { SocketProvider } from './contexts/SocketProvider'
import useLocalStorage from './hooks/useLocalStorage'


const App = () => {

  const [id, setId] = useLocalStorage('id')

  console.log(id)

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id}/>
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    id ? dashboard : <Login setId={setId} />
  )
}

export default App
