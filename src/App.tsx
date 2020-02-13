import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import Routes from './Routes';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import { IApplicationState } from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as chartjs from 'src/helpers/chartjs';
import { theme } from './theme/index';
import validators from './common/validators';
import validate from 'validate.js';
import { MuiThemeProvider } from '@material-ui/core';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

// Hackerman
const Chart = require('react-chartjs-2').Chart;

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl != null ? baseUrl : "" });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as IApplicationState;

const store = configureStore(history, initialState);

Chart.elements.Rectangle.prototype.draw = chartjs.draw;

validate.validators = {
  ...validate.validators,
  ...validators
};

class App extends React.Component<{}, {}> {
  public render() {
    return <Provider store={ store }>
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={ history as any }>
          <Routes />
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>
  }
}

export default process.env.NODE_ENV === "development" ? hot(App) as any : App;