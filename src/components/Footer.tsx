import React from "react";

export const Footer: React.FC<{}> = () => {
  return (
    <footer className="bg-primary-900">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-white">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-white">
                  FAQ
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-white">
                  Help
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-white">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-white">
                  Terms
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-white">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-white">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-white">
                  Facebook
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-white">
                  Linkedin
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-white">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-white">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-white">
                  Official Blog
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-white">
                  About Us
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary-950">
        <div className="container mx-auto px-6 pt-2 pb-2">
          <a href="#" className="text-white text-sm">
            &copy; 2023 Eduardo Silva Pereira
          </a>
        </div>
      </div>
    </footer>
  );
};
