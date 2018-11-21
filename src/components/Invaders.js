import React from 'react';
import Invader from './Invader';
import Grid from '@material-ui/core/Grid';

const Invaders = (props) => (
    <div className='container'>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
            {
                props.id.map((uniqueId, index) => (
                    <Invader key={uniqueId} />
                ))
            }
        </Grid>
    </div>
);

export default Invaders;


