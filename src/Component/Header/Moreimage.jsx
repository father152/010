import Image1 from "./1511557881_kachestvennye-png-na-prozrachnom-fone_-veselye-snegoviki-2.jpg";
import Image2 from "./3.jpg";
import Image3 from "./icon.jpg";
import Portfolio from "./Portfolio";
import { NavLink } from "react-router-dom";

const Moreimage = () => {
  return (
    <div className="moreimage">
      <div className="moreimage-1">
        <h4>Name Picture 1</h4>
        <div className="image">
          <img src={Image1} alt="" />
        </div>
      </div>
      <div className="moreimage-2">
        <h4>Name Picture 2</h4>
        <div className="image">
          <img src={Image2} alt="" />
        </div>
      </div>
      <div className="moreimage-3">
        <h4>Name Picture 3</h4>
        <div className="image">
          <img src={Image3} alt="" />
        </div>
      </div>

      <NavLink to="/portfolio" className="link">
        <button className="button">Back</button>
      </NavLink>
    </div>
  );
};

export { Moreimage };
