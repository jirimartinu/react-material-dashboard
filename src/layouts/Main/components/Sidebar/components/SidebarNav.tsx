/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { NavLink as RouterLink, NavLinkProps } from 'react-router-dom';
import clsx from 'clsx';
import { List, ListItem, Button, colors, WithStyles, withStyles, Theme } from '@material-ui/core';
import { ISidebarNavState } from 'src/store/states/layouts/Main/components/Sidebar/components/SidebarNavState';
import { connect } from 'react-redux';
import { IApplicationState } from 'src/store';

const styles = (theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none' as any,
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: (theme.palette as any).icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
});

export type Ref = HTMLDivElement;

const CustomRouterLink = forwardRef<Ref, NavLinkProps>((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

type SidebarNavProps =
  ISidebarNavState & WithStyles<typeof styles, true>;

class SidebarNav extends React.PureComponent<SidebarNavProps> {
  public render() {
    return (
      <List
        className={clsx(this.props.classes.root)}
      >
        {this.props.pages.map(page => {
          const { icon: Icon } = page;

          return (
            <ListItem
              className={this.props.classes.item}
              disableGutters
              key={page.title}
            >
              <Button
                activeClassName={this.props.classes.active}
                className={this.props.classes.button}
                component={CustomRouterLink}
                to={page.href}
              >
                <div className={this.props.classes.icon}>
                  <Icon />
                </div>
                {page.title}
              </Button>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.sidebarNav
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(SidebarNav as any)); 
