import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/'
// If you get origin error from API, it's because my API only works in my blog: https://blog.pycloud.space

export const getRequest = async (url, config) => {

  const response = await axios.get(`${BASE_URL}${url}`, config);

  return response;
}




export const postRequest = async (url, payload, config) => {
  const response = await axios.post(`${BASE_URL}${url}`, payload, config);

  return response;
}



export const delRequest = async (url) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
  };

  const response = await axios.delete(`${BASE_URL}${url}`, config);

  return response;
}
