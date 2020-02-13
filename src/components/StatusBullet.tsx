import React from 'react';
import clsx from 'clsx';
import { Theme, WithStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  root: {
    display: 'inline-block',
    borderRadius: '50%',
    flexGrow: 0,
    flexShrink: 0
  },
  sm: {
    height: theme.spacing(1),
    width: theme.spacing(1)
  },
  md: {
    height: theme.spacing(2),
    width: theme.spacing(2)
  },
  lg: {
    height: theme.spacing(3),
    width: theme.spacing(3)
  },
  neutral: {
    backgroundColor: (theme.palette as any).neutral
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  info: {
    backgroundColor: theme.palette.info.main
  },
  warning: {
    backgroundColor: theme.palette.warning.main
  },
  danger: {
    backgroundColor: theme.palette.error.main
  },
  success: {
    backgroundColor: theme.palette.success.main
  }
});

export interface IStatusBulletProps {
  className: string;
  size: string;
  color: string;
}

class StatusBullet extends React.PureComponent<IStatusBulletProps & WithStyles<typeof styles>> {
  public render() {
    return (
      <span
        className={clsx(
          {
            [this.props.classes.root]: true,
            [this.props.classes[this.props.size]]: this.props.size,
            [this.props.classes[this.props.color]]: this.props.color
          },
          this.props.className
        )}
      />
    );
  }
};

export default withStyles(
  styles as any, { withTheme: true }
)(StatusBullet as any);