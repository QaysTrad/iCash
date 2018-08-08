import React from 'react';
import {Button} from '@material-ui/core';

class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = { };
        }
    render () {
        return (
        	   <div>
                <h1>Home Page</h1>
                <a href='/signup'><Button variant="contained" color="primary">Signup</Button></a>
                <a href='/login'><Button variant="contained" color="primary">Login</Button></a>
            </div>
            )
    }
}
export default Home;
