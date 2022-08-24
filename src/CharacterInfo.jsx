import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import "./characterinfo.css"
import Info from './pages/Info';
import { useParams } from 'react-router-dom';

//back and recommended nav links


const CharacterInfo = () => {
    const {charId} = useParams()
    return (
        <>
            <Nav 
        backText="Back"
        recTo="#Recommended"
        recText="Recommended"
            />
            
            <Info 
            characterId={charId}/>
            <Footer />
        </>
    );
}

export default CharacterInfo;
