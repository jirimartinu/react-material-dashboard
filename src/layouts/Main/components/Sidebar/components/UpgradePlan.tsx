import React from 'react';
import clsx from 'clsx';
import { Typography, Button, colors, WithStyles, withStyles, Theme } from '@material-ui/core';
import { IApplicationState } from 'src/store';
import { connect } from 'react-redux';

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: colors.grey[50]
  },
  media: {
    paddingTop: theme.spacing(2),
    height: 80,
    textAlign: 'center' as any,
    '& > img': {
      height: '100%',
      width: 'auto'
    }
  },
  content: {
    padding: theme.spacing(1, 2)
  },
  actions: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center'
  }
});

type UpgradePlanProps =
  WithStyles<typeof styles>;

class UpgradePlan extends React.PureComponent<UpgradePlanProps> {
  public render() {
    return (
      <div
        className={clsx(this.props.classes.root)}
      >
        <div className={this.props.classes.media}>
          <img
            alt="Upgrade to PRO"
            src="/images/undraw_resume_folder_2_arse.svg"
          />
        </div>
        <div className={this.props.classes.content}>
          <Typography
            align="center"
            gutterBottom
            variant="h6"
          >
            Upgrade to PRO
          </Typography>
          <Typography
            align="center"
            variant="body2"
          >
            Upgrade to Devias Kit PRO and get even more components
          </Typography>
        </div>
        <div className={this.props.classes.actions}>
          <Button
            color="primary"
            component="a"
            href="https://devias.io/products/devias-kit-pro"
            variant="contained"
          >
            Upgrade
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(UpgradePlan as any)); 
