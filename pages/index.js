import { Footer, Header, Navbar } from '../components';
import { About1, Category1, Course2, Testimonials2, Team, WhyUs3, News, Offer, Subscripe } from '../sections';

function Home() {
  return (
    <>
      {/* <Navbar />  Wannt Fix... */}
      <Header />
      <About1 />
      <Category1 />
      <Course2 />
      <Testimonials2 />
      <Team />
      <WhyUs3 />
      <Subscripe />
      <News />
      <Offer />
      <Footer />
    </>
  )
}

export default Home;


// Make home 1, 2, 3
// Make navbar, bread-crumb, header
// shapes and animation
// remove all scss and replace them with styled components
// Add logo for your site.
