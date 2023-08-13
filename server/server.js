const io = require('socket.io')(2000, {
    cors: {
      origin: 'http://127.0.0.1:5173',
      methods: ['GET', 'POST'],
      credentials: true
    }
  });
  

io.on('connection', socket =>{
    const id = socket.handshake.query.id
    socket.join(id)
    console.log(`User ${id} connected`)

    socket.on('send-message', ({recipients, text})=>{
        recipients.forEach(recipient =>{
            //list of only recipients that the current recipients can see when they receive the message
            const newRecipients = recipients.filter(r => r!== recipient) //removing the current recipient
            newRecipients.push(id) // pushing the sender
            socket.broadcast.to(recipient).emit('receive-message',{ // sending the message to current recipient
                recipients : newRecipients,
                sender : id, 
                text
            })
        })
    }
    )
})