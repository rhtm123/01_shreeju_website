import Link from "next/link";

import { FiMenu } from "react-icons/fi";


function Navbar(){


    return (
  <>

{/* <div id="banner" tabIndex="-1" className="z-50 bg-primary opacity-90 flex justify-center w-full px-4 py-3 border-b border-gray-200 lg:py-4">
      <div className="items-center md:flex">
        <p className="text-sm font-medium md:my-0">
          <span className="bg-base-300 text-base-100 text-xs font-semibold mr-2 px-1 py-0.5 rounded hidden md:inline">NEW</span>
          Join Our Scholarship Program.
            <Link href="/scholarship-program/" className="inline-flex items-center ml-2 text-sm font-medium text-primary md:ml-2 hover:underline">
              Check it out
              <svg className="w-3 h-3 ml-1.5 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
            </Link>
        </p>
      </div>
  </div> */}


<div className="navbar bg-primary text-base-100 border-b">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <FiMenu size={24} />
      </div>

      {/* mobile screen */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
        <li><a href="#services">Services</a></li>
        <li><a href="#whyus">Why Us</a></li>

      </ul>
      {/* mobile screen */}


    </div>
    <a className="btn btn-ghost text-xl">Shreeju Investments</a>
  </div>


        {/* permanent for all screeen */}
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1 hidden lg:flex">
  <li><a href="#services">Services</a></li>
  <li><a href="#whyus">Why Us</a></li>

    </ul>


    {/* <a className="btn">Button</a> */}
  </div>

</div>

</>
    )
}

export default Navbar