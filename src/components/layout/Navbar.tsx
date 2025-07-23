import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="p-4 bg-sky-400 dark:text-gray-800">
      <div className="container flex justify-between h-14 mx-auto">
        <a className="flex items-center px-2 font-bold text-2xl text-blue-700">
          📚 Libra<p className="text-black">Track</p>
        </a>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 border-blue-700 text-blue-700 font-semibold dark:border-"
                  : "flex items-center px-4 -mb-1 border-b-2 dark:border-"
              }
            >
              All Books
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/add-books"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 border-blue-700 text-blue-700 font-semibold dark:border-"
                  : "flex items-center px-4 -mb-1 border-b-2 dark:border-"
              }
            >
              Add Book
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/borrow-summary"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "flex items-center px-4 -mb-1 border-b-2 border-blue-700 text-blue-700 font-semibold dark:border-"
                  : "flex items-center px-4 -mb-1 border-b-2 dark:border-"
              }
            >
              Borrow Summary
            </NavLink>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
