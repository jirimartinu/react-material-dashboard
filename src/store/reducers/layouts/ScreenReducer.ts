import { Action, Reducer } from 'redux';
import { IScreenState } from 'src/store/states/layouts/ScreenState';
import { ScreenConstants } from 'src/store/constants/layouts/ScreenConstants';
import { KnownScreenAction } from 'src/store/actions/layouts/ScreenActions';

const unloadedState: IScreenState = { 
  isDesktop: true
}

export const ScreenReducer: Reducer<IScreenState> = (state: IScreenState = unloadedState, incomingAction: Action) => {
  const action = incomingAction as KnownScreenAction;

  switch (action.type) {
    case ScreenConstants.CHANGE:
      return {
        isDesktop: action.isDesktop
      };
    default:
      // eslint-disable-next-line
      const exhaustiveCheck: any = action;
  }

  return state || unloadedState;
}