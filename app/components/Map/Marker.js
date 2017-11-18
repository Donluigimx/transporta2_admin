import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Marker = ({bounce, pulse, clickAction, busStopId}) => (
    <div style={{cursor: 'pointer'}} onClick={ () => clickAction(busStopId)}>
        <div className={`pin ${bounce ? 'bounce':''}`}/>
        {pulse
            ?<div className='pulse'/>
            : ''
        }
    </div>
);

Marker.propTypes = {
    bounce: PropTypes.bool.isRequired,
    pulse: PropTypes.bool.isRequired,
    clickAction: PropTypes.func,
    busStopId: PropTypes.string,
};

export default Marker;