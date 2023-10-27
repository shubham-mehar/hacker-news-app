const HN_API_BASE_URL = 'http://hn.algolia.com/api/v1';

const hnApi = {
  search: async (query) => {
    const response = await fetch(`${HN_API_BASE_URL}/search?query=${query}`);
    const data = await response.json();
    return data.hits;
  },

  getPost: async (postId) => {
    const response = await fetch(`${HN_API_BASE_URL}/items/${postId}`);
    const data = await response.json();
    return data;
  },
};

export default hnApi;
