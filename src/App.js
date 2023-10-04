import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import TechStack from "./components/techStack/TechStack";

import Webshop from "./components/projects/Webshop";

import { DataProvider } from "./components/context/context";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/techStack" element={<TechStack />} />
          <Route path="/webshop" element={<Webshop />} />

        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
