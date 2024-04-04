import { Outlet } from "react-router-dom"
import Navigate from "./Navigate"
import Navigae from "./Navigate"

const Layout=()=>{
    return <div className="page">
        <header>
            <Navigae/>
            </header>
        <main>
         <Outlet/> 
        </main>
        <footer>footer </footer>
    </div>
   
    
  } 

  export default Layout