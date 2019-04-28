import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import edukologo from '../img/edukologo.png'
import bgpage from '../img/bgpage.jpg'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import person from '../img/person.png'
import { fade } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import CustomizedTable from './Lecture'
import CourseHome from './Course_Home'
import Assignments from './Assignments'
import Announcement from './Announcements'
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}
const styles = theme => ({
  root: {
    //flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    backgroundColor:'white',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
    },
  },
});

class SimpleBar  extends React.Component {  
  constructor(props){
    super(props);
    const { classes } = props;
    this.state = {
      value: 0,
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
render(){
    const { classes } = this.props;
    const { value } = this.state;
  return (
    <form>
    <div style={{height:'100%',width:'100%',paddingBottom:250,backgroundImage:`url(${bgpage})`,backgroundColor:'rgba(0,0,0,0.5)',backgroundRepeat:'no-repeat'}}> 
      <div style={{height:40,width:180,marginLeft:'50px',marginTop:'20px' , backgroundImage:`url(${edukologo})`,position:'fixed'}}></div>    
    </div>
    <h1 style={{marginLeft:80,marginTop:20,fontFamily:'Cambria'}}>Software Engineering</h1>
    <Grid container direction="row">
    <Grid item>
      <Grid container style={{marginLeft:80}}  spacing={16}>
            <Grid item>
              <Avatar><img src={person}></img></Avatar>
            </Grid>
            <Grid item xs spacing={8}>
              <Typography style={{fontWeight:'bold',color:'#D5D5D5'}} >Instructor</Typography>
              <Typography  style={{fontWeight:'bold',color:'#767570'}} >Nauman Malik</Typography>
            </Grid>
        </Grid>
      </Grid>
      <Grid item >
        <Typography style={{fontWeight:'bold',color:'#D5D5D5'}}>Categories</Typography>
        <Typography style={{fontWeight:'bold',color:'#767570'}}>Technology</Typography>
      </Grid>
      <Grid item style={{marginLeft:550}}>
        <Typography style={{marginTop:8}}>You are enrolled in section D</Typography>
      </Grid>
      <Grid item>
      <Button style={{backgroundColor:'orange',color:'balck'}} >UN ENROLL</Button>
      </Grid>
      
    </Grid>
    <NoSsr>
        <div className={classes.root} //style={{margin:30,marginLeft:80,marginRight:80}}
        >
          <AppBar position="static" color="white" style={{marginTop:10}}>
            <Tabs centered={true} value={value} onChange={this.handleChange}>
              <LinkTab label="Course Home" href="page1" />
              <LinkTab label="Lectures" href="page2" />
              <LinkTab label="Assignments" href="page3" />
              <LinkTab label="Announcements" href="pade4" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>
            <CourseHome />
          </TabContainer>}
          {value === 1 && <TabContainer>
            <CustomizedTable />
            </TabContainer>}
          {value === 2 && <TabContainer><Assignments /></TabContainer>}
          {value === 3 && <TabContainer><Announcement /></TabContainer>}
        </div>
      </NoSsr>
    </form>
  );
  }
}
SimpleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleBar);