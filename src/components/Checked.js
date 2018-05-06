import React from 'react';

const Checked = (props) => {
    const icons = [];
    for(let i = 0; i < props.selected; i++) {
        icons[i] = (<i key={i} className='icon-check'>&#x2713;</i>)
    }

    return (
        <span>
            {icons}
        </span>
    )
}

export default Checked;