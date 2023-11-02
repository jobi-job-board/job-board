import About from "../(components)/About";
import Blog from "../(components)/Blog";
import Grid from "../(components)/Grid";
import Footer from "../(components)/Footer";
import Hero from "../(components)/Hero";
import HowItWorks from "../(components)/HowItWorks";
import Ratings from "../(components)/Ratings";
import Stats from "../(components)/Stats";
import Hire from "../(components)/Hire";
import Testimonials from "../(components)/Testimonials";
import styles from "./page.module.css";

export default function Home() {
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
}
