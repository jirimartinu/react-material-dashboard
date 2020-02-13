import { AccountDetailsConstants } from 'src/store/constants/views/Account/components/AccountDetailsConstants';
import { SyntheticEvent } from 'react';

interface IAccountDetailsChange {
    type: AccountDetailsConstants.CHANGE;
    event: SyntheticEvent;
}

export type KnownAccountDetailsAction = IAccountDetailsChange;

const handleAccountDetailsChange = (event: SyntheticEvent): IAccountDetailsChange => ({ type: AccountDetailsConstants.CHANGE, event: event })

export const actions = {
    handleAccountDetailsChange
};
