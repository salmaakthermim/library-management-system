import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-sky-400 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center text-center">
          <Link to="/" className="text-3xl font-bold text-blue-700 dark:text-white flex items-center gap-1">
            📚 Libra<span className="text-black dark:text-blue-400">Track</span>
          </Link>

          <nav className="flex flex-wrap justify-center mt-6 gap-4 text-sm">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              All Books
            </Link>
            <Link
              to="/add-books"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Add Books
            </Link>
            <Link
              to="/borrow-summary"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Borrow Summary
            </Link>
          </nav>
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2025 LibraTrack. All rights reserved.</p>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Reddit"
              title="Reddit"
            >
              <i className="fab fa-reddit text-xl"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Facebook"
              title="Facebook"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
              title="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
