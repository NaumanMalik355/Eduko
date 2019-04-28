import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import YearPicker from "react-year-picker";
class AddTeacher extends React.Component {

constructor(props) {
    super(props);
    //states are the object
    this.state = { teachername:'', coursename:'', coursecode:'', session:'', credithour:'', contacthour:''};
    this.state={age: '',
    open: false}
    }
    //arrow function tab use krty hen jab isko constructor me bind nahi krty
enterTeacher = () => {
    this.props.addTeacher(this.state.teachername,this.state.coursename,this.state.coursecode,this.state.session,this.state.credithour,this.state.contacthour)
}
handleChange = event => {
    this.setState({ [event.target.name]: event.target.value,
        credithour:event.target.value
    });
  };
handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  Change(date) {
    console.log(date);
  }
render() {
    const { classes } = this.props;
    return (    
        <Grid container direction="column" alignItems='center' style={{padding:30}}>
                <Typography component="h5" variant="h3">Add Teacher</Typography>
                
            <Grid item style={{width:300}}>
                <TextField
                id="standard-full-width"
                onChange={(event)=>this.setState({teachername:event.target.value})}
                placeholder="Teacher Name"
                margin="normal"
                fullWidth
                />
            
                <TextField
                id="standard-full-width"
                placeholder="Course Name"
                margin="normal"
                onChange={(event)=>this.setState({coursename:event.target.value})}
                fullWidth
                />
            
                <TextField
                id="standard-full-width"
                placeholder="Course Code"
                onChange={(event)=>this.setState({coursecode:event.target.value})}
                margin="normal"
                fullWidth
                />
            
                <TextField
                id="standard-password-input"
                margin="normal"
                placeholder="Session"
                onChange={(event)=>this.setState({session:event.target.value})}
                type="number"
                fullWidth
                />
         
            <FormControl style={{minWidth:300}}>
            <InputLabel htmlFor="demo-controlled-open-select">Credit Hour</InputLabel>
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
            <MenuItem value={'1'}>1</MenuItem>
            <MenuItem value={'2'}>2</MenuItem>
            <MenuItem value={'3'}>3</MenuItem>
          </Select>
        </FormControl>

                <TextField
                id="standard-password-input"
                margin="normal"
                placeholder="Contact Hour"
                onChange={(event)=>this.setState({contacthour:event.target.value})}
                type="number"
                fullWidth
                />
                
                {/* <label>Session</label>
                <YearPicker onChange={this.Change} /> */}
                
                <button margin="normal" style={{width:300,height:30,fontWeight:'bold',fontSize:20}} onClick={this.enterTeacher} 
                type="submit" >Register</button>
            </Grid>
        </Grid>
        
        );
    }
}
export default AddTeacher
