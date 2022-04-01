import ReactPlayer from 'react-player'

export default function About() {
  return (
    <div className="w-full py-6 lg:py-14">
      <div className="container mx-auto">
        <div className="flex flex-col mb-8 lg:space-x-5">
          <div className="mx-8 lg:w-6/12">
            <div className="mb-6 text-base font-normal leading-6 text-justify md:text-lg lg:text-xl lg:font-medium">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:text-5xl md:first-letter:text-7xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero recusandae commodi aperiam voluptate maiores cum sit cupiditate rem magni expedita
                unde, laboriosam at ab saepe odio ipsum dicta ipsam laudantium sequi ex quia! Aliquam a sit adipisci exercitationem culpa, ad provident dolor
                beatae ratione laboriosam alias! Sunt nobis vel quae nesciunt odio quos vitae commodi labore temporibus inventore, omnis, doloribus voluptate
                maxime, natus cum fugit quasi quidem. Veniam libero, ipsa modi similique ut voluptatem impedit rem laudantium deserunt numquam. Nisi culpa,
                ratione expedita et eum quidem nihil nemo magnam enim, voluptate esse repellendus iusto minima veritatis.
              </p>
            </div>
          </div>
          <div className="mx-8 lg:w-6/12">
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                playing
                loop
                controls
                light="/upload/slider1.jpg"
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:space-x-5">
          <div className="mx-8 bg-white sm:mx-14 lg:w-4/12">
            <div className="mb-3 text-center single-mainpoint sm:flex sm:flex-row sm:items-center sm:space-x-4 sm:pt-2 lg:mb-6 lg:mt-5">
              <a href="#" className="sm:w-5/12">
                <div className="mainpoint-icon">
                  <span>
                    <i className="ri-number-6"></i>
                  </span>
                </div>
              </a>
              <div className="my-2 mainpoint-content sm:w-7/12 lg:mt-6">
                <div className="">
                  <h4 className="text-2xl font-bold tracking-wider hover:text-[#006600] sm:text-3xl md:text-4xl">
                    <a href="#">6 Nilai Serviam</a>
                  </h4>
                  <p className="pt-2 text-base font-normal sm:text-justify md:text-lg lg:pt-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae animi deserunt maxime sit, numquam alias debitis tempora harum? Ipsam,
                    harum?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-8 bg-white sm:mx-14 lg:w-4/12">
            <div className="mb-3 text-center single-mainpoint sm:flex sm:flex-row sm:items-center sm:space-x-4 sm:pt-2 lg:mb-6 lg:mt-5">
              <a href="#" className="sm:w-5/12">
                <div className="mainpoint-icon">
                  <span>
                    <i className="ri-dashboard-line"></i>
                  </span>
                </div>
              </a>
              <div className="mt-2 mainpoint-content sm:w-7/12 md:mt-6">
                <div className="">
                  <h4 className="text-2xl font-bold tracking-wider hover:text-[#006600] sm:text-3xl md:text-4xl">
                    <a href="#">Visi & Misi</a>
                  </h4>
                  <p className="pt-2 text-base font-normal sm:text-justify md:text-lg lg:pt-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae animi deserunt maxime sit, numquam alias debitis tempora harum? Ipsam,
                    harum?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-8 bg-white sm:mx-14 lg:w-4/12">
            <div className="mb-3 text-center single-mainpoint sm:flex sm:flex-row sm:items-center sm:space-x-4 sm:pt-2 lg:mb-6 lg:mt-5">
              <a href="#" className="sm:w-5/12">
                <div className="mainpoint-icon">
                  <span>
                    <i className="ri-medal-fill"></i>
                  </span>
                </div>
              </a>
              <div className="my-2 mainpoint-content sm:w-7/12 md:mt-6">
                <div className="">
                  <h4 className="text-2xl font-bold tracking-wider hover:text-[#006600] sm:text-3xl md:text-4xl">
                    <a href="#">Enterpreneurship</a>
                  </h4>
                  <p className="pt-2 text-base font-normal sm:text-justify md:text-lg lg:pt-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae animi deserunt maxime sit, numquam alias debitis tempora harum? Ipsam,
                    harum?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
