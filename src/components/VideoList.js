import React from 'react';

const VideoList = ({videos}) => {
  
    console.log("This is VideoList videos ", videos);

    const renderedVideos = videos.map((video) => {
        return(
            <div className="ui card">
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                </div>
            </div>
        )
        });
    return (
        <div>
        {renderedVideos}
        </div>
    );
}

export default VideoList;