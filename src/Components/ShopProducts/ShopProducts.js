import { Box, Divider, FormControlLabel, Grid, Radio, RadioGroup, Slider, TextField, Typography } from '@mui/material';
import React from 'react';
import styles from './ShopProducts.module.css'
import data from './ProductData'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function valuetext(value) {
    return `${value}°C`;
}

const ShopProducts = () => {

    const [value, setValue] = React.useState([20, 37]);
    const brands = ['Apple','Microsoft','PayPal','Asus','Nike']

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={3}>

                    <Box className={styles.gridItemOne}>
                        <TextField className={styles.searchField} id="standard-basic" label="Search" variant="standard" />

                        <Typography className={styles.subHeadings} variant='h6'>
                            PRICE RANGE
                        </Typography>
                        <Divider className={styles.divider} />
                        <Slider
                            className={styles.slider}
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay='auto'
                            getAriaValueText={valuetext}
                        />
                        <Typography className={styles.subHeadings} variant='h6'>
                            BRANDS
                        </Typography>
                        <Divider className={styles.divider} />
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            {
                                brands.map(item=> <FormControlLabel value={item} control={<Radio />} label={item} />)
                            }
                            
                        </RadioGroup>

                        <Typography className={styles.subHeadings} variant='h6'>
                            RECENTY VIEWED
                        </Typography>
                            <Divider className={styles.divider} />
                        
                        <div className={styles.recentlyViwedProducts}>
                            {
                                [data[0], data[2], data[5]].map(item => 
                                    <div className={styles.recentlyViwedProduct}>
                                        <div className={styles.recentlyViwedProductImgContainer}>
                                        <img className={styles.recentlyViwedProductImg} src={item.img} alt=""/>
                                        </div>
                                        
                                        <div>
                                        <Typography variant='h6'>
                                            {item.name}
                                        </Typography>
                                        <Typography sx={{fontWeight:'600'}} variant='h6'>
                                            ${item.price}
                                        </Typography>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={12} md={9}>


                    <Typography variant='h6'>
                        520 ITEMS FOUND
                        </Typography>


                    <Grid container spacing={2}>
                        {
                            data.map(item =>
                                <Grid item xs={12} sm={6} md={4}>

                                    <FavoriteBorderIcon className={styles.favoriteIcon}></FavoriteBorderIcon>

                                    <div className={styles.productImgContainer}>
                                        <img className={styles.productImg} src={item.img} alt="" />
                                    </div>

                                    {/* <img className={styles.productImg} src={item.img} alt=""/> */}


                                    <Typography className={styles.productName} variant='h6'>
                                        {item.name}
                                    </Typography>

                                    <Typography className={styles.productPrice} variant='h6'>
                                        ${item.price}
                                    </Typography>

                                </Grid>
                            )
                        }

                    </Grid>

                </Grid>

            </Grid>
        </Box>
    );
};

export default ShopProducts;