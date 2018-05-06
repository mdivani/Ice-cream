import React from 'react';
import Checked from './Checked';

const Row = (props) => (
    <div className='row'>
    {    
    props.flavors.length > 0 && props.flavors.map((flavorTitle) => {
        return (
            <div key={flavorTitle.name} className='col--flavor'>
                <h3 className='txt--title'>{flavorTitle.name}</h3>
                {
                    flavorTitle.options.length > 0 && flavorTitle.options.map((flavor) => {
                    const selectedFlavor = props.selectedFlavors.filter((selectedFlavor) => {
                        return selectedFlavor.flavor === flavor;
                    })[0];

                    const selected = selectedFlavor && selectedFlavor.selected || 0;
                    const isSelected = selectedFlavor ? 'txt--selected' : '';
                    return <p 
                            key={flavor} 
                            className={`txt--flavor ${isSelected}`}
                            onClick={() => props.handleFlavorSelect({flavor, selected})}
                            >{flavor} <Checked 
                                        selected={selected} 
                                         /></p>
                    })
                }
            </div>
        )
    })
    }
    </div>
);

export default Row;