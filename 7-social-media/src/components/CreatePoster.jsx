import React from "react";

const CreatePoster = () => {
  return (
    <form className="create-post">
      <div class="mb-3">
        <label for="userId" class="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
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
        <textarea
          type="text"
          rows="4"
          class="form-control"
          id="title"
          placeholder="How many people reacted to this post"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePoster;
