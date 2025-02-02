/*App.jsx*/
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Memes from "./Components/Memes"; 
import Navbar from "./Components/Navbar"; 
import Psychologists from "./Components/Psychologists";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psychologists" element={<Psychologists />} />
        <Route path="/therapies" element={<Memes />} />
      </Routes>
      <Footer /> {}
    </>
  );
}

export default App;
