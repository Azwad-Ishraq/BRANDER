import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './Features.module.css'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import ParkIcon from '@mui/icons-material/Park';
import BookIcon from '@mui/icons-material/Book';

const Features = () => {

    const featuresArray = [
        {
            title: "Lovely Planet",
            icon: <PublicOutlinedIcon className={styles.icon}></PublicOutlinedIcon>
        },
        {
            title: "No More Cash",
            icon: <CreditScoreOutlinedIcon className={styles.icon}></CreditScoreOutlinedIcon>
        },
        {
            title: "It All About Nature",
            icon: <ParkIcon className={styles.icon}></ParkIcon>
        },
        {
            title: "Book Instead Of Pdf",
            icon: <BookIcon className={styles.icon}></BookIcon>
        },

    ]

    return (
        <Box className={styles.container} sx={{ mr: 3, ml: 3 }}>
            <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h6' color='primary'>
                FEATURES
            </Typography>
            <Typography sx={{ textAlign: 'center', fontWeight: 500 }} variant='h4'>
                A Few Of Features We Offer To This Lovely Planet And You
            </Typography>
            <Typography className={styles.subHeading} sx={{ textAlign: 'center', color: 'gray' }} variant='body1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At necessitatibus ratione eaque odio veritatis laudantium labore amet molestiae quis enim! Accusamus et, quo voluptas delectus cum illo nobis porro magnam.
            </Typography>

            <Grid sx={{ mt: 10 }} container spacing={10}>
                {
                    featuresArray.map(item =>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box className={styles.item}>
                                {item.icon}
                                <Box sx={{ ml: 3 }}>
                                    <Typography className={styles.title} variant='h5'>
                                        {item.title}
                                    </Typography>
                                    <Typography className={styles.desc} sx={{ color: 'gray' }} variant='body1'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium doloremque cupiditate officia sed eaque? Doloribus, itaque repellendus maiores dignissimos ea doloremque est, quod reprehenderit laudantium ipsam delectus quia quam. A.
                            </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    )
                }

            </Grid>
            <Button sx={{mt:8}} className={`button-orange-bg btn`} color="primary">READ MORE</Button>
        </Box>
    );
};

export default Features;