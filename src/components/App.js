import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import videoSearch from "../api/videoSearch";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  //Just when app started to have a default search term  to be set
  useEffect(() => {
    onFormSubmit("moon");
  }, []);

  const onFormSubmit = async (searchTerm) => {
    const searchResult = await videoSearch.get(`/search?term=${searchTerm}`);
    setVideos(searchResult.data.items);
    setSelectedVideo(searchResult.data.items[0]);
  };

  const onVideoSelect = (video) => {
    console.log("This is onVideoSelect video ", video);
    setSelectedVideo(video);
  };
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onFormSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
