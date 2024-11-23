import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import "./Write.scss";

const Write = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [TOKEN, setToken] = useState("");

  // Add tag when space or enter is pressed
  const addTag = (e) => {
    e.preventDefault();
    if (e.keyCode === 32 || e.key === "Enter") {
      const tag = e.target.value.trim();
      if (tag && !tags.includes(tag.toLowerCase())) {
        setTags([...tags, tag.toLowerCase()]);
      }
      e.target.value = ""; // Clear input
    }
  };

  // Remove a specific tag
  const removeTag = (e) => {
    const tagToRemove = e.target.parentElement.id;
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("author", user.username); // Add author
    data.append("title", title); // Add title
    data.append("desc", desc); // Add description
    if (tags.length > 0) data.append("categories", JSON.stringify(tags)); // Add categories as a JSON string
    if (file) data.append("image", file); // Add image file

    try {
      const res = await axios.post(
        "https://healthgen-api-wt86.onrender.com/api/posts",
        data,
        {
          headers: {
            token: `Bearer ${TOKEN}`,
            "Content-Type": "multipart/form-data", // Required for file uploads
          },
        }
      );
      // Redirect to the newly created post
      window.location.replace("/posts/" + res.data._id);
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  // Set user token on mount
  useEffect(() => {
    if (user) {
      setToken(user.accessToken);
    }
  }, [user]);

  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt="post-file"
        />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput" title="add image">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="writeFormGroup">
          <div className="tagsWrapper">
            <h2>Tags</h2>
            <p>Press enter or space after each tag</p>
            <ul>
              {tags.map((tag) => (
                <li key={tag} id={tag}>
                  {tag}
                  <i className="uit uit-multiply" onClick={removeTag}>
                    X
                  </i>
                </li>
              ))}
              <input
                type="text"
                onKeyUp={addTag}
                disabled={tags.length >= 5}
                placeholder={
                  tags.length >= 5
                    ? "Maximum tags added"
                    : "Add tags and press Enter"
                }
              />
            </ul>
          </div>
        </div>
        <button
          className="writeSubmit"
          type="submit"
          title="publish"
        >
          Publish <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default Write;