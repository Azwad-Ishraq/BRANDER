import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SignUpModal from '../SignUp/SignUp/SignUpModal';
import SignInModal from '../SignUp/SignIn/SignInModal';
import useAuth from '../../Hooks/useAuth';
const Navbar = () => {
  const [signUpModalOpen,setSignUpModalOpen] = useState(false);
  const [signInModalOpen,setSignInModalOpen] = useState(false);

  const {user,logout} = useAuth();

  const [switchNav, setSwitchNav] = useState(false);

  const toggleSwitch = () => {
    switchNav ? setSwitchNav(false) : setSwitchNav(true);
  };

  return (
    <>
    {
        signUpModalOpen &&
        <SignUpModal signUpModalOpen={signUpModalOpen} setSignUpModalOpen={setSignUpModalOpen}></SignUpModal>

      
    }
    {
        signInModalOpen &&
        <SignInModal signInModalOpen={signInModalOpen} setSignInModalOpen={setSignInModalOpen}></SignInModal>
    }
    <AppBar className={styles.navbar} position="absolute">
      <Toolbar className={styles.toolbar}>
        <IconButton
          // onClick={()=> navMenuItems.classList.add('navMenuItemsActive')}
          onClick={() => toggleSwitch()}
          className={styles.iconButton}
          size="large"
          edge="start"
          color="primary"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <div className={styles.navMenuContainer}>
          <Typography variant='h5' className={styles.title}>
            BRANDER.
            </Typography>
          <AppsIcon className={styles.appsIcon}></AppsIcon>
          <div className={`${styles.navMenuItems} ${switchNav ? styles.navMenuItemsActive : ''}`}>
            {
              switchNav ?
                <div onClick={() => toggleSwitch()} className={styles.navCloseBtnContainer}>
                  <span className={`${styles.closeLineOne} ${styles.closeLine}`}></span>
                  <span className={`${styles.closeLineTwo} ${styles.closeLine}`}></span>
                </div>
                :
                <span></span>
            }
            <Link to='/' className={styles.navMenuItem}>HOME</Link>
            <Link to='/shop' className={styles.navMenuItem}>SHOP</Link>
            <Link to='/about' className={styles.navMenuItem}>ABOUT</Link>
            {user.email && <Link to='/profile' className={styles.navMenuItem}>PROFILE</Link>}
            
            {
              switchNav ?
                <div className={`${styles.buttonContainer} ${switchNav ? styles.buttonContainerNavActive : ''}`}>
                  {!user.email && <Button onClick={()=> setSignUpModalOpen(true)} className={`button-white-bg btn ${styles.navbarSignUpBtn}`} color="primary">SIGN UP</Button>}
                  {!user.email && <Button onClick={() => setSignInModalOpen(true)} className={`button-orange-bg btn ${styles.navbarSignInBtn}`} color="primary">SIGN IN</Button>}
                  {user.email && <Button onClick={() => logout()} className={`button-orange-bg btn ${styles.navbarSignInBtn}`} color="primary">LOG OUT</Button>}
                </div>
                :
                <span></span>
              }
          </div>
        </div>

        <div className={styles.buttonContainer}>
                  {!user.email && <Button onClick={()=> setSignUpModalOpen(true)} className={`button-white-bg btn ${styles.navbarSignUpBtn}`} color="primary">SIGN UP</Button>}
                  {!user.email && <Button onClick={() => setSignInModalOpen(true)} className={`button-orange-bg btn ${styles.navbarSignInBtn}`} color="primary">SIGN IN</Button>}
                  {user.email && <Button onClick={() => logout()} className={`button-white-bg btn ${styles.navbarSignInBtn}`} color="primary">LOG OUT</Button>}
        </div>

      </Toolbar>
    </AppBar>
    </>   
  );
};

export default Navbar;