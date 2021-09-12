const Navbar = (props) => {
    return(
        <div className="navbar">
            <ul>
                <li><a href="/blogs" className="slog">The Good Blog</a></li>
                <li className={props.page==="home"?  "active" : undefined}><a href="/blogs">Home</a></li>
                <li className={props.page==="new-blog"? "active": undefined}><a href="/new-blog">New Blog</a></li>
            </ul>
            <div className="line"></div>
        </div>
    )
}

export default Navbar