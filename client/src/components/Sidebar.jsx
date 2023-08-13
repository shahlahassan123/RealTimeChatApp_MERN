import React from 'react'
import { useState } from 'react'
import {Tab, Nav, Modal} from 'react-bootstrap'
import ContactModal from './ContactModal'
import Contacts from './Contacts'
import ConversationModal from './ConversationModal'
import Conversations from './Conversations'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

const Sidebar = ({id}) => {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY
    const [modalOpen, setModelOpen] = useState(false)

    const modalClose =()=>{
        setModelOpen(false)
    }


  return (
    <div style={{"width" : '250px'}} className='d-flex flex-column'>
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
            <Nav variant='tabs' className='justify-content-center'>
                <Nav.Item>
                    <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className='border-right overflow-auto flex-grow-1'>
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                    <Conversations />
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACTS_KEY}>
                    <Contacts />
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
        <div className="p-2 border-right border-top small">
            Your id : <span className='text-muted'>{id}</span>
        </div>
        <button className="rounded-0" onClick={()=>setModelOpen(true)}>
            New {conversationsOpen ? "Conversations" : "Contacts"}

        </button>

          <Modal show={modalOpen} onHide={modalClose}>
              {conversationsOpen ?
                  <ConversationModal closeModal={modalClose} /> :
                  <ContactModal closeModal={modalClose} />
              }

          </Modal>

      
    </div>
  )
}

export default Sidebar
