import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    //maxWidth: 500,
  },
};

function CourseHome(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h6" style={{fontWeight:'bold',fontFamily:'Cambria'}} gutterBottom>
       Course Description
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="h6" style={{fontWeight:'bold',fontFamily:'Cambria'}} gutterBottom>
       Course Learning Outcomes
      </Typography>
      <Typography variant="body2" gutterBottom>
        <ul>
          <li>Interpret a relational table schema (including keys and foreign key references).</li>
          <li>Design a relational database schema for a subject of interest to the student</li>
          <li>Design ER diagrams for new databases and read (understand) ER diagrams.</li>
          <li>Perform normalization based on functional dependency.</li>
          <li>Understand the principles and concepts of information integrity, security and confidentiality.</li>
          <li>Recognize the need for, and engage in, lifelong learning</li>
        </ul>
      </Typography> 
    </div>
  );
}

CourseHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseHome);