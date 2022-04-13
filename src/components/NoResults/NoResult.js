import React from 'react'
import './NoResult.css';

function NoResult(props) {
    return (
        <div className="noResult">
            <p className="noResult__text">{props.text}</p>
        </div>
    );
}

export default NoResult;