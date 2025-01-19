import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Css from "../Css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/css" element={<Css />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
