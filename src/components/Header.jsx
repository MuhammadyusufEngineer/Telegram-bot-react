import Goback from '@/components/Goback'

const Header = ({ child }) => {
  return (
    <div className="sticky top-[15.5vw] left-0 w-full bg-lowlight py-[2vw] z-50 border-b border-solid border-lowdark">
      <Goback />
      <div className="px-[10vw]">
        <p className="text-center text-[6vw] text-blue font-tm flex-1 capitalize">{child}</p>
      </div>
    </div>
  )
}

export default Header