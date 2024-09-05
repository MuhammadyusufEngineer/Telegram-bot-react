import Goback from '@/components/Goback'

const Header = ({ child }) => {
  return (
    <div className="sticky top-[14.2vw] left-0 w-full bg-lowlight py-[1vw] z-50 border-b border-solid border-lowdark">
      <div className="relative">
        <Goback />
        <div className="px-[10vw]">
          <p className="text-center text-[5vw] text-blue font-tm flex-1 capitalize">{child}</p>
        </div>
      </div>
    </div>
  )
}

export default Header