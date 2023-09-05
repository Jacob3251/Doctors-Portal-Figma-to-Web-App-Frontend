import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li className="text-[16px] font-semibold hover:drop-shadow-md rounded-md hover:bg-accent">
        <Link className="hover:text-white" to="/">
          {" "}
          Home
        </Link>{" "}
      </li>
      <li className="text-[16px] font-semibold hover:drop-shadow-md rounded-md hover:bg-accent">
        <Link className="hover:text-white" to="/about">
          {" "}
          About
        </Link>{" "}
      </li>
      <li className="text-[16px] font-semibold hover:drop-shadow-md rounded-md hover:bg-accent">
        <Link className="hover:text-white" to="/appointment">
          {" "}
          Appointment
        </Link>{" "}
      </li>
      <li className="text-[16px] font-semibold hover:drop-shadow-md rounded-md hover:bg-accent">
        <Link className="hover:text-white" to="/reviews">
          {" "}
          Reviews
        </Link>{" "}
      </li>
      <li className="text-[16px] font-semibold hover:drop-shadow-md rounded-md hover:bg-accent">
        <Link className="hover:text-white" to="/contact">
          {" "}
          Contact Us
        </Link>{" "}
      </li>
      <li className="text-[16px] font-semibold hover:drop-shadow-md rounded-md hover:bg-primary">
        <Link className="hover:text-white" to="/login">
          {" "}
          Login
        </Link>{" "}
      </li>
    </>
  );
  return (
    <div className="navbar  flex justify-between">
      <div className="navbar-start flex justify-between  w-full lg:w-auto">
        <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
