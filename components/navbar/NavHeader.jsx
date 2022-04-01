import NavbarMenu from './NavbarMenu'

export default function NavBody() {
  return (
    <div className="flex flex-row items-center">
      <div className="w-10/12 xl:w-9/12">
        <div className="flex justify-start ml-8 space-x-5 text-black">
          <NavbarMenu />
        </div>
      </div>
      <div className="w-2/12 xl:w-3/12">
        <div className="flex justify-end mr-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-4 text-base text-black rounded-lg bg-ursula-B0F0A1 placeholder:text-base placeholder:text-black xl:pl-10 xl:bg-search-black"
          />
        </div>
      </div>
    </div>
  )
}
