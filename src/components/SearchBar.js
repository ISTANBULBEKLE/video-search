import React, { useState } from "react";
// import useSWR from 'swr';
// import {fetcher} from '../api/videoSearch'

const SearchBar = ({ onFormSubmit }) => {
  // const {data, error} = useSWR(`URL${searchTerm}`, fetcher);
  const [searchTerm, setSearchTerm] = useState("");
  const [formSubmit, setFormSubmit] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmit(searchTerm);
    onFormSubmit(searchTerm);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="field">
          <label>Search for the video</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
