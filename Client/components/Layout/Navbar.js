import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slideshow from './Slider'
import Grid from '@material-ui/core/Grid';
import SimpleCard from './CardCategory'
import SimpCard from './CardResult'

const styles =theme=> ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});
const list=[
  {category:{name:'Category',link:'Facebook',result:'Matric'}},
  {name:'rgjr',reg:'1234',class:'cse'},
]

class ButtonAppBar extends React.Component  {
  constructor(props){
    super(props);
    //this.showData=this.showData.bind(this);
  }
//   showData(data){
//     const { classes } = this.props;
// return <Grid item xs>
// <SimpleCard Name={data.name} Link={data.link} Result={data.Result} /> 
// </Grid>
//   }
  render(){
  const { classes } = this.props;
  return (
    <div>
    <Grid container direction="row" justify="center">
      <Grid item >    
          <img style={{width:100,height:80}} src={require('../img/logoimg.jpg')} />
      </Grid>
      <Grid item >
            <Grid container direction="column" justify="center">
              <Grid item  component="h1" style={{paddingTop:20,color:'blue',fontWeight:'bold',fontSize:50}}> 
                  Al - Husnain Public Secondary School
              </Grid> 
              <Grid item  component="p" style={{color:'red',textAlign:'right',fontWeight:'bold',fontSize:20}} > 
                  Phullan Shareef
              </Grid> 
            </Grid>
      </Grid> 
    </Grid>
        
    <div style={{marginLeft:'8%',marginRight:'8%'}}>
    <div className={classes.root} >
      <AppBar position="static" style={{borderRadius:'10px'}}>
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </div>
      <hr />
      <div>
      <Slideshow />
      </div>
      </div>
      <br />
      <div style={{marginLeft:'8%',marginRight:'8%'}}>

      <Grid container direction="row" spacing={24} >
      {/* {list.map((object)=>{
return this.showData(object);
      })}
</Grid> */}
         <Grid item xs>
          <SimpleCard  />
        </Grid>
        <Grid item xs={5}>
          <h1>SimpleCard</h1>
        </Grid>
        <Grid item xs>
          <SimpCard />
        </Grid>
      </Grid>
      </div>
    </div>
  );
}
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);