import React from 'react';
import Row from './Row';


const ContentPage = (props) => (
    <div className='wrapper--flavors'>
        <Row 
            handleFlavorSelect={props.handleFlavorSelect}
            flavors={props.flavors} 
            selectedFlavors={props.selectedFlavors}/>
        <div className='row'>
            <button className='btn margin-vert-medium pos-right'>Save</button>
        </div>
    </div>
);

export default ContentPage;