import React from 'react';
import Characters from './Characters';
import "./datalist.css"
import Sorter from './Sorter';

const DataList = () => {
    return (
        <div className='datalist'>
            <div className="container">
                    <div className="data__wrapper">
                        <Sorter />
                        <Characters />
                    </div>
                </div>
            </div>
    );
}

export default DataList;
