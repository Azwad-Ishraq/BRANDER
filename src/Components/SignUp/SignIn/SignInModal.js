import { Alert, Box, Button, Dialog, Grid, LinearProgress, Slide, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from './SignInModal.module.css';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const SignInModal = ({signInModalOpen,setSignInModalOpen}) => {

    const {signInWithGoogle,loginUser,loading,authError,user} = useAuth();
    console.log(user);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginData,setLoginData] = useState({});

    const handleClickOpen = () => {
        setSignInModalOpen(true);
    };

    const handleClose = () => {
        setSignInModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(loginData.email,loginData.password,location,navigate);
    }

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const hanldeGoogleSignIn = () => {
        signInWithGoogle(location,navigate);
    }
    return (
        <Dialog
            open={signInModalOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <form onSubmit={handleSubmit} className={styles.container}>
                    <Typography className={styles.title} variant='h4'>
                        SIGN IN
                    </Typography>

                <Grid container spacing={5}>

                    <Grid item xs={12} sm={12} md={12}>
                        <TextField onBlur={handleOnBlur} name='email' className={styles.textField} id="standard-basic" label="Email" variant="standard" />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <TextField name='password' onBlur={handleOnBlur} className={styles.textField} id="standard-basic" label="Password" variant="standard" />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>

                        <Box style={{display:'flex',alignItems:'center'}}>
                            <Button type='submit' className={`button-orange-bg btn`} color="primary">SIGN UP</Button>
                            <GoogleIcon onClick={hanldeGoogleSignIn} className={styles.googleIcon}></GoogleIcon>
                        </Box>

                    </Grid>

                    <Grid>
                        
                        {
                            loading && <LinearProgress sx={{mb:4}} />
                        }
                        {
                            authError && <Alert sx={{mb:2}} severity="error">{authError}</Alert>
                        }
                    </Grid>
                    
                </Grid>

            </form>
        </Dialog>
    );
};

export default SignInModal;