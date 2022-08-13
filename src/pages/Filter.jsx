import React, { useEffect } from 'react';
import DataList from '../components/DataList';
import Input from '../components/Input';
import "./filter.css"


const Filter = () => {
    
    useEffect(() => {
        document.querySelector(".input").classList.add("new__page")
    }, [])

    return (
        <div className='filter'>
            <div className="container filter__container">
                <div className="filter__row row">
                    <Input 
                    
                    />
                    <DataList />
                </div>
            </div>
        </div>
    );
}

export default Filter;
