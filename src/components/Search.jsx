import IconSearch from "../assets/Icons/IconSearch"

export default function Search() {
  return (
    <>
      <div className="sticky top-0 bg-white pt-[3vw] z-50">
        <div className="container bg-lowlight flex items-center gap-[2vw] p-[2vw] rounded-lg">
          <IconSearch />
          <input type="text" className="border-none outline-none flex-1 bg-inherit" placeholder="Mahsulot va turkumlar izlash" />
        </div>
      </div>
    </>
  )
}