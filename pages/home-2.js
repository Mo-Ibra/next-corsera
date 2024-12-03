import { Footer, Header, Navbar } from "../components";
import {
  About1,
  // About2,
  Category2,
  Course1,
  Event1,
  News,
  Subscripe,
  Testimonials,
  WhyUs2,
} from "../sections";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Category2 />
      {/* <About2 /> */}
      <About1 />
      <Course1 />
      <Event1 />
      <Testimonials />
      <WhyUs2 />
      <Subscripe />
      <News />
      <Footer />
    </>
  );
}

export default Home;
