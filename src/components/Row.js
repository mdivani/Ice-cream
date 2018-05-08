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
                    const newFlavor = props.newFlavors.filter((newFlavor) => {
                        return newFlavor.flavor === flavor;
                    })[0];

                    const isSelected = !!selectedFlavor;
                    const isNew = !!newFlavor;
                    const selected = isSelected ? selectedFlavor.selected || 0 :
                     isNew ? newFlavor.selected || 0 : 0;
                    const highlight = isNew ? 'txt--selected' : '';
                    return isSelected ? <p 
                            key={flavor} 
                            className={`txt--flavor txt--selected`}
                            onClick={() => props.handleSelectedFlavor({flavor, selected, isSelected})}
                            >{flavor} <Checked 
                                        selected={selected} 
                                         /></p> : <p 
                                         key={flavor} 
                                         className={`txt--flavor ${highlight}`}
                                         onClick={() => props.handleNewFlavor({flavor, selected, isNew})}
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