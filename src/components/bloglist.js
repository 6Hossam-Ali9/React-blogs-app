import {useState, useEffect} from 'react'

const BlogList = (props) => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    }, [])

    return(
        <div className="BlogList">
           {blogs && blogs.map((blog) =>(
               <div className="blog-item" key={blog.id}>
                   <h1>{blog.title}</h1>
                   <h3>Written by {blog.author}</h3>
                   <a href={"/blogs/"+blog.id}>More Details...</a>
               </div>
           ))}
        </div>
    )
}

export default BlogList