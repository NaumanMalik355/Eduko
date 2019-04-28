import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
  
class AddStudent extends React.Component {
constructor(props) {
    super(props);
    this.state = { email:'', fullname:'', regno:'', section:'', };
    this.state={age: '',
    open: false}
    }
enterStudent = () => {
    this.props.addStudent(this.props.courseId,this.state.email,this.state.fullname,this.state.regno,this.state.section)
}
handleChange = event => {
    this.setState({ [event.target.name]: event.target.value,
        section:event.target.value
    });
    //this.setState({section:event.target.value})
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
render() {
    const { classes } = this.props;
    return (
        <Grid container direction="column" alignItems='center' style={{marginTop:100}}>
        <h1>Add Student</h1>
            <Grid item style={{width:300}}>
                <TextField
                id="standard-full-width"
                onChange={(event)=>this.setState({email:event.target.value})}
                placeholder="Email Adress"
                margin="normal"
                fullWidth
                InputLabelProps={{
                shrink: true,
                }}
                />
            
                <TextField
                id="standard-full-width"
                placeholder="Full Name"
                margin="normal"
                onChange={(event)=>this.setState({fullname:event.target.value})}
                fullWidth
                InputLabelProps={{
                shrink: true,
                }}
                />
           
                <TextField
                id="standard-full-width"
                placeholder="Registraiton Number"
                onChange={(event)=>this.setState({regno:event.target.value})}
                margin="normal"
                fullWidth
                InputLabelProps={{
                shrink: true,
                }}
                />
            
                {/* <TextField
                id="standard-password-input"
                placeholder="Section"
                onChange={(event)=>this.setState({section:event.target.value})}
                margin="normal"
                fullWidth
                InputLabelProps={{
                shrink: true,
                }}
                />
         */}
        <FormControl style={{minWidth:300}}>
          <InputLabel htmlFor="demo-controlled-open-select">Section</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'demo-controlled-open-select',
            }}
          >    
            <MenuItem value={'A'}>A</MenuItem>
            <MenuItem value={'B'}>B</MenuItem>
            <MenuItem value={'C'}>C</MenuItem>
            <MenuItem value={'D'}>D</MenuItem>
          </Select>
        </FormControl>

                <button onClick={this.enterStudent} style={{marginTop:5,width:300,height:30,fontWeight:'bold',fontSize:20}} type="submit" >Register</button>
            </Grid>
        </Grid>
        );
    }
}
export default AddStudent