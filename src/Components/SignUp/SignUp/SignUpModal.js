import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import styles from './SignUpModal.module.css';
import { Alert, Box, Button, Checkbox, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const SignUpModal = ({ signUpModalOpen, setSignUpModalOpen }) => {
    
    const {signInWithGoogle,registerUser,loading,authError,user} = useAuth();
    
    const location = useLocation();
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setSignUpModalOpen(true);
    };

    const handleClose = () => {
        setSignUpModalOpen(false);
    };


    const [userData, setUserData] = useState({});
    const [termsCheckBoxChecked, setTermsCheckBoxChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(termsCheckBoxChecked){
            registerUser(userData.email,userData.password, userData.name, navigate);
            setErrorMessage('');
            setSignUpModalOpen(false);
            
        }
        else {
            
            setErrorMessage('Please agree the terms and conditions');
        }

    };

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value  = e.target.value;
        const newUserData = {...userData};
        newUserData[field] = value;
        setUserData(newUserData);
        
    };
    

    const handleConfirmPasswordCheck = () => {
        
    }

    const hanldeGoogleSignIn = () => {
        if(termsCheckBoxChecked){
            signInWithGoogle(location,navigate);
            setErrorMessage('');
            setSignUpModalOpen(false);
            
            
        }else{
            
            setErrorMessage('Please agree the terms and conditions');
        }
    }

    return (


        <Dialog
            open={signUpModalOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <form onSubmit={handleSubmit} className={styles.container}>
                <Typography className={styles.title} variant='h4'>
                    SIGN UP
                    </Typography>

                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField onBlur={handleOnBlur} name='name' className={styles.textField} id="standard-basic" label="Username" variant="standard" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <TextField onBlur={handleOnBlur} name='email' className={styles.textField} id="standard-basic" label="Email" variant="standard" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <TextField name='password' onBlur={handleOnBlur} className={styles.textField} id="standard-basic" label="Password" variant="standard" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <TextField  className={styles.textField} id="standard-basic" label="Confirm Password" variant="standard" />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <Box style={{display:'flex',alignItems:'center'}}>
                            <Checkbox onClick={()=> setTermsCheckBoxChecked(!termsCheckBoxChecked)} sx={{p:0,pr:1}} />
                            <Typography variant='body1'>
                            I AGREE TO THE TERMS AND CONDITIONS
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>

                        {
                            errorMessage &&  <Alert sx={{mb:2}} severity="error">{errorMessage}</Alert>
                        }
                        {
                            loading && <LinearProgress sx={{mb:4}} />
                        }
                        {
                            authError && <Alert sx={{mb:2}} severity="error">{authError}</Alert>
                        }

                        <Box style={{display:'flex',alignItems:'center'}}>
                        <Button type='submit' className={`button-orange-bg btn`} color="primary">SIGN UP</Button>
                        <GoogleIcon onClick={hanldeGoogleSignIn} className={styles.googleIcon}></GoogleIcon>
                        </Box>

                    </Grid>
                    
                </Grid>

            </form>
        </Dialog>

    );
};

export default SignUpModal;