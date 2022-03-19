import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './Religion.module.css'
import img_one from '../../Images/Religion/alexandre-chambon-yYFwhuRAe-Y-unsplash.jpg';
import img_two from '../../Images/Religion/cosmic-timetraveler-_R1cc2IHk70-unsplash.jpg'
import img_three from '../../Images/Religion/fahrul-azmi-5K549TS6F08-unsplash.jpg'
import img_four from '../../Images/Religion/jason-cooper-iEJVyyevw-U-unsplash.jpg'
import img_five from '../../Images/Religion/john-towner-X48hkTT1qQc-unsplash.jpg'
import img_six from '../../Images/Religion/sanjan-malakala-P9JAVSExxh0-unsplash.jpg'
const Religion = () => {

    const images = [
        img_one,
        img_two,
        img_three,
        img_four,
        img_five,
        img_six
    ]

    return (

        <Box className={styles.container} sx={{ mt: 20 }}>
            <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h6' color='primary'>
                RELIGION
            </Typography>
            <Typography sx={{ textAlign: 'center', fontWeight: 500 }} variant='h4'>
                And For Those Who Have Faith In
            </Typography>
            <Typography sx={{ textAlign: 'center', fontWeight: 500 }} variant='h5' color='primary'>
                God
            </Typography>

            <Box sx={{mr:10,ml:10,mt:7}}>
            <Grid  container >
                
                <Grid className={styles.gridItem} item xs={12} sm={6} md={4}>
                         <img className={styles.imgOne} src={img_one} alt=""/>
                </Grid>
                <Grid className={styles.gridItem} item xs={12} sm={6} md={4}>
                         <img className={styles.imgTwo} src={img_two} alt=""/>
                </Grid>
                <Grid className={styles.gridItem} item xs={12} sm={6} md={4}>
                         <img className={styles.imgThree} src={img_three} alt=""/>
                </Grid>
                <Grid className={styles.gridItem} item xs={12} sm={6} md={4}>
                         <img className={styles.imgFour} src={img_four} alt=""/>
                </Grid>
                <Grid className={styles.gridItem} item xs={12} sm={6} md={4}>
                         <img className={styles.imgFive} src={img_five} alt=""/>
                </Grid>
                <Grid className={styles.gridItem} item xs={12} sm={6} md={4}>
                         <img className={styles.imgSix} src={img_six} alt=""/>
                </Grid>
                
            </Grid>
            </Box>
        </Box>
    );
};

export default Religion;