import { Link } from "react-router-dom";


const Photo = () => {
    return (
      <div className="photo">
        <h1>Photo</h1>
        <p>
          This is a demo website about React-Router-dom This is a demo website
          about React-Router-dom This is a demo website about React-Router-dom
          This is a demo website about React-Router-dom This is a demo website
          about React-Router-dom This is a demo website about React-Router-dom
          This is a demo website about React-Router-dom This is a demo website
          about React-Router-dom This is a demo website about React-Router-dom
          This is a demo website about React-Router-dom
        </p>
        <div className="button">
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
      </div>
    );
  };
  
  export { Photo };
  