import { Link } from 'react-router-dom'
import { useState } from 'react'
const Home = (props) => {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 164 164"> <defs> <image id="img1" href="data:image/png;base64,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" /> </defs> <style></style> <use href="#img1" x="-26" y="-13" /> </svg>
  )
}

const Catalog = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m30 28.586l-4.688-4.688a8.028 8.028 0 1 0-1.415 1.414L28.586 30zM19 25a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6M2 12h8v2H2zM2 2h16v2H2zm0 5h16v2H2z"></path></svg>
  )
}

const Navfavorite = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154c.298.23.594.459.885.688c.526.415.995.778 1.448 1.043c.452.264.816.385 1.126.385c.31 0 .674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043c.29-.23.587-.458.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.474-.673-3.41-.568-5.304 1.088L14.53 6.97a.75.75 0 1 1-1.06 1.061l-2-1.999l-.01-.01c-2.058-2.14-4.224-2.335-5.836-1.598M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382c.286.22.563.434.826.642c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16a78.6 78.6 0 0 1 .826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clipRule="evenodd" /></svg>)
}

const Cart = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 32"><circle cx="10" cy="28" r="2" ></circle><circle cx="24" cy="28" r="2"></circle><path d="M28 7H5.82L5 2.8A1 1 0 0 0 4 2H0v2h3.18L7 23.2a1 1 0 0 0 1 .8h18v-2H8.82L8 18h18a1 1 0 0 0 1-.78l2-9A1 1 0 0 0 28 7m-2.8 9H7.62l-1.4-7h20.53Z"></path></svg>
  )
}

const Profile = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><g fillRule="evenodd" clipRule="evenodd"><path d="M8.25 9a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M12 6.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" /><path d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 0 0-6.558 15.773c.18-.973.535-1.89 1.246-2.628C7.753 14.791 9.454 14.25 12 14.25c2.546 0 4.247.541 5.311 1.645c.712.738 1.066 1.656 1.247 2.629A9.25 9.25 0 0 0 12 2.75m5.194 16.905c-.102-1.212-.365-2.1-.962-2.719c-.65-.673-1.853-1.186-4.232-1.186c-2.379 0-3.582.513-4.232 1.186c-.597.62-.86 1.507-.962 2.72A9.207 9.207 0 0 0 12 21.25a9.208 9.208 0 0 0 5.194-1.595" /></g></svg>
  )
}




export default function Navigation() {
  const [active, setActive] = useState(1)
  const switchActive = id => setActive(id)
  const nav = [
    { id: 1, title: 'Bosh sahifa', path: '/home', icon: Home },
    { id: 2, title: 'Katalog', path: '/catalog', icon: Catalog },
    { id: 3, title: 'Savat', path: '/cart', icon: Cart },
    { id: 4, title: 'Sevimlilar', path: '/favorite', icon: Navfavorite },
    { id: 5, title: 'Profil', path: '/profile', icon: Profile }
  ]
  return (
    <div className="fixed bottom-0 left-0 w-full py-[1.5vw] bg-white z-50 border border-t border-blue/20">
      <div className="container flex items-center justify-between">
        {nav.map(item => (
          <Link to={item.path} className="flex flex-col items-center gap-[1vw]" key={item.id} onClick={() => switchActive(item.id)}>
            {<item.icon className={`size-[6vw] stroke-[0.5px] ${active === item.id ? 'fill-blue' : 'fill-lowdark'}`} />}
            <p className={`text-[2.5vw] leading-none font-tsb ${active === item.id ? 'text-blue' : 'text-black/50'}`}>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
