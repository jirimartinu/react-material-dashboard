import { UsersByDeviceConstants } from 'src/store/constants/views/Dashboard/components/UsersByDeviceConstants';
import { Theme } from '@material-ui/core';


export interface IUsersByDeviceGenerateState {
  type: UsersByDeviceConstants.GENERATE_STATE;
  theme: Theme;
}

export type KnownUsersByDeviceAction = IUsersByDeviceGenerateState;

const handleGenerateState = (theme: Theme) => (dispatch, getState) => {
  dispatch({ type: UsersByDeviceConstants.GENERATE_STATE, theme: theme });
}

export const actions = {
  handleGenerateState
};
