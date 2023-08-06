import { DarkMode, Settings } from '@mui/icons-material';
import {
  AppBar,
  MuiAppBar,
  Avatar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
}));

const MenuLeft = styled(Box)({
  display: 'flex',
  gap: '20px',
});

const Icons = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  cursor: 'pointer',
});

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  [theme.breakpoints.up('sm')]: { display: 'none' },
}));
// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,

//   }),

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <MenuLeft>
          <Typography variant='h6'>DASHBOARD</Typography>
          <Search>
            <InputBase placeholder='Search...'></InputBase>
          </Search>
        </MenuLeft>
        <Icons>
          <DarkMode />
          <Settings />
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            onClick={(e) => setOpen(true)}
          ></Avatar>
        </Icons>
      </StyledToolbar>
      <Menu
        sx={{ cursor: 'pointer' }}
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
