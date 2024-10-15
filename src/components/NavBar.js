import Link from 'next/link'

const NavBar = () => {
    return (
      <nav className="absolute top-0 right-0 p-8">
        <ul className="flex space-x-10">
          <li><Link href="/" className="text-white hover:text-sakura-200 transition-colors">HOME</Link></li>
          <li><Link href="/translations" className="text-white hover:text-sakura-200 transition-colors">TRANSLATIONS</Link></li>
        </ul>
      </nav>
    )
  }

export default NavBar