import reblogo from "../images/rebliumlogo.webp";
import first from "../images/first.webp";
import { useEffect, useState } from "react";

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
        <div className="image-section">
          <div className="image-section-header">
            <h3>
              3D face scan as a<br />
              proof-of-identity
            </h3>
          </div>
          <div className="image-section-image">
            <img src={first} alt="reblium-face-scan" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
