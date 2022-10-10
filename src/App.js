// eslint-disable-next-line no-unused-expressions
import "./styles/utilities.css";
import "./styles/general.css";
import "./styles/mobile.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
