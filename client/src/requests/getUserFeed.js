import axios from 'axios'
export default async function () {
    try {
        const response = await axios.get('/api');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    
}