import { Link } from "react-router-dom";

const Contacts = () => {
    return (
      <div className="contacts">
        <h1>Contacts</h1>
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
  
  export { Contacts };
  