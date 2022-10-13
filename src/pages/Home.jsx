import reblogo from "../images/REBLIUM.png";
import first from "../images/first.webp";
import second from "../images/second.webp";
import secondVid from "../images/vid.mp4";
import lastFirst from "../images/lastFirst.webp";
import lastSecond from "../images/lastSecond.webp";
import lastThird from "../images/lastThird.webp";
import lastFour from "../images/lastFour.webp";
import { useEffect, useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [cont, setCont] = useState([true, false, false]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (cont[0]) {
        setCont([false, true, false]);
      } else if (cont[1]) {
        setCont([false, false, true]);
      } else if (cont[2]) {
        setCont([true, false, false]);
      }
    }, 5150);
  }, [cont]);

  return isLoading ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : (
    <>
      <header>
        <div className="reblium-logo-area">
          <img src={reblogo} alt="reblium-logo" />
        </div>
      </header>
      <section className="main-section-1">
        <div className="writing-section">
          <div className="writing-area">
            <h1>
              Be the real <br /> virtual you
            </h1>
            <p>
              Scan your face in seconds and get ready to blend between gender,
              ethnicity, age and fantasy to get your unique web3 digital
              identity.
            </p>
            <div className="writing-button-area">
              <a href="#" className="waitlist-btn">
                Join the waitlist
              </a>
            </div>
          </div>
        </div>
        <div className={`image-section ${cont[0] ? "" : "d-none"}`}>
          <div className="image-section-header">
            <h3>
              3D face scan as a<br />
              proof-of-identity
            </h3>
          </div>
          <div className="image-section-image">
            <img src={first} className="first-image" alt="reblium-face-scan" />
          </div>
        </div>
        <div className={`image-section ${cont[1] ? "" : "d-none"}`}>
          <div className="image-section-header">
            <h3>
              Real-time and
              <br />
              high-fidelity
              <br />
              avatar creator streamed to you
            </h3>
          </div>
          <div className="image-section-image">
            <video autoPlay muted loop>
              <source src={secondVid} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={`image-section ${cont[2] ? "" : "d-none"}`}>
          <div className="image-section-header">
            <h3>
              Mint your avatar as a
              <br />
              dynamic & soulband NFT
            </h3>
          </div>
          <div className="image-section-grid">
            <img
              src={lastFirst}
              className="grid-image"
              alt="reblium-face-scan"
            />
            <img
              src={lastSecond}
              className="grid-image"
              alt="reblium-face-scan"
            />
            <img
              src={lastThird}
              className="grid-image"
              alt="reblium-face-scan"
            />
            <img
              src={lastFour}
              className="grid-image"
              alt="reblium-face-scan"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
