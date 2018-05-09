import React from 'react';
import { Link } from 'react-router-dom';
import Row from './Row';


const ContentPage = (props) => (
    <div className='wrapper--flavors'>
        <form onSubmit={props.handleSubmit}>
            <Row 
                handleSelectedFlavor={props.handleSelectedFlavor}
                handleNewFlavor={props.handleNewFlavor}
                flavors={props.flavors} 
                selectedFlavors={props.selectedFlavors}
                newFlavors={props.newFlavors}
                />
            <div className='row'>
                <h4 className='txt--title'>
                <Link to='/winwheel'>Check winWheel</Link>
                </h4>
                <button 
                    className='btn margin-vert-medium pos-right'>Save
                </button>
            </div>
        </form>
    </div>
);

export default ContentPage;