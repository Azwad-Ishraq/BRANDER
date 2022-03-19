import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ShopHeader from '../../Components/ShopHeader/ShobHeader'
import ShopProducts from '../../Components/ShopProducts/ShopProducts';
import Support from '../../Components/Support/Support'
import Footer from '../../Components/Footer/Footer'
const Shop = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ShopHeader></ShopHeader>
            <ShopProducts></ShopProducts>
            <Support></Support>
            <Footer></Footer>
        </div>
    );
};

export default Shop;