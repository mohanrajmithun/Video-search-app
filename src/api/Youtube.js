import axios from 'axios';

const KEY = 'AIzaSyA1b-_9xdlhUCtPxelhoiMg_LxVcdK0YIM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key:KEY,
        type: 'video'
    }

});