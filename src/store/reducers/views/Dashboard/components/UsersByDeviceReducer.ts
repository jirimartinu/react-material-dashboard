import { Action, Reducer } from 'redux';
import IUsersByDeviceState from 'src/store/states/views/Dashboard/components/UsersByDeviceState';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import { Theme } from '@material-ui/core';
import { KnownUsersByDeviceAction } from 'src/store/actions/views/Dashboard/components/UsersByDeviceActions';
import { UsersByDeviceConstants } from 'src/store/constants/views/Dashboard/components/UsersByDeviceConstants';

const unloadedState: IUsersByDeviceState = { 
  data: {},
  options: {},
  devices: []
}

const generateState = (theme: Theme): IUsersByDeviceState => {
  return {
    data: {
      datasets: [
        {
          data: [63, 15, 22],
          backgroundColor: [
            theme.palette.primary.main,
            theme.palette.error.main,
            theme.palette.warning.main
          ],
          borderWidth: 8,
          borderColor: (theme.palette as any).white,
          hoverBorderColor: (theme.palette as any).white
        }
      ],
      labels: ['Desktop', 'Tablet', 'Mobile']
    },
    options: {
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      cutoutPercentage: 80,
      layout: { padding: 0 },
      tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false,
        borderWidth: 1,
        borderColor: theme.palette.divider,
        backgroundColor: (theme.palette as any).white,
        titleFontColor: theme.palette.text.primary,
        bodyFontColor: theme.palette.text.secondary,
        footerFontColor: theme.palette.text.secondary
      }
    },
    devices: [
      {
        title: 'Desktop',
        value: '63',
        icon: LaptopMacIcon,
        color: theme.palette.primary.main
      },
      {
        title: 'Tablet',
        value: '15',
        icon: TabletMacIcon,
        color: theme.palette.error.main
      },
      {
        title: 'Mobile',
        value: '23',
        icon: PhoneIphoneIcon,
        color: theme.palette.warning.main
      }
    ]
  }
}

export const UsersByDeviceReducer: Reducer<IUsersByDeviceState> = (state: IUsersByDeviceState = unloadedState, incomingAction: Action) => {
  const action = incomingAction as KnownUsersByDeviceAction;

  switch (action.type) {
    case UsersByDeviceConstants.GENERATE_STATE:
      return {
        ...state,
        ...generateState(action.theme),
      }; 
/*     default:
      const exhaustiveCheck: never = action; */
  }

  return state || unloadedState;
};