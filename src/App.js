import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import TechStack from "./components/techStack/TechStack";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/techStack" element={<TechStack />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
