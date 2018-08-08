import React from 'react';
import { BrowserRouter, Route, hashHistory, Switch } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Signup from './Signup.js';

class AppRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter history={hashHistory}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                </Switch>
            </BrowserRouter>
        );
    }


}

export default AppRoute;