import React from 'react';
import styles from './Header.module.css'
import bg from '../../Images/Header/bg.png'
import triangle from '../../Images/Header/triangle.png'
import { Button, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Testimonial from '../Testimonial/Testimonial';
const Header = () => {
    return (
        <header style={{background: `url(${bg})`}} className={styles.container}>
            <div className={styles.headerBody}>
                <img className={styles.triangleImg} src={triangle} alt=""/>

                <div className={styles.headerTexts}>
                    <Typography className={styles.heading} variant='h2'>
                        THE <span className={styles.orangeHeading}>BEST</span> WAY YOU
                        CAN MAKE <span className={styles.orangeHeading}>MONEY</span>
                    </Typography>
                    <Typography className={styles.subHeading} variant='h6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit. Odit aperiam omnis porro fuga error at suscipit assumenda ipsam.
                    </Typography>
                    <span className={styles.headerBtns}>
                    <Button className={`button-orange-bg btn`} color="primary">GET STARTED</Button>
                    <Link className={styles.viewMoreBtn} to='/'>OR JUST SIMPLY VIEW MORE <ArrowDownwardIcon></ArrowDownwardIcon></Link>
                    </span>
                </div>
            </div>

            <Testimonial></Testimonial>
        </header>
    );
};

export default Header;