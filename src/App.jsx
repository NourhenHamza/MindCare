/*App.jsx*/
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer"; // Import the Footer component
import Home from "./Components/Home";
import Memes from "./Components/Memes"; // Assuming you have a Memes component
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos"; // Assuming you have a Todos component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psychologists" element={<Todos />} />
        <Route path="/therapies" element={<Memes />} />
      </Routes>
      <Footer /> {/* Added Footer here */}
    </>
  );
}

export default App;
