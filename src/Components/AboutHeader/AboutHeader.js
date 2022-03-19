import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from './AboutHeader.module.css'
import bg from '../../Images/AboutHeader/bg.png'
import headerImg from '../../Images/AboutHeader/headway-5QgIuuBxKwM-unsplash.jpg'
const AboutHeader = () => {
    return (
        <Box style={{background:`url(${bg})`}} className={styles.container}>
            <img className={styles.headerImg} src={headerImg} alt=""/>
            <Typography color='#2f3640' className={styles.text1} variant='h6'>
                HOME/
                <span style={{color:'#ffb03a'}}>ABOUT</span>
            </Typography>
            <Typography color='#2f3640' variant='h3' className={styles.text2}>
                HOW MANY GREAT TEAMS LIKE US? 2,5 OR <span style={{color:'#ffb03a'}}>NONE?</span>
            </Typography>
        </Box>
    );
};

export default AboutHeader;