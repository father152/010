import { NavLink, Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { Leftside } from "./Leftside/Leftside";
import { Rightside } from "./Rightside/Rightside.jsx";
import  image  from "./icon.jpg";


const Layout = () => {
  return (
    <>
      <header>
        <div className="pic">
        <Link to="/"><img className ='picture' src={image} alt="" /></Link>
        </div>

        <NavLink to="/" className="link">
          Home{" "}
        </NavLink>
        <NavLink to="/about" className="link">
          {" "}
          About
        </NavLink>
        <NavLink to="/products" className="link">
          {" "}
          Products
        </NavLink>
        <NavLink to="/portfolio" className="link">
          Portfolio{" "}
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact{" "}
        </NavLink>
      </header>

      <div className="centralpart">
        <Leftside />
        <div>
          <main className="container">
            <Outlet />
          </main>
        </div>
        <Rightside />
      </div>

      <footer>
        <p>All Rights Reserved 2021-2023</p>
      </footer>
    </>
  );
};

export { Layout };
