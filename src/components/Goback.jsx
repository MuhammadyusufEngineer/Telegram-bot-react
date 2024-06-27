import { useNavigate } from "react-router-dom";
import { IconChevronRight } from '@/components/icons/iconChevronRight'

const Goback = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(-1)} className="absolute top-1/2 -translate-y-1/2 left-[2.5vw] size-[8vw]"> <IconChevronRight className="size-full rotate-180" /> </button>
  )
}
export default Goback