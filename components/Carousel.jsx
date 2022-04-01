import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {
  const settings = {
    infinite: true,
    fade: true,
    dragable: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const slidesData = [
    {
      id: 1,
      img: 'https://picsum.photos/id/1/600/800',
      title: 'PPDB 2023/2024',
    },
    {
      id: 2,
      img: 'https://picsum.photos/id/2/600/800',
      title: 'excepturi consequatur est',
    },
    {
      id: 3,
      img: 'https://picsum.photos/id/3/600/800',
      title: 'eius doloribus blanditiis',
    },
  ]

  return (
    <div className="w-full bg-[url(/upload/slider1.jpg)] lg:-mt-1 lg:pt-24 ">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-6/12 xl:w-7/12">
          <div className="mx-10 mt-10 text-center sm:mt-20 sm:text-left md:mt-28 lg:mt-32 xl:mx-20 2xl:mt-32">
            <h6 className="text-lg font-bold tracking-widest text-black uppercase animate-fadeInUp animate-slow lg:text-xl xl:text-2xl 2xl:text-4xl">
              Selamat Datang
            </h6>
            <h1 className="my-5 animate-fadeInUp text-4xl font-semibold uppercase text-white animate-slow animate-delay-[500ms] text-shadow-xl md:text-3xl lg:my-10 lg:text-5xl xl:text-6xl 2xl:text-8xl">
              SMP Santa Ursula Bandung
            </h1>
            <h4 className="animate-fadeInUp text-xl font-medium tracking-normal text-ursula-173412 animate-slow animate-delay-[1000ms] sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-5xl">
              ~ Enterpreneurship is Our Mindset ~
            </h4>
            <div className="invisible sm:visible sm:mt-12 md:mt-36">
              <div className="sm:animate-fadeInUp sm:animate-slow sm:animate-delay-[1500ms] lg:mt-60">
                <ul className="flex items-center">
                  <h1 className="pr-1 text-base font-semibold whitespace-nowrap text-ursula-173412 sm:text-sm lg:text-xl lg:font-bold 2xl:text-2xl">
                    Follow Us :{' '}
                  </h1>
                  <li className="mx-2 xl:mx-4">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-lg leading-6 text-center text-white transition-all duration-200 border border-solid rounded feather feather-facebook border-facebook-blue bg-facebook-blue hover:border-white hover:bg-white hover:text-facebook-blue xl:h-10 xl:w-10">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </li>
                  <li className="mr-2 xl:mr-4">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram h-8 w-8 rounded border border-solid border-[#C13584] bg-[#C13584] text-center text-lg leading-6 text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-[#C13584] xl:h-10 xl:w-10">
                        <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  </li>
                  <li className="mr-2 xl:mr-4">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-lg leading-6 text-center text-white transition-all duration-200 border border-solid rounded feather feather-youtube border-youtube-red bg-youtube-red hover:border-white hover:bg-white hover:text-youtube-red xl:h-10 xl:w-10">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-6/12 xl:w-5/12">
          <div className="mx-0 mb-0 border-8 border-green-900 animate-fadeIn animate-slower lg:-mt-1 xl:mt-0">
            <Slider {...settings}>
              {slidesData.map((slide) => (
                <div className="relative -mb-2 text-center focus:outline-none" key={slide.id}>
                  <a href="#">
                    <img className="max-h-[30rem] min-w-full object-cover md:max-h-[40rem] lg:max-h-[51rem]" src={slide.img} />
                  </a>
                  <h2 className="absolute bottom-0 left-0 w-full p-2 text-xl text-white capitalize bg-green-700/30">
                    <a href="#">{slide.title}</a>
                  </h2>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
