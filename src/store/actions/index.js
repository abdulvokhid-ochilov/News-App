import * as api from "../../api";
import { GET_POSTS, ADD_NEWSLETTER, CLEAR_NEWSLETTER } from "../types";

export const getPosts = (homePosts, page, order, limit) => ({
  type: GET_POSTS,
  payload: api.getPosts(homePosts, page, order, limit),
});

export const addNewsLetter = (data) => ({
  type: ADD_NEWSLETTER,
  payload: api.addNewsLetter(data),
});

export const clearNewsLetter = () => ({
  type: CLEAR_NEWSLETTER,
  payload: { newsletter: false, email: [] },
});
