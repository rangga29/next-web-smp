import { useEffect, useState } from 'react'
import NavBody from './NavBody'
import NavHeader from './NavHeader'

export default function Navbar() {
  const [animateHeader, setAnimateHeader] = useState(false)

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 200) {
        setAnimateHeader(true)
      } else setAnimateHeader(false)
    }
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  return (
    <header className={`top-0 left-0 w-full bg-white duration-200 ease-in-out trasition fixed z-50 ${animateHeader && 'bg-white'}`}>
      <div className="container mx-auto">{animateHeader ? <NavBody /> : <NavHeader />}</div>
    </header>
  )
}
