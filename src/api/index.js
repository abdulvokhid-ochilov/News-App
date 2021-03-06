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

export const addNewsLetter = async function (data) {
  try {
    const user = await axios.get(`${URL_SRV}/newsletter?email=${data.email}`);

    if (!Array.isArray(user.data) || !user.data.length) {
      const response = await axios({
        method: "POST",
        url: `${URL_SRV}/newsletter`,
        data: {
          email: data.email,
        },
      });
      return {
        newsletter: "added",
        email: response.data,
      };
    } else {
      return { newsletter: "failed" };
    }
  } catch (error) {
    throw error;
  }
};

export const getPostById = async function (id) {
  try {
    const response = await axios.get(`${URL_SRV}/posts/${id}`);

    return response.data;
  } catch (error) {
    return "404";
  }
};
