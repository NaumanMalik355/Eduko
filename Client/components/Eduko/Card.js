import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import red from '@material-ui/core/colors/red';
import bgpage from '../img/bgpage.jpg'
import baseline from '../img/baseline.png'
import speech from '../img/speech.png'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const styles = theme => ({
    linkHover:{
        color:'black',
'&:hover':{
    color:'orange',
}
    },
    root: {
      align:'center',
    },
  card: {
  },
  media: {
    height: 150,
    width:'100%'
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class MediaCard extends React.Component {
  constructor(props){
    super(props);
  }
  
  state = { expanded: false };
handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

render() {
    const { classes } = this.props;
    return ( 
    <Paper className={classes.root} elevation={1} 
    //this.props.showFindOneTodo(this.props.code)}
    >
    <Card //onClick={()=>this.props.history.push('/StudentView/'+this.props.code)} 
    style={{height:300,width:'100%'}}>
    <div>
    <img className={classes.media} src={bgpage}
    onClick={()=>this.props.history.push('/StudentView/'+this.props.code)} 
    title="Paella dish"/>
    {/* <Button variant="contained" size="medium" color="primary" className={classes.margin}>
          Show more
    </Button> */}
    </div>
    <Grid container direction="column" align="center">
        <CardContent>
            <Grid item style={{color:'#888888'}}>
              {this.props.Name}
            </Grid>
            <Grid item style={{color:'#333'}} >
            <a onClick={()=>this.props.showdetails()} 
            className={classes.linkHover} style={{textDecoration:'none',fontWeight:'bold',fontSize:'17px'}}>
              {this.props.subject} {this.props.code}</a> 
            </Grid>
            <Grid item fontSize='10px'>
              {this.props.Year}
            </Grid>
          <hr style={{width:250,border:'1px solid #E8E8E8'}}/>
          <Grid container direction="row" align='center' paddingTop='7' >
            <Grid item><img src={baseline} title="Enrolled" style={{margin:2,width:16}} /></Grid>
            <Grid item >
            {this.props.countstudent}
             </Grid>
            <Grid item ><img src={speech} title="Hours" style={{margin:2,width:16}} /></Grid>
            <Grid item style={{margin:2}}>{this.props.ch}</Grid>
            <Grid item style={{color:'#00d637',fontWeight:'bold',margin:2,paddingLeft:100}}>Enrolled</Grid>
        </Grid>
        </CardContent>
        </Grid>  
      </Card>
      </Paper>
    );
  }
}
MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles)(MediaCard));