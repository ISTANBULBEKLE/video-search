import React from 'react';

const VideoDetail = ({selectedVideo}) => {

    if(!selectedVideo) return <div>Loading...</div>;

    return (
        <div>
           <div className="ui embed">
                <iframe 
                    src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} 
                    title="video player"
                />
           </div>
            <div className="ui segment">
                <h4 className="header">{selectedVideo.snippet.title}</h4>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;