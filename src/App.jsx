import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//components
import About from "./components/About";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import InfoOne from "./components/InfoOne";
import Infotwo from "./components/Infotwo";
import Portfolio from "./components/Portfolio";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Navbar />
      <HeroBanner />
      <About />
      <InfoOne />
      <Infotwo />
      <Portfolio />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
