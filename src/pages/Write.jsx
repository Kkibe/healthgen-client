import axios from "axios";
import {useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const Write = () => {
    const {user}= useContext(UserContext);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [tags, setTags] = useState([]);
    const [TOKEN, setToken] = useState('');

    const addTag = (e) => {
      e.preventDefault()
      if(e.keyCode === 32) {
        if(e.target.value !== "" && tags.indexOf(e.target.value.split(' ').join('').toLowerCase()) === -1) {
           setTags([...tags, e.target.value.split(' ').join('')]);
        e.target.value = "";
        } else {
          e.target.value = "";
          return;
        }
      } 
    }
    const removeTag = async (e) => {
      let item = e.target.parentElement.id
      var filtered = tags.filter((value) => {
        return value !== item
      })
      setTags(filtered)
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
        author: user.username,
        title,
        desc,
        categories: tags.length > 0 ? tags : null
      };

      const newCategory = {
        name: tags[1]
      }

      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.img = filename;

        const options1 = {
          method: 'POST',
          url: 'https://healthgen-api.onrender.com/api/upload',
          headers: {
            token: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: data
        };

        const options2 = {
          method: 'POST',
          url: 'https://healthgen-api-wt86.onrender.com/api/posts',
           headers: {
            token: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: newPost 
        };

        const options3 = {
          method: 'POST',
          url: 'https://healthgen-api-wt86.onrender.com/api/categories',
           headers: {
            token: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: newCategory
        };

        axios.request(options1).then(res => {
          axios.request(options2).then(res => {
            axios.request(options3);
            window.location.replace("https://healthgen-api-wt86.onrender.com/api/posts/" + res.data._id);
          }).catch(err => {
            console.log(err)
          })
        }).catch(err => {
          console.log(err)
        })
      }
    };

    useEffect(() => {
      setToken(user.accessToken)
    }, [user]);
    return (
    <div className="write">
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="post-file" />
        )}
        <form className="writeForm" >
          <div className="writeFormGroup">
            <label htmlFor="fileInput" title="add image">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" onChange={e=>setDesc(e.target.value)}></textarea>
          </div>
          <div className="writeFormGroup ">
            <div className="tagsWrapper">
                <h2>Tags</h2>
                <p>Press enter or add a comma after each tag</p>
                <ul>
                    {
                      tags && tags.map(tag => {
                        return <li key={tag} id={tag}>{tag}<i className="uit uit-multiply" onClick={removeTag}>x</i></li>
                      })
                    }
                    <input type="text" onKeyUp={addTag} disabled={tags.length >= 5 ? true : false}/>
                </ul>
                <div className="details">
                  <p> 5 tags are remaining</p>
                  <button>Remove all</button>
                </div>
            </div>
          </div>
          <button className="writeSubmit" type="submit" onClick={handleSubmit} title="publish">Publish <i className="fas fa-paper-plane"></i></button>
        </form>
      </div>
    );
}

export default Write;
