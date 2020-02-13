import React from 'react';
import clsx from 'clsx';
import { Card, CardContent, Grid, Typography, Avatar, Theme, withStyles, WithStyles } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

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
    backgroundColor: theme.palette.success.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.success.dark
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  }
});

class TotalUsers extends React.PureComponent<WithStyles<typeof styles>> {
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
                TOTAL USERS
              </Typography>
              <Typography variant="h3">1,600</Typography>
            </Grid>
            <Grid item>
              <Avatar className={this.props.classes.avatar}>
                <PeopleIcon className={this.props.classes.icon} />
              </Avatar>
            </Grid>
          </Grid>
          <div className={this.props.classes.difference}>
            <ArrowUpwardIcon className={this.props.classes.differenceIcon} />
            <Typography
              className={this.props.classes.differenceValue}
              variant="body2"
            >
              16%
            </Typography>
            <Typography
              //className={this.props.classes.caption}
              variant="caption"
            >
              Since last month
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(
  styles as any, { withTheme: true }
)(TotalUsers as any);