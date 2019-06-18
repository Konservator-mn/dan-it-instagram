import React, {Component, Fragment} from 'react';
import SubscriptionItem from './SubscriptionItem'
import {Container, CssBaseline}  from '@material-ui/core'

const   SubscriptionFeedList= [
     {
        id:1,
        userName: "John Dow",
        avatar: "JD"
    },
    {
        id:2,
        userName: "John Snow",
        avatar: "JS"
    },
    {
        id:3,
        userName: "John Bon Jovi",
        avatar: "JBJ"
    },
    {
        id:4,
        userName: "Again John",
        avatar: "AJ"
    }
]
class SubscriptionFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  
    render() { 
        let subscriptionList = SubscriptionFeedList.map(item => {
            return <SubscriptionItem key = {item.id} userName ={item.userName} avatar={item.avatar}/>})

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