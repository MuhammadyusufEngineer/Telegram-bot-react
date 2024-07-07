import Search from '@/components/Search.jsx';
import Navigation from '@/components/Navigation';
import { Outlet } from "react-router-dom";

const Root = ({ data }) => {
  return (
    <>
      <Search data={data} />
      <Outlet />
      <Navigation data={data} />
    </>
  );
}
export default Root;
