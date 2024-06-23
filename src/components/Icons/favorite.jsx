import React from 'react'

export function Favorite({ isFavorite }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-[4vw] cursor-pointer stroke-blue" viewBox="0 0 32 32"><path className={isFavorite ? 'fill-blue' : 'fill-lowlight'} strokeWidth="3px" d="M22.5 4c-2 0-3.9.8-5.3 2.2L16 7.4l-1.1-1.1c-2.9-3-7.7-3-10.6-.1l-.1.1c-3 3-3 7.8 0 10.8L16 29l11.8-11.9c3-3 3-7.8 0-10.8C26.4 4.8 24.5 4 22.5 4"></path></svg>
  )
}
export default Favorite