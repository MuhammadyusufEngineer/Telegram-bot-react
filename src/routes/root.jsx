import Search from '@/components/Search.jsx';
import Navigation from '@/components/Navigation';
import { getData } from '@/constants/db'
import { Outlet } from "react-router-dom";
const data = getData()

const Root = () => {
  return (
    <>
      <Search data={data}/>
      <Outlet />
      <Navigation data={data}/>
    </>
  );
}
export default Root;
