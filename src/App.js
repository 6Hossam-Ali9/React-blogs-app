import Home from "./components/home.js";
import {Switch, Route} from 'react-router-dom'
import NewBlog from "./components/newblog.js";
import NotFound from "./components/404.js";
import BlogDetails from "./components/blogdetails.js";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/blogs" name = "Home" component={Home}/>
        <Route exact path="/new-blog" name = "New Blog" component={NewBlog}/>
        <Route exact path="/blogs/:id" name = "Blog Details" component={BlogDetails}/>
        <Route  path="*" name = "Not Found" component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
