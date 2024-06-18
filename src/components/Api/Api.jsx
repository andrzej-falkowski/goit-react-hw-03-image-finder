import axios from "axios";

const apiKey = '43601558-493cea9937d74fa86e08084b6';

export default function searchImages({ searchQuery = '', pageNum = 1 }) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${pageNum}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

// export const searchImages = async (searchQuery, pageNum) => {
//   const response = await axios.get('https://pixabay.com/api/', {}
//   const params = new URLSearchParams({
//     key: apiKey,
//     orientation: 'horizontal',
//     image_type: 'photo',
//     safesearch: true,
//     per_page: 12,
//     page: pageNum,
//     q: searchQuery,
//   });
// }

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

