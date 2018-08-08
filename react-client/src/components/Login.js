import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem , TextField , Button} from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            name : ''
        };
        this.onChange = this.onChange.bind(this)
        this.login = this.login.bind(this)
    }

        onChange (e) { // change the state for the input text
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  login(name){
    console.log(name)
  }
    render () {
        const { classes } = this.props;

        return (
            <div>
            <h1>Login Page</h1>
            <form className={classes.container} noValidate autoComplete="off">
             <TextField
          id="name"
          label="User Name"
          name='name'
          className={classes.textField}
            onChange={this.onChange}
          margin="normal"
        />
            <TextField
          id="name"
          label="Password"
          name='name'
          className={classes.textField}
            onChange={this.onChange}
          margin="normal"
        />
            </form>
            <Button variant="contained" color="primary" onClick={()=>this.login(this.state.name)}> Login</Button>

            </div>
            )
    }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);
