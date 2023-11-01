import About from "./About";
import Blog from "./Blog";
import Grid from "./Grid";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Ratings from "./Ratings";
import Stats from "./Stats";
import Hire from "./Hire";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Ratings />
      <HowItWorks />
      <About />
      <Stats />
      <Grid />
      <Hire />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
