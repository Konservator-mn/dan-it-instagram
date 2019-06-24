import React, {Component, Fragment} from 'react';
import SubscriptionItem from './SubscriptionItem'
import {Container, CssBaseline}  from '@material-ui/core'

import {getSocketID} from '../../../utils/'

const   SubscriptionFeedList= [
    //  {
    //     id:1,
    //     userName: "John Dow",
    //     avatar: "JD"
    // },
    // {
    //     id:2,
    //     userName: "John Snow",
    //     avatar: "JS"
    // },
    // {
    //     id:3,
    //     userName: "John Bon Jovi",
    //     avatar: "JBJ"
    // },
    // {
    //     id:4,
    //     userName: "Again John",
    //     avatar: "AJ"
    // }
]
class SubscriptionFeed extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: []
         }
    }
  
    componentDidMount() {
        // getSocketID()
            const socket = window.socket
            console.log(socket);
            
            socket.emit('GetUsers',socket.id)
            socket.on('SendUsers', (result)=> { this.setState({users: result})
           
        })
    }

    render() { 
        const SubscriptionFeedList = this.state.users
        console.log();
        
        let subscriptionList = SubscriptionFeedList.map(item => {
            return <SubscriptionItem key = {item.id} userName ={item.name} avatar={'AV'}/>})

        return ( 
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xs">
                {subscriptionList}
            </Container>
        </Fragment>
         );
    }
}
 
export default SubscriptionFeed;