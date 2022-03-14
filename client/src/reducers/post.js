import {
  GET_POST,
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: false,
  error: {},
};

const getPost = createAction(GET_POST)
const getPosts = createAction(GET_POSTS)
const postError = createAction(POST_ERROR)
const updateLikes = createAction(UPDATE_LIKES)
const deletePost = createAction(DELETE_POST)
const addPost = createAction(ADD_POST)
const addComment = createAction(ADD_COMMENT)
const removeComment = createAction(REMOVE_COMMENT)

const postReducer = createReducer(initialState, (builder) => {

  builder
    .addCase(getPosts, (state, action) => {
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    })
    .addCase(getPost, (state, action) => {
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    })
    .addCase(addPost, (state, action) => {
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };
    })
    .addCase(deletePost, (state, action) => {
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload), // action.payload is id
        loading: false,
      };
    })
    .addCase(postError, (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    })
    .addCase(updateLikes, (state, action) => {
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === action.payload.id ? { ...post, likes: action.payload.likes } : post,
        ),
        loading: false,
      };
    })
    .addCase(addComment, (state, action) => {
      return {
        ...state,
        post: { ...state.post, comments: action.payload },
        loading: false,
      };
    })
    .addCase(removeComment, (state, action) => {
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(comment => comment._id !== action.payload),
        },
        loading: false,
      };
    })

})

export default postReducer;