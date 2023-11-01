import women from "../assets/homepage-section/female.png";
import cards from "../assets/homepage-section/cards.png";
import curve from "../assets/homepage-section/curve.png";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <header className="hero">
      <Navbar />
      <div className="hero-wrapper">
        <div className="hero-col-left">
          <h1>
            <span className="display-block">Find & Hire</span>
            <span className="display-block">Top 3% of expert</span>
            <span className="display-block">on jobi.</span>
          </h1>
          <h5>
            With the largest professional creative community online, simply
            search through from our website
          </h5>
          <form>
            <input type="text" placeholder="Search job, title etc...." />
            <button type="submit" className="btn-round">
              Search
            </button>
          </form>
          <p>
            <strong className="bold">Popular:</strong> Design, Art, Business,
            Video Editing
          </p>
        </div>
        <div className="hero-col-right">
          {" "}
          <img className="hero-image-female" src={women} alt="woman" />
        </div>
        <div className="hero-image-details">
          <img className="cards" src={cards} alt="cards" />
          {/* <img className="trusted" src={trusted} alt="trusted by" /> */}
        </div>
      </div>
      <div>
        <img src={curve} alt="Bottom curve of section" className="curve" />
      </div>
    </header>
  );
};

export default Hero;
