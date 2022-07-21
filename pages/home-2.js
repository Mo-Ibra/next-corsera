import { Footer, Header } from "../components";
import {
  About2,
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
      {/* <Navbar />  Wannt Fix... */}
      <Header />
      <Category2 />
      <About2 />
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
