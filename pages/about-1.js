import { Breadcrumb, Footer, Navbar } from "../components";
import {
    // About1,
    Offer,
    Team,
    Testimonials,
    WhyUs3
} from "../sections";

function About() {
  return (
    <>
      <Navbar />
      <Breadcrumb title="About Us" />
      {/* <About1 /> */}
      <Offer />
      <WhyUs3 />
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
}

export default About;
