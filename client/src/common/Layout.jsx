import { Outlet } from "react-router-dom"
import ResponsiveAppBar from "../NavBar"

const Layout = () => {
  return <div >

    <ResponsiveAppBar />
    <Outlet />

  </div>


}

export default Layout