import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

class StudentLogin extends React.Component {
constructor(props) {
    super(props);
    this.state = {username:'',password:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
handleChange(event) {
    this.setState({[event.target.id] : event.target.value})
}
handleSubmit(event) {
    this.props.handleSignIn(this.state.username,this.state.password)
    event.preventDefault();
}
render() {
    return (
        <Grid container direction="column" alignItems='center' style={{marginTop:100}}>
            <Grid item style={{fontWeight:'bold'}}>
            <p>Register Here</p>
            </Grid>
            <Grid item>
            <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Email Adress"
            margin="normal"
            fullWidth
            InputLabelProps={{
            shrink: true,
            }}
            />
            </Grid>
            <Grid item>
            <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Full Name"
            margin="normal"
            fullWidth
            InputLabelProps={{
            shrink: true,
            }}
            />
            </Grid>
            <Grid item>
            <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Registraiton Number"
            margin="normal"
            fullWidth
            InputLabelProps={{
            shrink: true,
            }}
            />
            </Grid>
            <Grid item>
            <TextField
            id="standard-password-input"
            style={{ margin: 8 }}
            placeholder="Password"
            type="password"
            fullWidth
            InputLabelProps={{
            shrink: true,
            }}
            />
            </Grid>
            <Grid item>
            <TextField
            id="standard-password-input"
            style={{ margin: 8 }}
            placeholder="Confirm Password"
            type="password"
            fullWidth
            InputLabelProps={{
            shrink: true,
            }}
            />
            </Grid>
            <Grid item >
            <button style={{marginTop:5,width:220,height:30,fontWeight:'bold',fontSize:20}} type="submit" >Register</button>
            </Grid>
        </Grid>
        
        );
    }
}

export default StudentLogin
