import React from 'react';
import Nav from './components/Nav';
import Search from './components/Search';
import Intro from './pages/Intro';
import About from './pages/About';

const Main = () => {
    return (
        <>
        <Nav />
        <Intro />
        <Search />
        <About />
        </>
        
    );
}

export default Main;
