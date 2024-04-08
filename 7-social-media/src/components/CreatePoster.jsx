import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePoster = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value
    const postTitle = postTitleElement.current.value
    const postBody = postBodyElement.current.value
    const reactions = reactionsElement.current.value
    const tags = tagsElement.current.value.split(' ') 
    addPost(userId,postTitle,postBody,reactions,tags)
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="userId" class="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          class="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          class="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>
      <div class="mb-3">
        <label for="body" class="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          class="form-control"
          id="title"
          placeholder="Tell us more about it"
        />
      </div>
      <div class="mb-3">
        <label for="reactions" class="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          class="form-control"
          id="title"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div class="mb-3">
        <label for="tags" class="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          class="form-control"
          id="tags"
          placeholder="Please enter your tags using space"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePoster;
