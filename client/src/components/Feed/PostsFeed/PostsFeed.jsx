import React, {Component, Fragment} from 'react';
import Post from '../PostsFeed/Post'
import {Container, CssBaseline}  from '@material-ui/core'


class PostsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
 
    render() { 
        return ( 
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xs">
              <Post userName='Taras Bashuk' captionText='This impressive caption text.' photo = 'https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/1975278_1480743758808813_816911480_n.jpg?_nc_cat=111&_nc_ht=scontent.fiev12-1.fna&oh=7783755eac4fa380f1c1c608be9f7413&oe=5D877335' userIcon='https://scontent.fiev17-1.fna.fbcdn.net/v/t1.0-9/12565605_1717114835171703_5349874731394827511_n.jpg?_nc_cat=106&_nc_ht=scontent.fiev17-1.fna&oh=91c643740e41c6b5bdfdf92ea2dbd671&oe=5D91B6B3'/>
              <Post userName='Michail Pedchenko' />
              <Post userName='Sviatoslav Kobyvnikov'/>
            </Container>
        </Fragment>
         );
    }
}
 
export default PostsFeed;