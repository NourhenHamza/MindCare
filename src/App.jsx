/*App.jsx*/
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Memes from "./Components/Memes"; 
import Navbar from "./Components/Navbar"; 
import Psychologists from "./Components/Psychologists";
import PsychologistDetails from "./Components/PsychologistDetails";
import { useState } from "react";
function App() {
  const [onePsy,setOnePsy] = useState(null)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/psychologists" element={<Psychologists />} /> */}
        <Route path="/therapies" element={<Memes />} />
        <Route path="/psychologists" element={<Psychologists setOnePsy={setOnePsy} />} />
        <Route path="/psychologist" element={<PsychologistDetails onePsy={onePsy} />} />
      </Routes>
      <Footer /> 
      
    </>
  );
}

export default App;
