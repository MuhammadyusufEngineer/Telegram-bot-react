import { useNavigate } from "react-router-dom";
import { IconChevronRight } from '@/components/icons/iconChevronRight'

const Goback = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(-1)} className=""> <IconChevronRight className="size-[10vw] rotate-180" /> </button>
  )
}
export default Goback