import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './Products.module.css'
import img from '../../Images/Products/oliver-pecker-HONJP8DyiSM-unsplash.jpg'
const Products = () => {
    return (
        <Box sx={{mr:5,ml:5,mt:10}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <img className={styles.img} src={img} alt=""/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box className={styles.gridItemTwo}>
                    <Typography sx={{mb:2}} color='primary' variant='h6'>
                        PRODUCTS
                    </Typography>
                    <Typography className={styles.subHeading} color='#2f3640' variant='h4'>
                        <span className={styles.whiteText}>THE</span> BEST THING EVER
                    </Typography>
                    <Typography color='#2f3640' variant='body1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque ex numquam similique animi? Rerum error vitae quaerat esse eum maiores accusamus repudiandae molestiae tenetur, optio, consequatur voluptatibus sequi corrupti nihil placeat aliquam deleniti. Aliquid iusto quis voluptates qui nesciunt molestias. Laboriosam corporis adipisci debitis nam mollitia quos, repellendus expedita.
                    </Typography>
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    );
};

export default Products;