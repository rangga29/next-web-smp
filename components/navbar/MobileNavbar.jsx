import { useState } from 'react'
import Link from 'next/link'
import MobileNavbarMenu from './MobileNavbarMenu'

export default function MobileNavbar() {
  const [offCanvas, setOffCanvas] = useState(false)
  const [search, setSearch] = useState(false)

  return (
    <header className="p-5">
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex justify-start w-3/12">
            <button
              className="text-2xl"
              onClick={() => {
                setOffCanvas(!offCanvas)
              }}>
              <i className="ri-align-justify"></i>
            </button>
          </div>
          <div className="flex justify-center w-6/12">
            <Link href="/" passHref>
              <img src="/upload/logo/logo_smp1.png" alt="Logo SMP" />
            </Link>
          </div>
          <div className="flex justify-end w-3/12">
            <button
              className="text-2xl"
              onClick={() => {
                setSearch(!search)
              }}>
              <i className="ri-search-line"></i>
            </button>
          </div>
          <div
            className={`fixed top-0 z-50 h-full w-full border-r-4 border-t-4 border-b-4 border-ursula-006600 bg-ursula-70C54D p-10 transition-all duration-200 sm:w-10/12 ${
              offCanvas ? 'left-0' : '-left-full'
            } `}>
            <button
              className="absolute pt-1 text-3xl text-white top-3 right-5"
              onClick={() => {
                setOffCanvas(false)
              }}>
              <i className="ri-close-circle-line"></i>
            </button>
            <MobileNavbarMenu />
          </div>
          <div className={`absolute left-0 w-full px-4 transition-all ${search ? 'top-4' : '-top-40'}`}>
            <button
              className="absolute top-[11px] right-8 text-lg text-white md:top-7"
              onClick={() => {
                setSearch(false)
              }}>
              <i className="ri-close-circle-line"></i>
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-3 pl-12 text-white rounded-lg bg-ursula-70C54D bg-search placeholder:text-white md:py-8"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
