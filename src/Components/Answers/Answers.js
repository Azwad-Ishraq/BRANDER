import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './Answers.module.css'
import ImageIcon from '@mui/icons-material/Image';
import ExploreIcon from '@mui/icons-material/Explore';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ParkIcon from '@mui/icons-material/Park';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MosqueIcon from '@mui/icons-material/Mosque';
const Answers = () => {
    return (
        <Box className={styles.container}>
            <Box sx={{ p: 5 }}>
                <Typography color='primary' variant='h6'>
                    ANSWERS
                </Typography>
                <Typography className={styles.title2} variant='h4'>
                    So You Are Looking For Some <span className='orange-text'>Answers</span>,
                    There Are A Few Down Below
                </Typography>



                <Grid className={styles.gridContainer} sx={{ mt: 5 }} container spacing={2}>
                    <Grid  item xs={12} sm={6} md={4}>

                        <Box className={styles.gridItem}>
                            <ImageIcon className={styles.gridItemIcon}></ImageIcon>

                            <Typography className={styles.gridItemHeading} variant='h5'>
                                Images
                            </Typography>

                            <Typography className={styles.subHeading} variant='h6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id magni dignissimos rem corrupti! Obcaecati?
                            </Typography>
                        </Box>

                    </Grid>


                    <Grid item xs={12} sm={6} md={4}>

                        <Box className={styles.gridItem}>
                            <ExploreIcon className={styles.gridItemIcon}></ExploreIcon>
                            <Typography variant='h5' className={styles.gridItemHeading}>
                                Exploration
                                </Typography>
                            <Typography className={styles.subHeading} variant='h6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id magni dignissimos rem corrupti! Obcaecati?
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box className={styles.gridItem}>
                            <ViewInArIcon className={styles.gridItemIcon}></ViewInArIcon>
                            <Typography variant='h5' className={styles.gridItemHeading}>
                                Non-Paper Packages (:
                                </Typography>
                            <Typography className={styles.subHeading} variant='h6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id magni dignissimos rem corrupti! Obcaecati?
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box className={styles.gridItem}>
                            <ParkIcon className={styles.gridItemIcon}></ParkIcon>
                            <Typography variant='h5' className={styles.gridItemHeading}>
                                Environment Protection
                                </Typography>
                            <Typography className={styles.subHeading} variant='h6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id magni dignissimos rem corrupti! Obcaecati?
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Box className={styles.gridItem}>
                            <BloodtypeIcon className={styles.gridItemIcon}></BloodtypeIcon>
                            <Typography variant='h5' className={styles.gridItemHeading}>
                                Donate
                            </Typography>
                            <Typography className={styles.subHeading} variant='h6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id magni dignissimos rem corrupti! Obcaecati?
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box className={styles.gridItem}>
                            <MosqueIcon className={styles.gridItemIcon}></MosqueIcon>
                            <Typography variant='h5' className={styles.gridItemHeading}>
                                Holy Lands
                                </Typography>
                            <Typography className={styles.subHeading} variant='h6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id magni dignissimos rem corrupti! Obcaecati?
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Answers;