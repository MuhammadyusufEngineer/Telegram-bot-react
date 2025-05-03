import axios from "axios";

async function getData() {
  try {
    const response = await axios.get(
      "https://telegrambotdjango.onrender.com/api/categories/",
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch data:",
      error.response ? error.response.data : error.message
    );
    return []; // Return an empty array or handle the error as needed
  }
}

export default getData;
// import axios from "axios";

// const API_URL = "http://127.0.0.1:8000/api/categories/";

// async function getShopData() {
//   try {
//     const response = await axios.get(API_URL, {
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true,
//     });
//     console.log("Response: ", response);
//     console.log("Data: ", response.data);
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Failed to fetch shop data:",
//       error.response ? error.response.data : error.message
//     );
//     return { categories: [], products: [] };
//   }
// }

// export default getShopData;
