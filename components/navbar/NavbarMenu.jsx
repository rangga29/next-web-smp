import React from 'react'
import NavbarSubMenu from './NavbarSubMenu'

export default function NavbarMenu() {
  return (
    <>
      <div className="relative inline-block group">
        <div className="py-8">
          <a href="#" className="py-10 text-base font-bold transition-all duration-300 group-hover:text-ursula-4A9826 xl:text-lg">
            Home
          </a>
        </div>
      </div>
      <div className="relative inline-block group">
        <div className="py-8">
          <a href="#" className="py-10 text-base font-bold transition-all duration-300 group-hover:text-ursula-4A9826 xl:text-lg">
            Tentang Sekolah
          </a>
        </div>
        <ul className="absolute z-10 w-40 -mt-1 transition-opacity duration-300 bg-white border-t-4 border-b-4 border-green-900 opacity-0 group-hover:opacity-100 xl:w-44">
          <NavbarSubMenu href="#" title="Profil Sekolah" />
          <NavbarSubMenu href="#" title="Sejarah Sekolah" />
          <NavbarSubMenu href="#" title="Visi & Misi" />
          <NavbarSubMenu href="#" title="6 Nilai Serviam" />
          <NavbarSubMenu href="#" title="Enterpreneurship" />
        </ul>
      </div>
      <div className="relative inline-block group">
        <div className="py-8">
          <a href="#" className="py-10 text-base font-bold transition-all duration-300 group-hover:text-ursula-4A9826 xl:text-lg">
            Berita & Artikel
          </a>
        </div>
        <ul className="absolute z-10 w-40 -mt-1 transition-opacity duration-300 bg-white border-t-4 border-b-4 border-green-900 opacity-0 group-hover:opacity-100 xl:w-44">
          <NavbarSubMenu href="#" title="Kategori 1" />
          <NavbarSubMenu href="#" title="Kategori 2" />
          <NavbarSubMenu href="#" title="Kategori 3" />
          <NavbarSubMenu href="#" title="Kategori 4" />
          <NavbarSubMenu href="#" title="Kategori 5" />
        </ul>
      </div>
      <div className="relative inline-block group">
        <div className="py-8">
          <a href="#" className="py-10 text-base font-bold transition-all duration-300 group-hover:text-ursula-4A9826 xl:text-lg">
            Galeri
          </a>
        </div>
        <ul className="absolute z-10 w-40 -mt-1 transition-opacity duration-300 bg-white border-t-4 border-b-4 border-green-900 opacity-0 group-hover:opacity-100 xl:w-44">
          <NavbarSubMenu href="#" title="Galeri Foto" />
          <NavbarSubMenu href="#" title="Galeri Video" />
        </ul>
      </div>
      <div className="relative inline-block group">
        <div className="py-8">
          <a href="#" className="py-10 text-base font-bold transition-all duration-300 group-hover:text-ursula-4A9826 xl:text-lg">
            Kegiatan
          </a>
        </div>
        <ul className="absolute z-10 w-40 -mt-1 transition-opacity duration-300 bg-white border-t-4 border-b-4 border-green-900 opacity-0 group-hover:opacity-100 xl:w-44">
          <NavbarSubMenu href="#" title="PTMT" />
          <NavbarSubMenu href="#" title="Lomba-Lomba" />
        </ul>
      </div>
      <div className="relative inline-block group">
        <div className="py-8">
          <a href="#" className="py-10 text-base font-bold transition-all duration-300 group-hover:text-ursula-4A9826 xl:text-lg">
            Link Terkait
          </a>
        </div>
        <ul className="absolute z-10 w-40 -mt-1 transition-opacity duration-300 bg-white border-t-4 border-b-4 border-green-900 opacity-0 group-hover:opacity-100 xl:w-44">
          <NavbarSubMenu href="#" title="PPDB 2022/2023" />
          <NavbarSubMenu href="#" title="LMS Santa Ursula" />
        </ul>
      </div>
      <div className="relative inline-block group">
        <div className="py-8">
          <a href="#" className="py-10 text-base font-bold transition-all duration-300 group-hover:text-ursula-4A9826 xl:text-lg">
            Alumni
          </a>
        </div>
      </div>
      <div className="relative inline-block group">
        <div className="py-8">
          <a href="#" className="py-10 text-base font-bold transition-all duration-300 group-hover:text-ursula-4A9826 xl:text-lg">
            Kontak
          </a>
        </div>
      </div>
    </>
  )
}
