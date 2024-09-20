import axios from 'axios'

async function getData() {
  try {
    const response = await axios.get('http://muhammadyusufengineer.pythonanywhere.com/api/categories/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    })
    return response.data
  } catch (error) {
    console.error('Failed to fetch data:', error.response ? error.response.data : error.message);
    return []; // Return an empty array or handle the error as needed
  }
}

export default getData 