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

function Announcement(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h6" style={{fontWeight:'bold',fontFamily:'Cambria'}} gutterBottom>
       Announcement
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </div>
  );
}

Announcement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Announcement);