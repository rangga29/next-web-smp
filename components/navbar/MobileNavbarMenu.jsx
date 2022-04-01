export default function MobileNavbarMenu() {
  return (
    <div className="relative py-6">
      <hr />
      <div className="flex justify-center my-0 space-x-8">
        <a href="#">
          <i className="text-5xl ri-facebook-box-fill text-facebook-blue"></i>
        </a>
        <a href="#">
          <i className="ri-instagram-fill text-5xl text-[#C13584]"></i>
        </a>
        <a href="#">
          <i className="text-5xl ri-youtube-fill text-youtube-red"></i>
        </a>
      </div>
      <hr />
      <ul className="my-2">
        <a href="#" className="text-base font-bold transition-all duration-300">
          Home
        </a>
      </ul>
      <hr />
      <ul className="my-2">
        <a href="#" className="text-base font-bold transition-all duration-300 ">
          Tentang Sekolah
        </a>
        <div className="grid grid-flow-col grid-cols-2 gap-4 pl-8 my-2">
          <div className="text-sm font-semibold">
            <a href="#">&gt; Profil Sekolah</a>
          </div>
          <div className="text-sm font-semibold">
            <a href="#">&gt; Sejarah Sekolah</a>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-2 gap-4 pl-8 my-2">
          <div className="text-sm font-semibold">
            <a href="#">&gt; Visi & Misi</a>
          </div>
          <div className="text-sm font-semibold">
            <a href="#">&gt; 6 Nilai Serviam</a>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-2 gap-4 pl-8 my-2">
          <div className="text-sm font-semibold">
            <a href="#">&gt; Enterpreneurship</a>
          </div>
        </div>
      </ul>
      <hr />
      <ul className="my-2">
        <a href="#" className="text-base font-bold transition-all duration-300 ">
          Berita & Artikel
        </a>
        <div className="grid grid-flow-col grid-cols-2 gap-4 pl-8 my-2">
          <div className="text-sm font-semibold">
            <a href="#">&gt; Kategori 1</a>
          </div>
          <div className="text-sm font-semibold">
            <a href="#">&gt; Kategori 2</a>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-2 gap-4 pl-8 my-2">
          <div className="text-sm font-semibold">
            <a href="#">&gt; Kategori 3</a>
          </div>
          <div className="text-sm font-semibold">
            <a href="#">&gt; Kategori 4</a>
          </div>
        </div>
      </ul>
      <hr />
      <ul className="my-2">
        <a href="#" className="text-base font-bold transition-all duration-300 ">
          Galeri
        </a>
        <div className="grid grid-flow-col grid-cols-2 gap-4 pl-8 my-2">
          <div className="text-sm font-semibold">
            <a href="#">&gt; Galeri Foto</a>
          </div>
          <div className="text-sm font-semibold">
            <a href="#">&gt; Galeri Video</a>
          </div>
        </div>
      </ul>
      <hr />
      <ul className="my-2">
        <a href="#" className="text-base font-bold transition-all duration-300 ">
          Kegiatan
        </a>
        <div className="grid grid-flow-col grid-cols-2 gap-4 pl-8 my-2">
          <div className="text-sm font-semibold">
            <a href="#">&gt; PTMT</a>
          </div>
          <div className="text-sm font-semibold">
            <a href="#">&gt; Perlombaan</a>
          </div>
        </div>
      </ul>
      <hr />
      <ul className="my-2">
        <a href="#" className="text-base font-bold transition-all duration-300 ">
          Link Terkait
        </a>
        <div className="grid grid-flow-col grid-cols-2 gap-4 pl-8 my-2">
          <div className="text-sm font-semibold">
            <a href="#">&gt; PPDB 2022/2023</a>
          </div>
          <div className="text-sm font-semibold">
            <a href="#">&gt; LMS Santa Ursula</a>
          </div>
        </div>
      </ul>
      <hr />
      <ul className="my-2">
        <a href="#" className="text-base font-bold transition-all duration-300">
          Alumni
        </a>
      </ul>
      <hr />
      <ul className="my-2">
        <a href="#" className="text-base font-bold transition-all duration-300">
          Kontak
        </a>
      </ul>
      <hr />
    </div>
  )
}
