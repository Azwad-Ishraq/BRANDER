import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styles from './Team.module.css'
import personOne from '../../Images/Team/1.jpg'
import personTwo from '../../Images/Team/2.jpg'
import personThree from '../../Images/Team/3.jpg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
const Team = () => {


    const teamMembers = [
        {
            name: 'Monica Morgan',
            role: 'Web Developer',
            address: 'London England',
            twitter: 'mcmorgan',
            img:personOne
        },
        {
            name: 'Diego Salamanca',
            role: 'UI Designer',
            address: 'Madrid,Spain',
            twitter: 'diegoooo',
            img:personTwo
        },
        {
            name: 'Jessica Winchester',
            role: 'CEO',
            address: 'New York, Usa',
            twitter: 'jscwin1992',
            img:personThree
        },

    ]


    return (
        <Box className={styles.container}>
            <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h6' color='primary'>
                OUR TEAM
            </Typography>

            <Typography className={styles.subHeading} sx={{ textAlign: 'center', fontWeight: 500 }} variant='h4'>
                Meet The Guys Who Created This Amazing Company
            </Typography>

            <Box className={styles.teamCards}>
                {
                    teamMembers.map(item => 
                        <div className={styles.card}>
                            <img className={styles.personImg} src={item.img} alt="" />
                            <Typography className={styles.nameText} sx={{ fontWeight: 600 }} variant='h5'>
                                {item.name}
                        </Typography>
                            <Typography className={styles.roleText} sx={{ fontWeight: 200 }} variant='h5'>
                                {item.role}
                        </Typography>
                            <Typography className={styles.addressText} sx={{ fontWeight: 200 }} variant='h5'>
                                <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                            {item.address}
                        </Typography>
                            <Button className={`button-orange-bg btn ${styles.twitterBtn}` } color="primary">
                                <TwitterIcon></TwitterIcon>
                            @{item.twitter}
                        </Button>
                        </div>
                    )
                }
            </Box>
        </Box>
    );
};

export default Team;