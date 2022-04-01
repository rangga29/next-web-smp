export default function NavbarSubMenu({ href, title }) {
  return (
    <li className="p-1 text-base font-medium transition-all duration-100 border hover:bg-ursula-B0F0A1 hover:font-bold xl:p-2 xl:text-lg">
      <a href={href}>{title}</a>
    </li>
  )
}
