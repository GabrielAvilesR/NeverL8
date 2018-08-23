import axios from 'axios';

export const getEvents = () => {
    return axios.get('/api/')
                .then(resp => {
                    console.log(resp)
                    return resp.data
                });
  };
  
export const addEvent = (event) => {
    return axios.post('/api/', event)
                .then(resp => {
                    console.log(resp)

                    return resp.data
                });
  };