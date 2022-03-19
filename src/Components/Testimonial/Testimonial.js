import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from './Testimonial.module.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Testimonial = () => {

    const [flower, setFlower] = useState(10);

    const flowers = [
        {
            name: 'Rose(Germany)',
            value: 10,
            count: 30000,
            price: 365
        },
        {
            name: 'Aster',
            value: 20,
            count: 43000,
            price: 725
        },
        {
            name: 'Azalea',
            value: 30,
            count: 29000,
            price: 530
        },
        {
            name: 'Buttercup',
            value: 40,
            count: 35000,
            price: 680
        },
    ]

    // console.log(flowers.find(obj => obj.value === flower))

    const handleChange = (event) => {
        setFlower(event.target.value);
    };

    return (
        <Box className={styles.container}>

            <div className={styles.item}>
                <Typography className={styles.itemTitle} variant='h5'>
                    WHAT KIND?
                </Typography>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Flower</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"

                        value={flower}
                        label="Flower"
                        onChange={handleChange}
                    >
                        {
                            flowers.map(item => <MenuItem value={item.value}>{item.name}</MenuItem>)
                        }

                    </Select>
                </FormControl>
            </div>

            <div className={styles.item}>
                <Typography className={styles.itemTitle} variant='h5'>
                    HOW MANY?
                </Typography>

                <div className={styles.itemBox}>
                    {/* flowers.find(obj => obj.value === flower).count */}
                    <FormControl fullWidth>
                        
                        <Select
                            disabled
                            id="demo-simple-select"
                            value={flowers.find(obj => obj.value === flower).value}
                        >
                            {
                                flowers.map(item => <MenuItem value={item.value}>{item.count}</MenuItem>)
                            }
                            
                        </Select>
                    </FormControl>
                </div>

            </div>

            <div className={styles.item}>
                <Typography className={styles.itemTitle} variant='h5'>
                    PRICE
                </Typography>

                <FormControl fullWidth>
                        
                        <Select
                            disabled
                            id="demo-simple-select"
                            value={flowers.find(obj => obj.value === flower).value}
                        >
                            {
                                flowers.map(item => <MenuItem value={item.value}>{item.price}</MenuItem>)
                            }
                            
                        </Select>
                    </FormControl>
            </div>

        </Box>
    );
};

export default Testimonial;