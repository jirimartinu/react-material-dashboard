import React from 'react';
import { Grid, Typography, Theme, withStyles, WithStyles } from '@material-ui/core';

const styles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    paddingTop: 150,
    textAlign: 'center' as any
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
});

class NotFound extends React.PureComponent<WithStyles<typeof styles>> {
  public render() {
    return (
      <div className={this.props.classes.root}>
        <Grid
          container
          justify="center"
          spacing={4}
        >
          <Grid
            item
            lg={6}
            xs={12}
          >
            <div className={this.props.classes.content}>
              <Typography variant="h1">
                404: The page you are looking for isn’t here
              </Typography>
              <Typography variant="subtitle2">
                You either tried some shady route or you came here by mistake.
                Whichever it is, try using the navigation
              </Typography>
              <img
                alt="Under development"
                className={this.props.classes.image}
                src="/images/undraw_page_not_found_su7k.svg"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(
  styles as any, { withTheme: true }
)(NotFound as any); 
