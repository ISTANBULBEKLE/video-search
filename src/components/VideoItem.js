import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    console.log("This is VideoItem video ", video);
    
    const handleVideoSelect = () => {
        onVideoSelect(video);
    }
    return (
        <div 
            onClick={() => handleVideoSelect(video)} 
            className="video-item item"
        >
            <img 
                className="ui image"
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title}
                    
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
           
        </div>
    );
}

export default VideoItem;