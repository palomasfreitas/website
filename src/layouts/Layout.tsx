
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";




export default function Layout() {
    return (
      <div className="m-0 p-0 h-screen w-screen">      
                <Navbar />       
            <div className=" bg-gray-50 min-h-full min-w-full">
              <Outlet />
            </div>
      </div>
    );
  }