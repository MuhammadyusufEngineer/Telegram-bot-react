import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import NavHome from '@/components/icons/iconHome'
import NavCatalog from '@/components/icons/iconCatalog'
import NavCart from '@/components/icons/iconCart'
import Navfavorite from '@/components/icons/iconNavfavorite'
import NavProfile from '@/components/icons/iconProfile'

export default function Navigation() {
  const location = useLocation().pathname
  const [active, setActive] = useState(location)
  const switchActive = path => setActive(path)
  const nav = [
    { id: 1, title: 'Bosh sahifa', path: '/home', icon: NavHome },
    { id: 2, title: 'Katalog', path: '/catalog', icon: NavCatalog },
    { id: 3, title: 'Savat', path: '/cart', icon: NavCart },
    { id: 4, title: 'Sevimlilar', path: '/favorite', icon: Navfavorite },
    { id: 5, title: 'Profil', path: '/profile', icon: NavProfile }
  ]
  return (
    <div className="fixed bottom-0 left-0 w-full py-[1.5vw] bg-lowlight z-50 border border-t border-blue/20">
      <div className="container flex items-center justify-between">
        {nav.map(item => (
          <Link to={item.path} className="flex flex-col items-center gap-[1vw]" key={item.id} onClick={() => switchActive(item.path)}>
            {<item.icon className={`size-[8vw] stroke-[0.5px] ${active === item.path ? 'fill-blue' : 'fill-lowdark'}`} />}
            <p className={`text-[3vw] leading-none font-tsb ${active === item.path ? 'text-blue' : 'text-lowdark'}`}>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
