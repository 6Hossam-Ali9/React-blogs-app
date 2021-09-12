import Navbar from "./navbar";

const NotFound = (props) => {
    return(
        <div className="not-found">
            <Navbar page="none"/>
            <h1 className="center">404, CAN'T ACCESS THIS PAGE!!!</h1>
        </div>
    )
}

export default NotFound