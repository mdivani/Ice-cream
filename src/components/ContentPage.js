import React from 'react';
import Row from './Row';
import UserInfo from './UserInfo';


const ContentPage = (props) => (
    <div className='wrapper--flavors'>
        <UserInfo 
            totalSelected={props.totalSelected}
            credits={props.credits} />
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