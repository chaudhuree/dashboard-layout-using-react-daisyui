import { TfiDashboard } from "react-icons/tfi";
import { GrTransaction } from "react-icons/gr";
import { BsCashStack } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

import { NavLink } from "react-router-dom";
const links = [
  { to: "/", name: "Dashboard", icon: TfiDashboard },
  { to: "/transactions", name: "Transactions", icon: GrTransaction },
];

const DrawerComponent = ({ children }) => {
  return (
    <div className="drawer">
      <input id="drawer-item" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar lg:hidden flex border-b border-[#323a49] w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="drawer-item"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Navbar Title</div>
        </div>
        {/* Page content here */}
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <div className="hidden lg:flex lg:w-[20%] bg-[#212631] ">
            <ul className="menu w-full px-0 py-0 flex flex-col">
              <div className="text-white text-2xl py-4 text-center border-b mb-2 border-[#323a49] flex items-center gap-2 justify-center">
                <BsCashStack className="text-white " /> QuickShare
              </div>

              <div className="flex-1 overflow-y-scroll">
                {links.map((link) => (
                  <li key={link.to} className="mb-1 px-2">
                    <NavLink
                      className="nav-link flex gap-2 items-center"
                      to={link.to}
                    >
                      <link.icon className="text-gray-400 text-lg self-end nav-icon" />
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </div>
              <div className=" text-2xl py-2   border-t  border-[#323a49] flex items-center gap-2 justify-end">
                <CiLogout className="text-gray-400 hover:text-white mr-8" />
              </div>
            </ul>
          </div>
          {/* Main content */}
          <div className="drawer-content bg-[#F3F4F7] lg:w-[80%] w-full p-6">
            {children}
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer-item"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu  min-h-full w-80 bg-[#212631] flex flex-col">
          <div className="text-white text-2xl py-4 text-center border-b mb-2 border-[#323a49] flex items-center gap-2 justify-center">
            <BsCashStack className="text-white font-semibold" />
            QuickShare
          </div>
          {/* Sidebar content here */}

          <div className="flex-1">
            {links.map((link) => (
              <li key={link.to} className="mb-1 p-2">
                <NavLink
                  className="nav-link flex gap-2 items-center"
                  to={link.to}
                >
                  <link.icon className="text-white text-lg self-end" />
                  {link.name}
                </NavLink>
              </li>
            ))}
          </div>

          <div className=" text-2xl py-2   border-t  border-[#323a49] flex items-center gap-2 justify-end">
            <CiLogout className="text-gray-400 hover:text-white mr-8" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DrawerComponent;
