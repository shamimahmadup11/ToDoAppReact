import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 md:flex md:justify-between md:items-center">
      <ul className="flex flex-col md:flex-row md:space-x-4">
        <li>
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            HideSow
          </Link>
        </li>
        <li>
          <Link to="/todo" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Todo
          </Link>
        </li>
        <li>
          <Link to="/form" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Form
          </Link>
        </li>
        <li>
          <Link to="/dragdrop" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            DragDrop
          </Link>
        </li>
        <li>
          <Link to="/imgslider" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            ImgSlider
          </Link>
        </li>
        <li>
          <Link to="/useReducer" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            UseREducer
          </Link>
        </li>
        <li>
          <Link to="/firebase" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Firbase
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
           Blog
          </Link>
        </li>
      </ul>
      <button className="md:hidden flex justify-center w-8 h-8 bg-gray-800 rounded-full hover:bg-gray-700">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="8" height="8" rx="1" fill="#fff" />
          <rect x="12" y="4" width="8" height="8" rx="1" fill="#fff" />
          <rect x="20" y="4" width="8" height="8" rx="1" fill="#fff" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;