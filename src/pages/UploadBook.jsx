import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../UserContext';

export default function UploadBook() {
  const {user}= useContext(UserContext);
    const [title, setTitle] = useState(null);
    const [img, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const [desc, setDescription] = useState(null);
    const [categories, setCategories] = useState([]);
    const [TOKEN, setToken] = useState('');

      function fileSizeValidation (e) {
        var file = e.target.files[0];
        if(file.size>=2*1024*1024) {
            alert("JPG images of maximum 2MB");
            return;
        }
      }

      const addCategory = (e) => {
        e.preventDefault()
        if(e.keyCode === 32) {
          if(e.target.value !== "" && categories.indexOf(e.target.value.split(' ').join('').toLowerCase()) === -1) {
          setCategories([...categories, e.target.value.split(' ').join('')]);
          e.target.value = "";
          } else {
            e.target.value = "";
            return;
          }
        } 
      }
      const removeCategory = async (e) => {
        let item = e.target.parentElement.id
        var filtered = categories.filter((value) => {
          return value !== item
        })
        setCategories(filtered)
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = {
          author: user.others.username,
          title,
          desc,
          categories: categories.length > 0 ? categories : null
        };
  
        if (file) {
          const fileData = new FormData();
          const filename = Date.now() + file.name;
          fileData.append("name", filename);
          fileData.append("file", file);
          newBook.file = filename;

          const options1 = {
            method: 'POST',
            url: 'https://healthgen-api.onrender.com/api/upload',
            headers: {
              token: `Bearer ${TOKEN}`,
              'Content-Type': 'application/json'
            },
            body: fileData
          };
 
  
          const options3 = {
            method: 'POST',
            url: 'https://healthgen-api.onrender.com/api/books',
             headers: {
              token: `Bearer ${TOKEN}`,
              'Content-Type': 'application/json'
            },
            body: newBook
          };
          if (img) {
            const data = new FormData();
            const filename = Date.now() + img.name;
            data.append("name", filename);
            data.append("file", img);
            newBook.img = filename;

             
          const options2 = {
            method: 'POST',
            url: 'https://healthgen-api.onrender.com/api/upload',
             headers: {
              token: `Bearer ${TOKEN}`,
              'Content-Type': 'application/json'
            },
            body: data
          };

            axios.request(options1).then(res => {
              axios.request(options2).then(res => {
                axios.request(options3).then(res => {
                  window.location.replace("/books/" + res.data._id);
                }).catch(err => {
                  console.log(err)
                })
              }).catch(err => {
                console.log(err);
              })
            }).catch(err => {
              console.log(err)
            })
          }
        }
      };
      useEffect(() => {
        setToken(user.accessToken)
      }, [user]);
  return (
    <div className='uploadBook'>
            <form>
                
                <h3>UPLOAD A BOOK</h3>
                <input type="text" placeholder="Title" className="input" autoFocus={true} onChange={e=>setTitle(e.target.value)} required/>
                <div className="label">
                    <label htmlFor="fileInput" title="add-image"><i className="writeIcon fas fa-plus"></i> </label>
                    <span> Add Image </span>
                </div>
                
                <input type="file" className="input" id="fileInput" accept="image/*" style={{display : "none"}}  onChange={e=>setImage(e.target.files[0])} required/>
                <img src={img && URL.createObjectURL(img)}></img>
                <input type="file" size='small' className="input"   onChange={(e) => setFile(e.target.files[0])} accept="application/pdf,.csv,.doc,.docx,.doc,.odt,.text,.txt,.rtf,.wps,.wks,.wpd, application/vnd.ms-excel" required/>
                <textarea  id="message" rows="4" placeholder='Write a description about your file' onChange={e=>setDescription(e.target.value)} required></textarea>
                <div className="tagsWrapper">
                    <h2>categories</h2>
                    <p>Press enter or add a comma after each category</p>
                    <ul>
                        {
                            categories && categories.map(category => {
                                return <li key={category} id={category}>{category}<i className="uit uit-multiply" onClick={removeCategory} title='remove'>x</i></li>
                            })
                        }
                        <input type="text" onKeyUp={addCategory} disabled={categories.length >= 5 ? true : false}/>
                    </ul>
                    <div className="details">
                        <p> 5 tags are remaining</p>
                        <button onClick={(e) => {
                            e.preventDefault();
                            setCategories([])
                        }}>Remove all</button>
                    </div>
                </div>
                <button type="submit" title='submit' onClick={handleSubmit}>PUBLISH</button>
            </form>
    </div>
  );
}
