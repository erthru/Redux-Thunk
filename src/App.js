import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts, getPost } from "./store/actions/postAction";
import Post from "./components/Post";

const App = (props) => {
  useEffect(() => {
    props.getPosts();
    props.getPost("1");
  }, []);

  return (
    <div>
      <label>Get Single Post</label>
      <Post title={props.post.title} body={props.post.body}/>

      <br />
      <br />
      <br />

      <label>Get All Posts</label>
      {props.posts.map((post) => (
        <Post title={post.title} body={post.body} key={post.id}/>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  post: state.post.post,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
  getPost: (id) => dispatch(getPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
