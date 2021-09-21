import axios from "axios";
const URL_SRV = "http://localhost:8000";

export const getPosts = async (
  homePosts,
  page = 1,
  order = "asc",
  limit = 10
) => {
  try {
    const response = await axios.get(
      `${URL_SRV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`
    );

    return {
      posts: homePosts.posts
        ? [...homePosts.posts, ...response.data]
        : response.data,
      page: page,
      end: response.data.length === 0 ? true : false,
    };
  } catch (error) {
    throw error;
  }
};
