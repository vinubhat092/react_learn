import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log("hhh", tags);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi friends am going to mumbai for vacation",
//     reactions: 2,
//     userID: "user-9",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "cleared btech",
//     body: "passed btech after enjou=ying 4 years",
//     reactions: 15,
//     userID: "user-12",
//     tags: ["engineering0", "Unbeleivable", "Graduating"],
//   },
// ];
const DEFAULT_POST_LIST = fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data); // Log the data to the console
    return data.posts; // Return the data to be used further
  })
  .catch((error) => {
    console.error("Error fetching data:", error); // Handle any errors that occur during the fetch
  });

export default PostListProvider;
