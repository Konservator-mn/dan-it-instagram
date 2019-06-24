export  const getSocketID = () => {
    const socket = window.socket
    socket.emit('GetUsers',socket.id)
    socket.on('SendUsers', async (result)=> {await this.setState({users: result})})
    console.log(this.state);
    
    
} 