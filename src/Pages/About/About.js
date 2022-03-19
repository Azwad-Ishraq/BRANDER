import React from 'react';
import AboutHeader from '../../Components/AboutHeader/AboutHeader';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Navbar from '../../Components/Navbar/Navbar';
import Products from '../../Components/Products/Products';
import Support from '../../Components/Support/Support';
import Team from '../../Components/Team/Team'
import Footer from '../../Components/Footer/Footer'

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AboutHeader></AboutHeader>
            <AboutUs></AboutUs>
            <Products></Products>
            <Support></Support>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default About;