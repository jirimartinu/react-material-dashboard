import React from 'react';
import clsx from 'clsx';
import { Card, CardContent, Grid, Typography, Avatar, Theme, withStyles, WithStyles } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const styles = (theme: Theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: (theme.palette as any).white,
    color: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  }
});

class TotalProfit extends React.PureComponent<WithStyles<typeof styles>> {
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
                color="inherit"
                gutterBottom
                variant="body2"
              >
                TOTAL PROFIT
              </Typography>
              <Typography
                color="inherit"
                variant="h3"
              >
                $23,200
              </Typography>
            </Grid>
            <Grid item>
              <Avatar className={this.props.classes.avatar}>
                <AttachMoneyIcon className={this.props.classes.icon} />
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(
  styles as any, { withTheme: true }
)(TotalProfit as any); 