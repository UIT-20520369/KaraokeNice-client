import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

SongList.propTypes = {
    songList: PropTypes.array,
};

SongList.defaultProps = {
    songList: [],
}

function SongList({songList}) {
    return (
        <ul>
            {songList.map(song => (
                <>
                    <li key={song.id}>
                        <img src={song.url} alt='Hình minh họa'/>
                        <p>{song.name}</p>
                    </li>
                </>
            ))}
        </ul>
    );
}

export default SongList;