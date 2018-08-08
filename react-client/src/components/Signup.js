import React from 'react';

class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.state = { };
        }
    render () {
        return (
        	   <div>
                <h1>Signup Page</h1>
                <button>Signup</button>
                <button>Login</button>
            </div>
            )
    }
}
export default Signup;
