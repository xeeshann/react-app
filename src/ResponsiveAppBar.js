import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './index.css';
import { Link } from 'react-router-dom';







      


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            
            sx={{ mr: 2, display: { xs: 'none', md: 'flex'  ,   fontFamily: 'Josefin Sans',
} }}
          >
            My Potfolio
          </Typography>

          <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none',fontFamily: 'Josefin Sans', } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link to='/'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                </Link>

                <Link to='/services'>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Services</Typography>
                </MenuItem>
                </Link>
               <Link to='/price'>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Price</Typography>
                </MenuItem>
                </Link>
               
              
                <Link to='/contact'>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
                </Link>
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}
          >
            My Potfolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
               <Link to='/'>
              <Button onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >home</Button>
              </Link>

              <Link to='/services'>
              <Button 
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Services
              </Button>
              </Link>
              <Link to='/price'>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Pricing
              </Button>
              </Link>
             
              <Link to='contact'>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Contact
              </Button>
              </Link>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="More">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 ,padding:"0px"}}>
                <Avatar alt="Xeeshann" src="profilepic.svg"

                sx={{
                border:"1px solid black"}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <Link to='/cv'>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Cv</Typography>
                </MenuItem>
                </Link>
                <Link to='/projects'>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Projects</Typography>
                </MenuItem>
                </Link>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
  );
};
export default ResponsiveAppBar;

