import React from 'react';
import Nav from './components/Nav';
import Search from './pages/Search';
import Intro from './pages/Intro';
import About from './pages/About';
import Footer from './components/Footer';

const Main = () => {
    return (
        <>
        <Nav 

       secondTo="#About" 
       secondText="About"

        thirdTo="#SearchPage" 
        thirdText="Search"
        
        />
        <Intro />
        <Search />
        <About />
        <Footer />
        </>
        
    );
}

export default Main;
