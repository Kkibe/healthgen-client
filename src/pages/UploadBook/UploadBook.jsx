import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../UserContext';
import './UploadBook.scss';

export default function UploadBook() {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [img, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [desc, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [TOKEN, setToken] = useState('');

  // File size validation function
  const fileSizeValidation = (e) => {
    const file = e.target.files[0];
    if (file && file.size >= 2 * 1024 * 1024) {
      alert("JPG images of maximum 2MB");
      return;
    }
  };

  const addCategory = (e) => {
    e.preventDefault();
    const category = e.target.value.trim();
    if (e.keyCode === 32 && category && categories.indexOf(category.toLowerCase()) === -1) {
      setCategories([...categories, category]);
      e.target.value = "";
    }
  };

  const removeCategory = (e) => {
    const item = e.target.parentElement.id;
    const filtered = categories.filter((value) => value !== item);
    setCategories(filtered);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("author", user.username);
    data.append("title", title);
    data.append("desc", desc);
    if (file) data.append("file", file);
    if (categories.length > 0) data.append("categories", JSON.stringify(categories));
    if (img) data.append("image", img);

    try {
      const res = await axios.post(
        "https://healthgen-api-wt86.onrender.com/api/books",
        data,
        {
          headers: {
            token: `Bearer ${TOKEN}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.replace("/books/" + res.data._id);
    } catch (err) {
      console.error("Error creating post:", err);
      alert('Something went wrong, please try again later.');
    }
  };

  useEffect(() => {
    setToken(user.accessToken);
    return () => {
      if (img) URL.revokeObjectURL(img);
    };
  }, [user, img]);

  return (
    <div className='uploadBook'>
      <form onSubmit={handleSubmit}>
        <h3>UPLOAD A BOOK</h3>
        <input
          type="text"
          placeholder="Title"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div className="label">
          <label htmlFor="fileInput" title="add-image">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <span> Add Image </span>
        </div>
        <input
          type="file"
          className="input"
          id="fileInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            setImage(e.target.files[0]);
            fileSizeValidation(e); // Call file size validation
          }}
          required
        />
        {img && <img src={URL.createObjectURL(img)} alt="Preview" />}
        <input
          type="file"
          className="input"
          onChange={(e) => setFile(e.target.files[0])}
          accept="application/pdf,.csv,.doc,.docx,.doc,.odt,.text,.txt,.rtf,.wps,.wks,.wpd, application/vnd.ms-excel"
          required
        />
        <textarea
          id="message"
          rows="4"
          placeholder="Write a description about your file"
          value={desc}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div className="tagsWrapper">
          <h2>Categories</h2>
          <p>Press enter or add a comma after each category</p>
          <ul>
            {categories.map((category) => (
              <li key={category} id={category}>
                {category}
                <i
                  className="uit uit-multiply"
                  onClick={removeCategory}
                  title="remove"
                >
                  x
                </i>
              </li>
            ))}
          </ul>
          <input
            type="text"
            onKeyUp={addCategory}
            disabled={categories.length >= 5}
          />
        </div>
        <div className="details">
          <p>{5 - categories.length} tags remaining</p>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setCategories([]);
            }}
          >
            Remove all
          </button>
        </div>
        <button type="submit" title="submit">
          PUBLISH
        </button>
      </form>
    </div>
  );
}
