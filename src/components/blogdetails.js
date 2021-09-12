import Navbar from "./navbar";
import {useParams, useHistory} from 'react-router-dom'
import{useState, useEffect} from 'react'

function BlogDetails() {
  const [blog, setBlog] = useState(null)
  const {id} = useParams();
  const history = useHistory();
  useEffect(() => {
    fetch('http://localhost:8000/blogs/'+id)
    .then(res => {
      return res.json();
    }).then(blog => {
      setBlog(blog);
    })
  }, [id])

  const onDelete = () => {
    fetch('http://localhost:8000/blogs/'+id, {
      method: 'DELETE'
    })
    .then(() => {
      history.push('/blogs');
    })
  }

  return (
    <div className="BlogDetails">
      <Navbar page="BlogDetails"/>
      {!blog && <h1 className="center">Loading...</h1>}
      {blog && !blog.title && <h1 className="center">No such a blog!!!</h1>}
      {blog && 
        <div className="detailed">
          <h1>{blog.title}</h1>
          <h3>{blog.body}</h3>
          <p>{blog.author}</p>
          <button onClick={onDelete}>Delete</button>
        </div>
      }
    </div>
  );
}

export default BlogDetails;
