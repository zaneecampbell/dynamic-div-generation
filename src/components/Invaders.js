import React from 'react';
import Invader from './Invader';

const Invaders = (props) => (
    <div className='container'>
        {
            props.id.map((uniqueId, index) => (
                <Invader key={uniqueId} />
            ))
        }
    </div>
);

export default Invaders;


