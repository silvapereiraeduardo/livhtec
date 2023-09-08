import React from "react";

export const Header: React.FC<{}> = () => {
  const [menuOpened, setMenuOpened] = React.useState(false);

  const onToggleMenu = () => {
    setMenuOpened((value) => !value);
  };

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center container mx-auto my-4">
        <div className="flex justify-center items-center">
          <img
            alt="Livhtec Logo"
            className="mr-3 h-6 sm:h-9 dark:hidden"
            src={`${process.env.PUBLIC_URL}/assets/black_icon_transparent_background.png`}
          />

          <img
            alt="Livhtec Logo"
            className="mr-3 h-6 sm:h-9 hidden dark:block"
            src={`${process.env.PUBLIC_URL}/assets/white_icon_transparent_background.png`}
          />

          <span className="self-center whitespace-nowrap text-xl font-semibold uppercase dark:text-white">
            Livhtec
          </span>
        </div>

        <div
          data-menu={!!menuOpened ? "opened" : "closed"}
          className="nav-links duration-500 absolute bg-white w-full flex items-center px-6 left-0 top-[-100%] data-[menu=opened]:top-16 md:min-h-fit md:w-auto md:static"
        >
          <ul className="flex flex-col w-full gap-2 md:items-center md:gap-6 md:flex-row">
            <li className="mb-4 md:mb-0">
              <a className="hover:text-gray-500" href="#products">
                Products
              </a>
            </li>
            <li className="mb-4 md:mb-0">
              <a className="hover:text-gray-500" href="#features">
                Features
              </a>
            </li>
            <li className="mb-4 md:mb-0">
              <a className="hover:text-gray-500" href="#resource">
                Resource
              </a>
            </li>
            <li className="mb-4 md:mb-0">
              <a className="hover:text-gray-500" href="#developers">
                Developers
              </a>
            </li>
            <li className="mb-4 md:mb-0">
              <a className="hover:text-gray-500" href="#pricing">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6 md:hidden">
          <button
            onClick={() => onToggleMenu()}
            className="text-3xl cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-menu={!!menuOpened ? "opened" : "closed"}
              className="hidden data-[menu=closed]:block w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-menu={!!menuOpened ? "opened" : "closed"}
              className="hidden data-[menu=opened]:block w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
