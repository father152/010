import { Link } from "react-router-dom";



const History = () => {
  return (
    <div className="history">
      <h1>History</h1>
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

export { History };
