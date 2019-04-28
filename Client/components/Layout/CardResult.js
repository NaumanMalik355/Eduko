import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class SimpCard extends React.Component {
  constructor(props){
    super(props);
    // this.state={facebook:'',fee:'',feeStructure:'',download:''}
  }
  // componentDidMount(){
  //  if(this.props.facebook!=null){this.setState({facebook:this.props.facebook})}
  //  if(this.props.fee!=null){this.setState({fee:this.props.fee})}
  //  if(this.props.download!=null){this.setState({download:this.props.download})} 
  //  if(this.props.feeStructure!=null){this.setState({feeStructure:this.props.feeStructure})}
   
  // }
  
render(){
  const { classes } = this.props;
  
  return (
    <Card style={{backgroundColor:'#D3D3D3',borderRadius:'20px'}} className={classes.card} >
      <CardContent>
      <Typography  style={{fontWeight:'normal', fontSize:'20px',textAlign:'center'}} color="textSecondary">
          Results
        </Typography>
        <Typography variant="h6" component="h3">
        <a href="www.facebook.com" className="">10th Result</a>
        </Typography>
        <Typography variant="h6" component="h3">
         9th Results
        </Typography>
        <Typography variant="h6" component="h3">
          8th Result
        </Typography>
      </CardContent>
      {/* <CardActions >
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
}
SimpCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpCard);
