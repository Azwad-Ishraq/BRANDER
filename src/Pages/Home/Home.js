import React from 'react';
import Answers from '../../Components/Answers/Answers';
import Features from '../../Components/Features/Features';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Life from '../../Components/Life/Life';
import Navbar from '../../Components/Navbar/Navbar';
import Religion from '../../Components/Religion/Religion';
import Team from '../../Components/Team/Team';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Life></Life>
            <Answers></Answers>
            <Religion></Religion>
            <Team></Team>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
};

export default Home;