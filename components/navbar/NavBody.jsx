import Image from 'next/image'
import NavbarMenu from './NavbarMenu'

export default function NavHeader() {
  return (
    <div className="flex">
      <div className="w-4/12 mt-1">
        <a href="#">
          <Image src="/upload/logo/logo_smp1.png" alt="Logo SMP" layout="responsive" width={500} height={100} />
        </a>
      </div>
      <div className="flex items-center justify-end w-8/12 space-x-6 text-black">
        <NavbarMenu />
      </div>
    </div>
  )
}
