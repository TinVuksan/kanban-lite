import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { useState } from 'react';

import Analytics from '../../assets/Analytics.svg';
import Calendar from '../../assets/Calendar.svg';
import Home from '../../assets/Home.svg';
import Lightning from '../../assets/Lightning.svg';
import Logomark from '../../assets/Logomark.svg';
import Notifications from '../../assets/Notifications.svg';
import People from '../../assets/People.svg';
import Settings from '../../assets/Settings.svg';

const navItems = [
    { icon: Home, label: 'Home' },
    { icon: Analytics, label: 'Analytics' },
    { icon: People, label: 'People' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Lightning, label: 'Lightning' },
    { icon: Notifications, label: 'Notifications' },
    { icon: Settings, label: 'Settings' },
];

export const SidebarNavMobile = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    return (
        <>
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 md:hidden">
                <div className="flex items-center gap-2 align-middle">
                    <img className="translate-y-1" src={Logomark} alt="Logo" width={48} />
                    <span className="text-lg font-semibold">Kanban Lite</span>
                </div>
                <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon fontSize="large" />
                </IconButton>
            </div>

            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <div className="flex w-64 flex-col gap-4 px-4 py-4" role="presentation">
                    <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <img src={Logomark} alt="Logo" width={32} />
                            <span className="text-lg font-semibold">Kanban Lite</span>
                        </div>
                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <Divider />

                    <List>
                        {navItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={item.icon} alt={item.label} className="h-5 w-5" />
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </>
    );
};
