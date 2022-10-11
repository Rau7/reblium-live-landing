import reblogo from "../images/rebliumlogo.webp";
import first from "../images/first.webp";
import second from "../images/second.webp";
import lastFirst from "../images/lastFirst.webp";
import lastSecond from "../images/lastSecond.webp";
import lastThird from "../images/lastThird.webp";
import lastFour from "../images/lastFour.webp";
import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);

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
        <AutoplaySlider
          play={true}
          bullets={false}
          organicArrows={false}
          infinite={true}
          interval={6500}
        >
          <div className="image-section">
            <div className="image-section-header">
              <h3>
                3D face scan as a<br />
                proof-of-identity
              </h3>
            </div>
            <div className="image-section-image">
              <img
                src={first}
                className="first-image"
                alt="reblium-face-scan"
              />
            </div>
          </div>
          <div className="image-section">
            <div className="image-section-header">
              <h3>
                Real-time and high-fidelity
                <br />
                avatar creator streamed to you
              </h3>
            </div>
            <div className="image-section-image">
              <img
                src={second}
                className="second-image"
                alt="reblium-face-scan"
              />
            </div>
          </div>
          <div className="image-section">
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
        </AutoplaySlider>
      </section>
    </>
  );
}

export default Home;
