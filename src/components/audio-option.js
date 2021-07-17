import React from 'react';

const AudioOption = props => {
    const audioOption = props.audioOption;
    
    return (
        <li className="audio-option">
            {audioOption.name}
            <button className="delete-button">X</button>
        </li>
    )
}

export default AudioOption;