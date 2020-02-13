import { Action, Reducer } from 'redux';
import { SidebarConstants } from 'src/store/constants/layouts/Main/components/Sidebar/SidebarConstants';
import { KnownSidebarAction } from 'src/store/actions/layouts/Main/components/Sidebar/SidebarActions';
import { ISidebarState } from 'src/store/states/layouts/Main/components/Sidebar/SidebarState';

const unloadedState: ISidebarState = { isSidebarOpen: false }

export const SidebarReducer: Reducer<ISidebarState> = (state: ISidebarState = unloadedState, incomingAction: Action) => {
    const action = incomingAction as KnownSidebarAction;

    switch (action.type) {
        case SidebarConstants.SIDEBAR_OPEN:
            return {
                isSidebarOpen: true
            };
        case SidebarConstants.SIDEBAR_CLOSE:
            return {
                isSidebarOpen: false
            };
        default:
            // eslint-disable-next-line
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};