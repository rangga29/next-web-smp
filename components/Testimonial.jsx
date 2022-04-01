import Slider from 'react-slick'

export default function Testimonial() {
  const settings = {
    infinite: true,
    dragable: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const slidesData = [
    {
      id: 1,
      img: 'https://picsum.photos/id/1/600/600',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eligendi rem saepe sed itaque, laborum error veniam. Necessitatibus quidem obcaecati similique? Maiores nemo expedita soluta distinctio officiis amet nihil magnam, voluptatum quidem doloremque aspernatur tenetur molestias culpa reiciendis quo. Error expedita odio officia maiores aut magni commodi debitis dolorem consequuntur?',
      name: 'Pollock Austin 1',
      subname: 'Alumni',
    },
    {
      id: 2,
      img: 'https://picsum.photos/id/2/600/600',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eligendi rem saepe sed itaque, laborum error veniam. Necessitatibus quidem obcaecati similique? Maiores nemo expedita soluta distinctio officiis amet nihil magnam, voluptatum quidem doloremque aspernatur tenetur molestias culpa reiciendis quo. Error expedita odio officia maiores aut magni commodi debitis dolorem consequuntur?',
      name: 'Pollock Austin 2',
      subname: 'Orangtua',
    },
    {
      id: 3,
      img: 'https://picsum.photos/id/3/600/600',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eligendi rem saepe sed itaque, laborum error veniam. Necessitatibus quidem obcaecati similique? Maiores nemo expedita soluta distinctio officiis amet nihil magnam, voluptatum quidem doloremque aspernatur tenetur molestias culpa reiciendis quo. Error expedita odio officia maiores aut magni commodi debitis dolorem consequuntur?',
      name: 'Pollock Austin 3',
      subname: 'Alumni',
    },
  ]

  return (
    <div className="w-full py-16 bg-green-50">
      <div className="container mx-auto">
        <div className="relative w-full h-auto text-center">
          <div className="relative top-0 right-0 bottom-0 left-[580px] z-0 bg-center bg-cover bg-[url('/upload/logo/serviamshape.png')] w-32 h-32"></div>
          <div className="absolute inset-0 z-10 flex items-center justify-center -mt-4 text-5xl font-bold tracking-wider text-black uppercase">
            <h1>Testimoni Alumni & Siswa</h1>
          </div>
        </div>
        <div className="mx-auto my-5">
          <Slider {...settings}>
            {slidesData.map((slide) => (
              <div className="text-center pt-7" key={slide.id}>
                <div className="relative inline-block text-black">
                  <img src={slide.img} alt={slide.name} className="w-40 rounded-full" />
                </div>
                <p className="mt-5 text-lg">{slide.content}</p>
                <h4 className="mt-5 text-2xl font-bold ">{slide.name}</h4>
                <span className="block mt-1 text-base font-medium tracking-wider uppercase">{slide.subname}</span>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-end pt-5">
          <div className="text-base font-bold hover:underline">
            <a href="#">Testimoni Lainnya &rArr;</a>
          </div>
        </div>
      </div>
    </div>
  )
}
