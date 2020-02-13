import React from 'react';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core';

const styles = (theme: Theme) => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column' as any
  }
});

class Notifications extends React.PureComponent<WithStyles<typeof styles>> {
  public render() {
    return (
      <Card
        className={clsx(this.props.classes.root)}
      >
        <form>
          <CardHeader
            subheader="Manage the notifications"
            title="Notifications"
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={6}
              wrap="wrap"
            >
              <Grid
                className={this.props.classes.item}
                item
                md={4}
                sm={6}
                xs={12}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                >
                  Notifications
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      defaultChecked //
                    />
                  }
                  label="Email"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      defaultChecked //
                    />
                  }
                  label="Push Notifications"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Text Messages"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      defaultChecked //
                    />
                  }
                  label="Phone calls"
                />
              </Grid>
              <Grid
                className={this.props.classes.item}
                item
                md={4}
                sm={6}
                xs={12}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                >
                  Messages
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      defaultChecked //
                    />
                  }
                  label="Email"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Push Notifications"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      defaultChecked //
                    />
                  }
                  label="Phone calls"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              color="primary"
              variant="outlined"
            >
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }    
}

export default withStyles(
  styles as any, { withTheme: true }
)(Notifications as any); 