import axios from 'axios';

const instance=axios.create({
    baseURL:'http://52.66.205.197:5000/react'
})

export default instance;