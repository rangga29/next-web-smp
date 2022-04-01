import Head from '@components/Head'
import useWindowSize from '@hooks/useWindowSize'
import Navbar from '@components/navbar/Navbar'
import MobileNavbar from '@components/navbar/MobileNavbar'
import Carousel from '@components/Carousel'
import About from '@components/About'
import News from '@components/News'
import Headmaster from '@components/Headmaster'
import Testimonial from '@components/Testimonial'
import Footer from '@components/Footer'

import 'remixicon/fonts/remixicon.css'

export default function Home() {
  const size = useWindowSize()

  return (
    <>
      <Head />
      {size.width < 1024 ? <MobileNavbar /> : <Navbar />}
      <Carousel />
      <About />
      {/* 
      <News />
      <Headmaster />
      <Testimonial />
      <Footer /> */}
    </>
  )
}
