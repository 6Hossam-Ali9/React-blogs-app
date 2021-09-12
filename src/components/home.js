import Navbar from "./navbar";
import BlogList from "./bloglist"
function Home() {
  return (
    <div className="Home">
      <Navbar page="home"/>
      <h1 className="blogs">All Blogs!!</h1>
      <BlogList />
    </div>
  );
}

export default Home;
