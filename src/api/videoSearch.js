import axios from 'axios'

    const URL = "https://www.googleapis.com/youtube/v3";
    const API_KEY= "AIzaSyDARxXBJQMwbMHULtpchK5mF137wem4Ggk";

    export default axios.create({
        baseURL: URL,
        params: {
            part: 'snippet',
            type: 'video',
            maxResults: 10,
            key: API_KEY,
        }
    });


// for useSWR package
// export const fetcher = (url) => axios.get(url).then(res => res.data)