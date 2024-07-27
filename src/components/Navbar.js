import Link from "next/link";

import { FiMenu } from "react-icons/fi";


function Navbar(){


    return (
  <>



<div className="navbar bg-primary text-white border-b">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <FiMenu size={24} />
      </div>

      {/* mobile screen */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
    <a className="btn btn-ghost text-xl">
      <img width={36} src="/images/logo.png" />
      Shreeju Investments
      
      </a>

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