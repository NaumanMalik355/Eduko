import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    //backgroundColor: theme.palette.common.black,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    //minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24,2),
  createData('Ice cream sandwich', 237, 9.0, 37,4),
  createData('Eclair', 262, 16.0, 24,6),
  createData('Cupcake', 305, 3.7, 67,12),
  createData('Gingerbread', 356, 16.0, 49,34),
];

function Assignments(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} style={{border:'1px solid #FFFFFF'}}>
        <TableHead>
          <TableRow>
            <CustomTableCell style={{fontWeight:'bold',fontSize:12}}>Week</CustomTableCell>
            <CustomTableCell align="right" style={{fontWeight:'bold',fontSize:12}}>Title</CustomTableCell>
            <CustomTableCell align="right" style={{fontWeight:'bold',fontSize:12}}>Desription</CustomTableCell>
            <CustomTableCell align="right" style={{fontWeight:'bold',fontSize:12}}>Attachments</CustomTableCell>
            <CustomTableCell align="right" style={{fontWeight:'bold',fontSize:12}}>Deadline</CustomTableCell>
            <CustomTableCell align="right" style={{fontWeight:'bold',fontSize:12}}>Action</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right">{row.calories}</CustomTableCell>
              <CustomTableCell align="right">{row.fat}</CustomTableCell>
              <CustomTableCell align="right">{row.carbs}</CustomTableCell>
              <CustomTableCell align="right">{row.protein}</CustomTableCell>
              <CustomTableCell align="right">{row.carbs}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

Assignments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Assignments);
