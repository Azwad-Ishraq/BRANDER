import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './Support.module.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HeadsetIcon from '@mui/icons-material/Headset';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
const Support = () => {
    return (
        <Box sx={{ mt: 10,mb:10 }}>
            <Typography className={styles.heading} variant='h6' color='primary'>
                SUPPORT
            </Typography>
            <Typography className={styles.subHeading} variant='h4' >
                For Those Who Have Faith In
            </Typography>
            <Typography className={styles.subHeading} color='primary' variant='h4' >
                Us
            </Typography>


            <Container sx={{mt:5}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box className={styles.gridItem}>
                            <ChatBubbleOutlineIcon className={styles.icon}></ChatBubbleOutlineIcon>
                            <Typography sx={{mb:3}} variant='h5'>
                                Chat With Experts
                        </Typography>
                        <Typography variant='body1' className={styles.gridItemSubHeading}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sed magnam exercitationem! Inventore, facere laborum est corporis nam at nostrum 
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box className={styles.gridItem}>
                            <HeadsetIcon className={styles.icon}></HeadsetIcon>
                            <Typography sx={{mb:3}} variant='h5'>
                                24/7 Support Team
                        </Typography>
                        <Typography variant='body1' className={styles.gridItemSubHeading}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sed magnam exercitationem! Inventore, facere laborum est corporis nam at nostrum 
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box className={styles.gridItem}>
                            <DirectionsCarIcon className={styles.icon}></DirectionsCarIcon>
                            <Typography sx={{mb:3}} variant='h5'>
                                We Are Here,We Are There
                        </Typography>
                        <Typography variant='body1' className={styles.gridItemSubHeading}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sed magnam exercitationem! Inventore, facere laborum est corporis nam at nostrum 
                        </Typography>
                        </Box>
                    </Grid>


                </Grid>
            </Container>

            
            <span className={styles.btnContainer}>
            <Button className={`button-orange-bg btn`} color="primary">CONTACT</Button>
            </span>
            

        </Box>
    );
};

export default Support;