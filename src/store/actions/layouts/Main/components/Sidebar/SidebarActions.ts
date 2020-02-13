import { SidebarConstants } from 'src/store/constants/layouts/Main/components/Sidebar/SidebarConstants';

interface ISidebarOpen {
    type: SidebarConstants.SIDEBAR_OPEN;
    isSidebarOpen: boolean;
}

interface ISidebarClose {
    type: SidebarConstants.SIDEBAR_CLOSE;
    isSidebarOpen: boolean;
}

export type KnownSidebarAction = ISidebarOpen | ISidebarClose;

const handleSidebarOpen = (): ISidebarOpen => ({ type: SidebarConstants.SIDEBAR_OPEN, isSidebarOpen: true })
const handleSidebarClose = (): ISidebarClose => ({ type: SidebarConstants.SIDEBAR_CLOSE, isSidebarOpen: false })

export const actions = {
    handleSidebarOpen,
    handleSidebarClose
};
