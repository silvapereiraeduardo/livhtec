// import { useDarkMode } from "../hooks/useDarkMode";

export const Navbar: React.FC<{}> = () => {
  // const { toggleDarkMode } = useDarkMode();

  return (
    <nav>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a className="font-bold text-2xl py-2 lg:text-4xl bg-white" href="#">
          <img
            src={`${process.env.PUBLIC_URL}/assets/customcolor_textlogo_transparent_background_1.png`}
            alt="Logo Livhtec"
            className="h-8"
          />
        </a>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-primary-500 border-primary-600 hover:text-primary-800 hover:border-teal-500 appearance-none focus:outline-none">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:block">
          <ul className="inline-flex">
            <li>
              <a
                className="block bg-white border-primary-700 text-primary-700 font-semibold text-xs rounded-xl py-2 px-4 uppercase hover:bg-primary-50"
                href="#"
              >
                Link 1
              </a>
            </li>
            <li>
              <a
                className="block bg-white border-primary-700 text-primary-700 font-semibold text-xs rounded-xl py-2 px-4 uppercase hover:bg-primary-50"
                href="#"
              >
                Link 2
              </a>
            </li>
            <li>
              <a
                className="block bg-white border-primary-700 text-primary-700 font-semibold text-xs rounded-xl py-2 px-4 uppercase hover:bg-primary-50"
                href="#"
              >
                Link 3
              </a>
            </li>
            {/* <li>
              <button
                className="bg-white border-primary-700 text-primary-700 font-semibold text-sm rounded-xl py-2 px-4 uppercase hover:bg-primary-50"
                onClick={toggleDarkMode}
              >
                Toggle Dark Mode
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
