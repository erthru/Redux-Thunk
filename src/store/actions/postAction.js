import { GET_POSTS, GET_POST } from "../types";

export const getPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_POSTS,
        payload: data,
      });
    })
    .catch((e) => {
      console.error("getPosts() error: " + e);
    });
};

export const getPost = (id) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_POST,
        payload: data,
      });
    })
    .catch((e) => {
      console.error("getPosts() error: " + e);
    });
};
