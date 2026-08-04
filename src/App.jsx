import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Packages from "./pages/Packages.jsx";
import Gallery from "./pages/Gallery.jsx";
import Services from "./pages/Services.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About.jsx" element={<About />} />
      <Route path="/Packages.jsx" element={<Packages />} />
      <Route path="/Gallery.jsx" element={<Gallery />} />
      <Route path="/Services.jsx" element={<Services />} />
      <Route path="/Testimonials.jsx" element={<Testimonials />} />
      <Route path="/Contact.jsx" element={<Contact />} />
    </Routes>
  );
}

export default App;