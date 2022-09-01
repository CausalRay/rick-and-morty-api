import React from 'react';

const Image = ({results}) => {
   let image;
   if(results) {
   image = results.map((elem, index) => {
        return (
            <img key={index} src={elem.image} className="info__wallpaper" alt=""></img>
        )
    })
   }
    
    return (
        <>
        {image}
        </>
    );
}

export default Image;
