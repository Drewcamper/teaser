import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import TechStack from "./components/techStack/TechStack";
import { DataProvider } from "./components/context/context";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/techStack" element={<TechStack />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
