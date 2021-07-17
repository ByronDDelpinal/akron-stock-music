import React from 'react';

import AudioOption from './audio-option'

const AudioList = props => {
    return (
        <ul className="audio-list">
            {props.audioOptions.map(audioOption => (
                <AudioOption audioOption={audioOption} />
            ))}
        </ul>
    )
}

export default AudioList;