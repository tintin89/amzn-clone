import axios from 'axios'

const instance = axios.create({
    baseURL:"http://localhost:5001/online-shopping-a4c35/us-central1/api" //API Cloud Functions URL
});

export default instance