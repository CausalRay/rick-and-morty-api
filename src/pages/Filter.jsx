import React from 'react';
import Input from '../components/Input';
import "./filter.css"


const Filter = () => {
    return (
        <div className='filter'>
            <div className="container">
                <div className="row">
                    <Input />
                </div>
            </div>
        </div>
    );
}

export default Filter;
