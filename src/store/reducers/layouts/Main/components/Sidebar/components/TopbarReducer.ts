import { Action, Reducer } from 'redux';
import { ITopbarState } from 'src/store/states/layouts/Main/components/Sidebar/components/TopbarState';

const unloadedState: ITopbarState = { 
  notifications: [
    {text: 'Welcome'}, 
    {text: 'Sale'}
  ]
}

export const TopbarReducer: Reducer<ITopbarState> = (state: ITopbarState = unloadedState, incomingAction: Action) => {
    return state || unloadedState;
};