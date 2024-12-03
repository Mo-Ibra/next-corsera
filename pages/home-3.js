import { Footer, Header, Navbar } from "../components";
import {
  About2,
  Category2,
  Course1,
  Event2,
  Features,
  Offer,
  Testimonials2,
  WhoWeAre,
  Workshop,
} from "../sections";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Category2 />
      <Features />
      <WhoWeAre />
      {/* Anaylsitc */}
      <Course1 />
      <Workshop />
      <About2 />
      <Testimonials2 />
      <Event2 />
      <Offer />
      <Footer />
    </>
  );
}

export default Home;
