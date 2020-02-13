import React from 'react';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ILatestProductsState from 'src/store/states/views/Dashboard/components/LatestProductsState';
import { connect } from 'react-redux';
import { IApplicationState } from 'src/store';

const styles = (theme: Theme) => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
});

class LatestProducts extends React.PureComponent<ILatestProductsState & WithStyles<typeof styles>> {
  public render() {
    return (
      <Card
        className={clsx(this.props.classes.root)}
      >
        <CardHeader
          subheader={`${this.props.products.length} in total`}
          title="Latest products"
        />
        <Divider />
        <CardContent className={this.props.classes.content}>
          <List>
            {this.props.products.map((product, i) => (
              <ListItem
                divider={i < this.props.products.length - 1}
                key={product.id}
              >
                <ListItemAvatar>
                  <img
                    alt="Product"
                    className={this.props.classes.image}
                    src={product.imageUrl}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={product.name}
                  secondary={`Updated ${product.updatedAt.fromNow()}`}
                />
                <IconButton
                  edge="end"
                  size="small"
                >
                  <MoreVertIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
        <Divider />
        <CardActions className={this.props.classes.actions}>
          <Button
            color="primary"
            size="small"
            variant="text"
          >
            View all <ArrowRightIcon />
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.latestProducts
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(LatestProducts as any)); 
