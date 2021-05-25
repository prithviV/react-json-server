import axios from 'axios';
const localhost = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.response.use((response) => {
  return response;
},async (error) => {

  if((error.config.url).indexOf('addAttributes') >= 0) {
    return await localhost.post('/addAttributes', error.config.payload);
  }

  if((error.config.url).indexOf('attributes') >= 0) {
    return await localhost.get('/addAttributes', error.config.payload);
  }
  return {error: 'url not configured'}
})

export default instance;