import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Marker = props => (
    <div style={{cursor: 'pointer'}}>
        <div className={`pin ${props.bounce ? 'bounce':''}`}/>
        {props.pulse
            ?<div className='pulse'/>
            : ''
        }
    </div>
);

Marker.propTypes = {
    bounce: PropTypes.bool.isRequired,
    pulse: PropTypes.bool.isRequired,
};

export default Marker;