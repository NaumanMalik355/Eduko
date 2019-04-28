import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 9,
  },
  fab: {
    margin: theme.spacing.unit,
    position:'fixed',
  },
});

let id = 0;
function createData(name, calories, fat, carbs) {
  id += 1;
  return { id, name, calories, fat, carbs};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24,),
  createData('Cupcake', 305, 3.7, 67,),
  createData('Gingerbread', 356, 16.0, 49,),
];

class ShowStudent extends React.Component{
    constructor(props){
    super(props);
}
componentDidMount(){
  this.props.studentlist
}
componentWillReceiveProps(ItemsProps){
  this.setState({studentlist:ItemsProps.studentList})
}
render(){
    const { classes } = this.props;
  return (
    <Grid container>
    <Fab onClick={()=>this.props.handleStudent()} color="primary" title="Add Teacher" aria-label="Add" className={classes.fab}>
        <AddIcon />
    </Fab>
    <Grid item style={{width:'100%'}}>
    <Paper className={classes.root}>
      <Table>
        <TableHead style={{backgroundColor:"indigo"}}>
          <TableRow>
            <TableCell>Email Adress</TableCell>
            <TableCell align="right">Full Name</TableCell>
            <TableCell align="right">Registraiton Number</TableCell>
            <TableCell align="right">Section</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.studentlist.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="right">{row.fullname}</TableCell>
              <TableCell align="right">{row.regNo}</TableCell>
              <TableCell align="right">{row.section}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </Grid>
    </Grid>
  );
}
}
ShowStudent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ShowStudent);