import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './Footer.module.css';
import personImg from '../../Images/Team/1.jpg'
import imgOne from '../../Images/Footer/bence-balla-schottner-aNPR4p4vjVk-unsplash.jpg'
import imgTwo from '../../Images/Footer/daniele-levis-pelusi-Si_bmG2xo-c-unsplash.jpg'
import imgThree from '../../Images/Footer/jerome-barre-ey0LN30ppUA-unsplash.jpg'
import imgFour from '../../Images/Footer/lucas-doddema-TGuk1nuXVRE-unsplash.jpg'
import imgFive from '../../Images/Footer/robin-schreiner-7y4858E8PfA-unsplash.jpg'
import imgSix from '../../Images/Footer/yianni-nicolaides-KtQc6no1B4k-unsplash.jpg'
const Footer = () => {

    const images = [
        imgOne,imgTwo,imgThree,imgFour,imgFive,imgSix
    ]

    return (
        <Box className={styles.container}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>

                    <Box className={styles.gridItem}>
                        <img className={styles.personImg} src={personImg} alt="" />

                        <Typography variant='body1' style={{ color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus porro sequi obcaecati autem. Omnis, debitis! Dicta deleniti optio dolores voluptatem sequi ducimus ipsam! Amet omnis voluptatum praesentium doloremque aspernatur ex.
                        </Typography>
                        <Typography sx={{ mt: 3 }} variant='h5' style={{ color: 'white' }}>
                            Monica Morgan
                        </Typography>
                    </Box>

                </Grid>

                <Grid className={styles.ulGrid} item xs={12} sm={12} md={4}>

                    <Box>
                        <ul className={styles.ul}>
                            <Typography color='white' variant='h6'>Useful Links</Typography>
                            <li className={styles.li}>Home</li>
                            <li className={styles.li}>About Us</li>
                            <li className={styles.li}>Services</li>
                            <li className={styles.li}>Portfolio</li>
                            <li className={styles.li}>Blog</li>
                            <li className={styles.li}>Contact</li>
                        </ul>
                    </Box>

                </Grid>


                <Grid item xs={12} sm={12} md={4}>
                    <Grid container spacing={2}>
                        
                        {
                            images.map(item=> 
                            <Grid style={{display:'flex', justifyContent:'center'}} item xs={6} sm={6} md={4}>
                                <img src={item} className={styles.img} alt=""/>
                            </Grid>
                            )
                        }
                        
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;