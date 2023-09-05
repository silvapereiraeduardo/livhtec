import React from "react";
import "./App.css";
//import Gif from "./assets/animation_Contrast_prxs1mue.gif";

const LOGO_URL = `${process.env.PUBLIC_URL}/assets/black_icon_transparent_background.png`;

function App() {
  const toggleDarkMode = () => {
    const html = document.querySelector("html");
    html?.classList.toggle("dark");
  };

  return (
    <>
      <nav>
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <a className="font-bold text-2xl lg:text-4xl" href="#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/customcolor_textlogo_transparent_background_1.png`}
              alt="Logo Livhtec"
              className="h-12"
            />
          </a>

          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
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
                <a className="px-4 font-bold" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="px-4 hover:text-gray-800" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="px-4 hover:text-gray-800" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="py-20 gradient">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-around flex-wrap">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-2 text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h2>
              <h3 className="text-2xl mb-8 text-gray-200">
                Est aliquam quod labore fugiat optio velit, iste incidunt
                perferendis omnis deleniti corrupti libero laborum placeat
                doloribus odio dolorem maiores enim. Recusandae!
              </h3>

              <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                Lorem ipsum
              </button>
            </div>

            <div className="">
              <img
                className="mx-auto p-2"
                src={`${process.env.PUBLIC_URL}/assets/undraw_team_up_re_84ok.svg`}
                alt="Monitoring"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Lorem ipsum dolor sit
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Lorem ipsum dolor sit
            </h4>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              recusandae illum voluptates at, omnis voluptatibus? Laboriosam
              dicta nulla debitis aliquam excepturi, sunt quibusdam rem fuga
              quos optio sed. Enim, et?
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="w-full p-2"
              src={`${process.env.PUBLIC_URL}/assets/undraw_online_test_re_kyfx.svg`}
              alt="Monitoring"
            />
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img
              className="w-full p-2"
              src={`${process.env.PUBLIC_URL}/assets/undraw_educator_re_ju47.svg`}
              alt="Reporting"
            />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Lorem ipsum dolor sit
            </h4>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              recusandae illum voluptates at, omnis voluptatibus? Laboriosam
              dicta nulla debitis aliquam excepturi, sunt quibusdam rem fuga
              quos optio sed. Enim, et?
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Lorem ipsum dolor sit
            </h4>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              recusandae illum voluptates at, omnis voluptatibus? Laboriosam
              dicta nulla debitis aliquam excepturi, sunt quibusdam rem fuga
              quos optio sed. Enim, et?
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="w-full p-2"
              src={`${process.env.PUBLIC_URL}/assets/undraw_team_up_re_84ok.svg`}
              alt="Syncing"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Testimonials
          </h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident recusandae illum voluptates at, omnis voluptatibus?
                  Laboriosam dicta nulla debitis aliquam excepturi, sunt
                  quibusdam rem fuga quos optio sed. Enim, et?
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  Lorem ipsum dolor sit
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident recusandae illum voluptates at, omnis voluptatibus?
                  Laboriosam dicta nulla debitis aliquam excepturi, sunt
                  quibusdam rem fuga quos optio sed. Enim, et?
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  Lorem ipsum dolor sit
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident recusandae illum voluptates at, omnis voluptatibus?
                  Laboriosam dicta nulla debitis aliquam excepturi, sunt
                  quibusdam rem fuga quos optio sed. Enim, et?
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  Lorem ipsum dolor sit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-700">
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Lorem ipsum dolor sit
          </h2>
          <h3 className="my-4 text-2xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h3>
          <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
            Lorem ipsum
          </button>
        </div>
      </section>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-6 pt-10 pb-6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 text-center md:text-left">
              <h5 className="uppercase mb-6 font-bold">Links</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-primary-900"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-primary-900"
                  >
                    Help
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-primary-900"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left">
              <h5 className="uppercase mb-6 font-bold">Legal</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-primary-900"
                  >
                    Terms
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-primary-900"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left">
              <h5 className="uppercase mb-6 font-bold">Social</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-primary-900"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-primary-900"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-primary-900"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left">
              <h5 className="uppercase mb-6 font-bold">Company</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-primary-900"
                  >
                    Official Blog
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-primary-900"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="hover:underline text-gray-600 hover:text-primary-900"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
