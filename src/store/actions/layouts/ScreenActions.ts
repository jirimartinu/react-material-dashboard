import { ScreenConstants } from 'src/store/constants/layouts/ScreenConstants';
import MediaQueryActive from 'src/utils/MediaQueryActive';

interface IScreenChange {
  type: ScreenConstants.CHANGE;
  isDesktop: boolean;
}

export type KnownScreenAction = IScreenChange;

const handleChange = (media: string): IScreenChange => ({ type: ScreenConstants.CHANGE, isDesktop: MediaQueryActive(media) })

export const actions = {
    handleChange
}