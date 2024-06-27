export default function Search() {
  return (
    <>
      <div className="sticky top-0 bg-lowlight py-[2vw] border-b border-lowdark z-50">
        <div className="container bg-white flex items-center gap-[2vw] p-[2vw] rounded-lg">
          <img src="/search.png" className="h-[5vw]" alt="" />
          <input type="text" className="text-[5vw] font-tm border-none outline-none flex-1 bg-inherit" placeholder="Mahsulot va turkumlar izlash" />
        </div>
      </div>
    </>
  )
}