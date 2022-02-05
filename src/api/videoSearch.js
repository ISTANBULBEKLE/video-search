import axios from "axios";

const URL = "https://www.googleapis.com/youtube/v3";
const REACT_APP_API_KEY = "AIzaSyDARxXBJQMwbMHULtpchK5mF137wem4Ggk";
// const REACT_APP_API_KEY = process.env.API_KEY;

export default axios.create({
  baseURL: URL,
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: REACT_APP_API_KEY,
  },
});

// for useSWR package
// export const fetcher = (url) => axios.get(url).then(res => res.data)
