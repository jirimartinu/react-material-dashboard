import { Action, Reducer } from 'redux';
import { IProfileState } from 'src/store/states/layouts/Main/components/Sidebar/components/ProfileState';

const unloadedState: IProfileState = { 
  user: {
    name: 'Shen Zhi',
    avatar: '/images/avatars/avatar_11.png',
    bio: 'Brain Director'
  }
}

export const ProfileReducer: Reducer<IProfileState> = (state: IProfileState = unloadedState, incomingAction: Action) => {
    return state || unloadedState;
};