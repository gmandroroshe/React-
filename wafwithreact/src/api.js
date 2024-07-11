const API_URL = "http://localhost/test/wp-json/wp/v2";

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  const data = await response.json();
  return data;
};
