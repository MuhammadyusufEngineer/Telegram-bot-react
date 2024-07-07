import React from 'react'
export function IconAddtoCart({ isInCart }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={`relative z-40 size-[7vw] border border-blue rounded-full p-[1.5vw] ${isInCart ? "bg-blue fill-white" : "bg-white fill-blue"}`}><circle cx="10" cy="28" r="2"></circle><circle cx="24" cy="28" r="2" ></circle><path d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z"></path><path d="M18 6V2h-2v4h-4v2h4v4h2V8h4V6z"></path></svg>
  )
}
export default IconAddtoCart