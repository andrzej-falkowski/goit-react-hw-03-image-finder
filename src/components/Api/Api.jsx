import axios from "axios";

const apiKey = '43601558-493cea9937d74fa86e08084b6';

export default function searchImages(query = "", pageNum = 1) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${pageNum}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    // const res = response
    .then(response => response.data.hits)
    // .finally(console.log(response))
};

// searchImages = async () => {
//   const query = `react&page=${this.state.currentPage}`;
//   try {
//     const articles = await api.fetchArticlesWithQuery(query)
//     this.setState({ articles })
//   } catch (error) {
//     this.setState({ error })
//   } finally {
//     this.setState({ isLoading: false })
//   }
// }

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

