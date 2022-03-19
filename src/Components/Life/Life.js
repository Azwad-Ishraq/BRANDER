import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './Life.module.css'
import img from '../../Images/Life/annie-spratt-pDGNBK9A0sk-unsplash.jpg'
import { Link } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Life = () => {
    return (
        <Box className={styles.container}>
            <Grid container spacing={5}>

                <Grid className={styles.textContainer} item xs={12} sm={12} md={6}>
                    <Typography sx={{mb:2}} color='primary' variant='h6'>
                        LIFE...
                    </Typography>

                    <Typography sx={{mb:2, fontWeight:'bold'}} variant='h5'>
                        Flowers, Tress, Rivers, That Is Nature, That is <span className='orange-text'>Life</span>
                    </Typography>
                    <Typography sx={{mb:2}} className='gray-text' variant='h5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque, neque omnis quo sed, amet ipsa dolor praesentium ipsum nemo dignissimos alias in libero rem fugit! Culpa magnam aliquam, ipsam iste, dolore illum quibusdam sequi non, ad dolores labore libero.
                    </Typography>

                    <span className={styles.btnContainer}>
                    <Button className={`button-orange-bg btn ${styles.getStartedBtn}` } color="primary">GET STARTED</Button>
                    <Link className={styles.viewMoreBtn} to='/'>OR JUST SIMPLY VIEW MORE <ArrowDownwardIcon></ArrowDownwardIcon></Link>
                    </span>
                </Grid>


                <Grid className={styles.imgContainer} item xs={12} sm={12} md={6}>
                    <img className={styles.img} src={img} alt=""/>
                </Grid>
               
            </Grid>
        </Box>
    );
};

export default Life;