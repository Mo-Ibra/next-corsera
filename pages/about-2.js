import { Breadcrumb, Footer, Navbar } from "../components";
import {
  About1,
  // About2,
  Offer,
  Subscripe,
  Team,
  Testimonials,
  WhyUs2,
} from "../sections";

function About() {
  return (
    <>
      <Navbar />
      <Breadcrumb title="About Us" />
      {/* <About2 /> */}
      <About1 />
      <Offer />
      <Team />
      <WhyUs2 />
      <Subscripe />
      <Testimonials />
      <Footer />
    </>
  );
}

export default About;
