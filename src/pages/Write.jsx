import {useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";

const Write = () => {
    const user = useSelector((state) => state.user.currentUser);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [tags, setTags] = useState([]);

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
        author: user.others.username,
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

        userRequest.post('/upload', data).then(res => {
          userRequest.post('/posts', newPost).then(res => {
            userRequest.post('/categories', newCategory);
            window.location.replace("/posts/" + res.data._id);
          }).catch(err => {
            console.log(err)
          })
        }).catch(err => {
          console.log(err)
        })
      }
    };
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