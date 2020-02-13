import React from 'react';
import { IconButton, Grid, Typography, Theme, WithStyles, withStyles } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import ProductsToolbar from './components/ProductsToolbar';
import ProductCard from './components/ProductCard';
import IProductListState from 'src/store/states/views/ProductListState';
import { connect } from 'react-redux';
import { IApplicationState } from 'src/store';

const styles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});

class ProductList extends React.PureComponent<IProductListState & WithStyles<typeof styles>> {
  public render() {
    return (
      <div className={this.props.classes.root}>
        <ProductsToolbar />
        <div className={this.props.classes.content}>
          <Grid
            container
            spacing={3}
          >
            {this.props.products.map(product => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={this.props.classes.pagination}>
          <Typography variant="caption">1-6 of 20</Typography>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.productList
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(ProductList as any)); 