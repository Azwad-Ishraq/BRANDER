import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import bg from '../../Images/AboutHeader/bg2.png'
import styles from './ShopHeader.module.css'
import img from '../../Images/ShopHeader/daniel-storek-JM-qKEd1GMI-unsplash.jpg'
const ShobHeader = () => {
    return (
        <Box style={{ background: `url(${bg})` }} className={styles.container}>
           
                <Typography className={styles.text1} variant='h6'>
                    HOME/<span className='orange-text'>SHOP</span>
                </Typography>
                <Typography className={styles.text2} variant='h3'>
                    SHOP <span className='orange-text'>EVERYTHING</span> BUT NOT ANYTHING
                </Typography>
                <img src={img} className={styles.img} alt=""/>
            
        </Box>
    );
};

export default ShobHeader;