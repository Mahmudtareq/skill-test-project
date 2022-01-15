import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <MenuBar></MenuBar>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;