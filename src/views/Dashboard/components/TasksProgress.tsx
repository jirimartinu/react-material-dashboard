import React from 'react';
import clsx from 'clsx';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  LinearProgress,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const styles = (theme: Theme) => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  progress: {
    marginTop: theme.spacing(3)
  }
});

class TaskProgress extends React.PureComponent<WithStyles<typeof styles, true>> {
  public render() {
    return (
      <Card
        className={clsx(this.props.classes.root)}
      >
        <CardContent>
          <Grid
            container
            justify="space-between"
          >
            <Grid item>
              <Typography
                className={this.props.classes.title}
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                TASKS PROGRESS
              </Typography>
              <Typography variant="h3">75.5%</Typography>
            </Grid>
            <Grid item>
              <Avatar className={this.props.classes.avatar}>
                <InsertChartIcon className={this.props.classes.icon} />
              </Avatar>
            </Grid>
          </Grid>
          <LinearProgress
            className={this.props.classes.progress}
            value={75.5}
            variant="determinate"
          />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(
  styles as any, { withTheme: true }
)(TaskProgress as any); 

