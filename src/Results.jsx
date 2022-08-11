import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Filter from './pages/Filter';

const Results = () => {

    return (
        <>
           <Nav 

                   firstTo="#Character" 
                   firstText="Character"
           
                  secondTo="#Episode" 
                  secondText="Episode"
           
                   thirdTo="#Location" 
                   thirdText="location"
                   
           />
           <Filter />
           <Footer />
        </>
    );
}

export default Results;
