import Navbar from "./navbar";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function NewBlog() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers:{"Content-Type" : "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("A blog is added!")
      history.push('/blogs')
    })
  }

  return (
    <div className="NewBlog">
      <Navbar page="new-blog"/>
      <h1>Add a New Blog</h1>
      <div className="frm">
        <input type="text" value={title} placeholder="Put your title" onChange={(e) => setTitle(e.target.value) } required/>
        <input type="text" value = {body} placeholder="Put your body" onChange={(e) => setBody(e.target.value)} required/>
        <input type="text" value = {author} placeholder="Put your author" onChange={(e) => setAuthor(e.target.value)} required/>
        <button onClick = {handleSubmit} disabled={!title || !body || !author}>Submit</button>
      </div>
    </div>
  );
}

export default NewBlog;
