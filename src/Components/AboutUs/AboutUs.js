import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './AboutUs.module.css'
import bg from '../../Images/Header/bg.png'
const AboutUs = () => {
    return (
        <Container>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={12} md={6}>
                    <Box className={styles.gridItemOne}>
                        <Typography className={styles.heading} variant='body1' color='primary'>
                            ABOUT US
                        </Typography>
                        <Typography className={styles.subHeading} variant='h4' >
                            Flowers, Trees, Rivers, That Is Nature, That Is <span style={{color:'#ffb03a'}}>Life</span>
                        </Typography>
                        <Typography className={styles.desc} variant='body2' >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus tempore id laborum dolores nam unde mollitia aut distinctio est dolore ullam aliquam asperiores officia dolor, fugiat, maxime veniam dicta, nemo omnis! Doloremque perspiciatis adipisci deserunt optio, exercitationem provident vero numquam nobis tempora debitis reiciendis accusamus accusantium ratione? Veritatis minima architecto hic sequi assumenda alias nesciunt dolor! Molestiae officia, eos quis fuga aspernatur eveniet nulla porro, pariatur, excepturi minus soluta modi!
                        </Typography>
                    </Box>
                </Grid>
                <Grid style={{background: `url(${bg})`}} item xs={12} sm={12} md={6}>
                    <Box  className={styles.gridItemTwo}>
                    <Typography className={styles.gridItemTwoHeading} variant='h3' >
                        156K
                    </Typography>
                    <Typography className={styles.gridItemTwoSubHeading} variant='h6' >
                        CUSTOMER PER MONTH
                    </Typography>
                    </Box>
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default AboutUs;