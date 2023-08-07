import CustomListItem from './CustomListItem';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Dashboard,
  People,
  CardMembership,
  EmojiPeople,
  FitnessCenter,
  Notifications,
  Receipt,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Avatar
          sx={{ width: 30, height: 30 }}
          src='https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          onClick={(e) => setOpen(true)}
        ></Avatar>

        <List>
          <CustomListItem
            icon={<Dashboard />}
            primaryText={'Dashboard'}
            open={open}
            onClick={() => navigate('/')}
          />

          <CustomListItem
            icon={<People />}
            primaryText='Members'
            open={open}
            onClick={() => navigate('/members')}
          />

          <CustomListItem
            icon={<EmojiPeople />}
            primaryText='Trainers'
            open={open}
            onClick={() => navigate('/trainers')}
          />

          <CustomListItem
            icon={<CardMembership />}
            primaryText='Membership'
            open={open}
            onClick={() => navigate('/membership')}
          />

          <CustomListItem
            icon={<FitnessCenter />}
            primaryText='Classes'
            open={open}
            onClick={() => navigate('/classes')}
          />

          <CustomListItem
            icon={<Receipt />}
            primaryText='Invoices'
            open={open}
            onClick={() => navigate('/invoices')}
          />

          <CustomListItem
            icon={<Notifications />}
            primaryText='Notifications'
            open={open}
            onClick={() => navigate('/notifications')}
          />
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
