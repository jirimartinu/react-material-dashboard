import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import { Paper, Input, Theme, WithStyles, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme: Theme) => ({
  root: {
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    flexBasis: 420
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px'
  }
});

export interface ISearchInputProps {
  className?: string;
  onChange?: any;
  style?: CSSProperties;
  placeholder?: string;
}

class SearchInput extends React.PureComponent<ISearchInputProps & WithStyles<typeof styles>> {
  public render() {
    return (
      <Paper
        className={clsx(this.props.classes.root, this.props.className)}
        style={this.props.style}
      >
        <SearchIcon className={this.props.classes.icon} />
        <Input
          className={this.props.classes.input}
          disableUnderline
          onChange={this.props.onChange}
        />
      </Paper>
    );
  }
}

export default withStyles(
  styles as any, { withTheme: true }
)(SearchInput as any); 