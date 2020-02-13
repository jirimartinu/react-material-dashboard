import { History } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore, StoreEnhancer, Store } from 'redux';
import thunk from 'redux-thunk';
import { IApplicationState, reducers } from '.';

export default function configureStore(history: History, initialState?: IApplicationState) {
  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history)
  });

  const enhancers = [];

  const windowIfDefined = typeof window === 'undefined' ? null : window as any;
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
      enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__() as () => StoreEnhancer);
  }

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  ) as Store<IApplicationState>;
}
