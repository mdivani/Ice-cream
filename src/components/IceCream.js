import React from 'react';

const IceCream = (props) => (
    <div className='wrapper--ice-cream'>
        <div className='image-container'>
            <img className='image-container__img' src='images/cone_empty.png' alt='ice cream' width='200' height='300' />
            <img 
                style={props.style}
                className='image-container__img' 
                src='images/cone_full.png' width='200' height='300'/>
        </div>
    </div>
);

export default IceCream;

