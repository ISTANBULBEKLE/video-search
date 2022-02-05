import React, {useState} from 'react';
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import videoSearch  from '../api/videoSearch';



const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onFormSubmit = async (searchTerm) => {
        const searchResult = await videoSearch.get(`/search?term=${searchTerm}`);
            setVideos(searchResult.data.items);
            setSelectedVideo(searchResult.data.items[0]);
    }

    return (
        <div className="ui container">
            <div>
                <div>
                    <SearchBar  
                        onFormSubmit={onFormSubmit}
                    />
                </div>
                <div>
                    <VideoDetail 
                        selectedVideo={selectedVideo}
                    />
                    <VideoList 
                        videos={videos} 
                    />
                </div>
            </div>
        </div>
    );
}

export default App;