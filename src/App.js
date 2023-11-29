import { Routes, Route } from "react-router-dom";
import { Home } from "./Component/Header/Home";
import { About } from "./Component/Header/About";
import { Portfolio } from "./Component/Header/Portfolio";
import { Contact } from "./Component/Header/Contact";
import { Notfound } from "./Component/Header/Notfound";
import { Layout } from "./Component/Layout";
import { Moreimage } from "./Component/Header/Moreimage.jsx";
import { Products } from "./Component/Header/Products";
import { Building } from "./Component/Leftside/Building.jsx";
import { House } from "./Component/Leftside/House.jsx";
import { Flat } from "./Component/Leftside/Flat.jsx";
import { History } from "./Component/Rightside/History.jsx";
import { Photo } from "./Component/Rightside/Photo.jsx";
import {Contacts} from './Component/Rightside/Contacts.jsx'

function App() {
  return (
    <>
      <Routes className="header">
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:id" element={<Moreimage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />

        // ===================LEFTSIDE=================================

          <Route path="building" element={<Building />} />
          <Route path="house" element={<House />} />
          <Route path="flat" element={<Flat />} />

        // ======================RIGHTSIDE=================================
        
          <Route path="history" element={<History />} />
          <Route path="photo" element={<Photo />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
