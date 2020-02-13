import React from 'react';
import clsx from 'clsx';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import { IProduct } from 'src/store/states/views/ProductListState';

const styles = (theme: Theme) => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: (theme.palette as any).icon,
    marginRight: theme.spacing(1)
  }
});

interface IProductCardProps {
  product: IProduct;
}

class ProductCard extends React.PureComponent<IProductCardProps & WithStyles<typeof styles>> {
  public render() {
    return (
      <Card
        className={clsx(this.props.classes.root)}
      >
        <CardContent>
          <div className={this.props.classes.imageContainer}>
            <img
              alt="Product"
              className={this.props.classes.image}
              src={this.props.product.imageUrl}
            />
          </div>
          <Typography
            align="center"
            gutterBottom
            variant="h4"
          >
            {this.props.product.title}
          </Typography>
          <Typography
            align="center"
            variant="body1"
          >
            {this.props.product.description}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Grid
            container
            justify="space-between"
          >
            <Grid
              className={this.props.classes.statsItem}
              item
            >
              <AccessTimeIcon className={this.props.classes.statsIcon} />
              <Typography
                display="inline"
                variant="body2"
              >
                Updated 2hr ago
              </Typography>
            </Grid>
            <Grid
              className={this.props.classes.statsItem}
              item
            >
              <GetAppIcon className={this.props.classes.statsIcon} />
              <Typography
                display="inline"
                variant="body2"
              >
                {this.props.product.totalDownloads} Downloads
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(
  styles as any, { withTheme: true }
)(ProductCard as any); 
