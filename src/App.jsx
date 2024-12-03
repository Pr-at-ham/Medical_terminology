// react,react-dom, react-router-dom, framer-motion,recoil
// import { motion } from "framer-motion";
import { NavBar } from "./Components/Navbar";
import { Body } from "./Components/Body";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <div className="px-0 sm:px-5">
      <NavBar />
      <Body />
      <Footer />
      <a
        href="#"
        className="text-5xl pt-2 px-3 rounded-full  bg-[#FF7800] border-2 border-black   fixed bottom-5 right-7"
      >
        ^
      </a>
    </div>
  );
}

export default App;
