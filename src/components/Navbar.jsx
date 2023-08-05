import { DarkMode, Menu, Person, Settings } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';

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
});

const Navbar = () => {
  return (
    <Box>
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
            <Avatar></Avatar>
          </Icons>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
