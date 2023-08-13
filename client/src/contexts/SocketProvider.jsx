import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const newSocket = io(
      'http://localhost:2000',
      { query: { id } }
    )
    setSocket(newSocket)

    return () => newSocket.close()
  }, [id])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}
// import React, { useEffect, useState, useContext } from 'react'
// import useLocalStorage from '../hooks/useLocalStorage'
// import io from 'socket.io-client'

// const socketContext = React.createContext()

// export function useSocket() {
//     return useContext(socketContext)
// }

// export function SocketProvider({ id, children }) {
//     const [socket, setSocket] = useState()

//     useEffect(() => {
//         const newSocket = io('http://localhost:7000',
//             { query: { id } }
//         )
//         setSocket(newSocket)

//         return () => newSocket.close()
//     }, [id])

//     return (
//         <socketContext.Provider value={{ socket }}>
//             {children}
//         </socketContext.Provider>
//     )
// }
