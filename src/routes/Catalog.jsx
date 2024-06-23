const Catalog = ({data}) => {
  return (
    <>
      {data.map(item => (
        <div className="w-[17vw]" key={item.category}>
          <div className="size-[17vw] rounded-xl bg-lowlight p-[2vw]">
            <img src={item.img} alt={item.category} />
          </div>
          <p className="text-primary text-[3.5vw] text-center mt-[2vw] capitalize">{item.category}</p>
        </div>
      ))}
    </>
  )
}
export default Catalog