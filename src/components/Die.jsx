import React from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Die({ face, rolling }) {
    return (
        <div>
            <FontAwesomeIcon
                icon={['fas', `fa-dice-${face}`]}
                className={`Die ${rolling ? 'Die-shaking' : ''}`}
            />
        </div>
    );
}

export default Die;