import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import edukologo from '../img/edukologo.png'
import bgpage from '../img/bgpage.jpg'
import MediaCard from './Card'
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing.unit,
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

class SimpleAppBar  extends React.Component {  
  constructor(props){
    super(props);
    const { classes } = props;
    this.handleSubmit=this.handleSubmit.bind(this);
    this.showCourseData=this.showCourseData.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  showCourseData(data){
    return <Grid item lg={3} md={4} sm={6} xs={12} //style={{maxWidth:327.5}}
     >
    <MediaCard Name={data.teachername} subject={data.coursename} code={data.coursecode} Year={data.session} 
    ch={data.credithour} contacth={data.contacthour} countstudent={data.countstudent}
    handleShowClick={this.props.handleShowClick} showdetails={this.props.showdetails}
    showFindOneTodo={this.props.showFindOneTodo}
    />
    </Grid>
  }

render(){
    const { classes } = this.props;
  return (
    <Grid container direction='row' onSubmit={this.handleSubmit}>
    <Grid item style={{width:'100%',paddingBottom:240,backgroundImage:`url(${bgpage})`,backgroundColor:'rgba(0,0,0,0.5)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}> 
      <Grid style={{height:40,width:180,margin:10, backgroundImage:`url(${edukologo})`,position:'fixed'}}></Grid>    
    </Grid>
    {/* <Grid item>
    <AppBar position="static" color="default" style={{flexGrow: 1,marginTop:20,marginLeft:30,marginRight:20,marginBottom:20,height:60}}>
      <Toolbar>
      <p>Show Data</p>
          <Grid className={classes.search}>
            <Grid className={classes.searchIcon}>
              <SearchIcon />
            </Grid>
            <InputBase
              placeholder="Search our courses"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </Grid>
      </Toolbar>
      </AppBar>
    </Grid> */}
    
    <Fab onClick={()=>this.props.handleClick()} color="primary" title="Add Teacher" aria-label="Add" style={{marginTop:10,marginLeft:30,marginBottom:10,width:50,height:48}} className={classes.fab}>
        <AddIcon />
    </Fab>
    
    <Grid container direction='row' style={{marginLeft:15,marginRight:15}}  spacing={32}>
    {this.props.teacherList.map((obj)=>{
      return this.showCourseData(obj);
    })}
    </Grid>
    </Grid>
  );
  }
}
SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleAppBar);