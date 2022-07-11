import { Footer } from '../components';
import About1 from '../sections/About/about1/about1';
import About2 from '../sections/About/About2/About2';
import Login from '../sections/auth/login/Login';
import Register from '../sections/auth/Register/Register';
import Category1 from '../sections/Category/Category1/Category1';
import Category2 from '../sections/Category/Category2/Category2';
import Category3 from '../sections/Category/Category3/Category3';
import ContactUs from '../sections/contact-us/contact-us';
import Course1 from '../sections/course/Course1/Course1';
import Course2 from '../sections/course/course2/Course2';
import Event1 from '../sections/events/event1/event1';
import Event2 from '../sections/events/event2/event2';
import Features from '../sections/features/features';
import News from '../sections/news/news';
import Notfound from '../sections/not-found/not-found';
import Offer from '../sections/offer/offer';
import Price from '../sections/price/price';
import PrivacyPolice from '../sections/privacy-police/privacy-police';
import Testimonials2 from '../sections/testimonials-2/testimonials';
import Testimonials from '../sections/testimonials/testimonials';

import WhyUs1 from '../sections/why-us/why-us-1/why-us-1';
import WhyUs2 from '../sections/why-us/why-us-2/why-us-2';
import WhyUs3 from '../sections/why-us/why-us-3/why-us-3';

function Home() {
  return (
    <>
      {/* <Navbar />  Wannt Fix... */}
      <Category1 />
      {/* <Category2 /> */}
      <About1 />
      <Category3 />
      <About2 />
      {/* <ContactUs /> */}
      {/* <Course1 /> */}
      <Course2 />
      <WhyUs1 />
      <WhyUs2 />
      {/* <Event1 /> */}
      <Event2 />
      <Features />
      <News />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Notfound /> */}
      <WhyUs3 />
      {/* <Price /> */}
      {/* <PrivacyPolice /> */}
      {/* <Testimonials /> */}
      <Testimonials2 />
      <Offer />
      <Footer />
    </>
  )
}

export default Home;