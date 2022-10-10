import reblogo from "../images/reblogo.png";
import Navbar from "../components/Navbar";
//import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import Card from "../components/Card";

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return isLoading ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : (
    <></>
  );
}

export default Home;
