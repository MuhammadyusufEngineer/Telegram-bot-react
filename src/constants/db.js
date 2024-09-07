import axios from 'axios'

async function getData() {
  try {
    const response = await axios.get('https://muhammadyusufengineer.pythonanywhere.com/api/categories/')
    return response.data
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return []; // Return an empty array or handle the error as needed
  }
}

export default getData