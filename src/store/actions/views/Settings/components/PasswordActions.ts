import { PasswordConstants } from 'src/store/constants/views/Settings/components/PasswordConstants';
import { SyntheticEvent } from 'react';

interface IPasswordChange {
    type: PasswordConstants.CHANGE;
    event: SyntheticEvent;
}

export type KnownPasswordAction = IPasswordChange;

const handlePasswordChange = (event: SyntheticEvent): IPasswordChange => ({ type: PasswordConstants.CHANGE, event: event })

export const actions = {
    handlePasswordChange
};
