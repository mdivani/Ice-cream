import React from 'react';

const UserInfo = (props) => (
    <div className='row'>
        <div className='col--user'>
            <p className='txt--flavor'>
                flavors to mark:<span className='txt--flavor-sub'>{props.credits}</span>
            </p>
        </div>
        <div className='col--user'>
            <p className='txt--flavor'>
                flavors credit: <span className='txt--flavor-sub'> {props.totalSelected} </span>
            </p>
        </div>
    </div>
)

export default UserInfo;