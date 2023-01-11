import React from 'react';
// import PropTypes from 'prop-types';
import SongList from "./components/SongList";

Album.propTypes = {

};

function Album(props) {
    const songList = [
        {
            id: 1,
            name: 'Đường Về Quê',
            url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/f/d/b/1fdbad2d8131ccbb6365fbb928953e0c.jpg',
        },
        {
            id: 2,
            name: 'Tết Việt: Zing Choice',
            url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/4/8/9/f48965be2a649919082c88f97e763b68.jpg',
        },
        {
            id: 3,
            name: 'Xuân Lắng Đọng',
            url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/1/74115c2f066171ef5c7df20d6704468c.jpg',
        },
        {
            id: 4,
            name: 'Flow Này Mượt Phết',
            url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/8/a/f/c8af23deb547e376572914b1fcefa83b.jpg',
        },
    ];

    return (
        <div>
            <SongList songList={songList}/>
        </div>
    );
}

export default Album;