import React from "react";
import "./App.css";
//import Gif from "./assets/animation_Contrast_prxs1mue.gif";

function App() {
  // const toggleDarkMode = () => {
  //   const html = document.querySelector("html");
  //   html?.classList.toggle("dark");
  // };

  return (
    <>
      <nav>
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <a className="font-bold text-2xl py-2 lg:text-4xl bg-white" href="#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/customcolor_textlogo_transparent_background_1.png`}
              alt="Logo Livhtec"
              className="h-12"
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
                  className="px-4 py-2 bg-white border-primary-700 text-primary-700 font-semibold text-sm rounded-xl py-2 px-4 uppercase hover:bg-primary-50"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 bg-white border-primary-700 text-primary-700 font-semibold text-sm rounded-xl py-2 px-4 uppercase hover:bg-primary-50"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 bg-white border-primary-700 text-primary-700 font-semibold text-sm rounded-xl py-2 px-4 uppercase hover:bg-primary-50"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="py-20 gradient">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-2 text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h2>
              <h3 className="text-2xl mb-8 text-primary-200">
                Est aliquam quod labore fugiat optio velit, iste incidunt
                perferendis omnis deleniti corrupti libero laborum placeat
                doloribus odio dolorem maiores enim. Recusandae!
              </h3>

              <button className="bg-white border-primary-700 text-primary-700 font-semibold rounded-xl py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-primary-50">
                Lorem ipsum
              </button>
            </div>

            <div>
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
        <h2 className="text-4xl font-bold text-center text-primary-800 mb-8">
          Lorem ipsum dolor sit
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-primary-800 font-bold mb-3">
              Lorem ipsum dolor sit
            </h4>
            <p className="text-primary-800 mb-8">
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
            <h4 className="text-3xl text-primary-800 font-bold mb-3">
              Lorem ipsum dolor sit
            </h4>
            <p className="text-primary-800 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              recusandae illum voluptates at, omnis voluptatibus? Laboriosam
              dicta nulla debitis aliquam excepturi, sunt quibusdam rem fuga
              quos optio sed. Enim, et?
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-primary-800 font-bold mb-3">
              Lorem ipsum dolor sit
            </h4>
            <p className="text-primary-800 mb-8">
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

      <section className="bg-primary-50">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-primary-800 mb-8">
            Testimonials
          </h2>
          <div className="flex flex-wrap">
            <figure className="md:flex mb-4 bg-primary-100 rounded-xl overflow-hidden p-8 md:p-0 dark:bg-primary-800">
              <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-xl mx-auto"
                src={`${process.env.PUBLIC_URL}/assets/1.jpg`}
                alt=""
                width="384"
                height="512"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium text-primary-800 italic">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui sed, nulla laboriosam ipsam, nam accusantium cum
                    officiis minus quis ut mollitia eum, eos autem harum totam
                    culpa. Quasi, ullam rerum?"
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-primary-500 dark:text-primary-400">
                    Lorem ipsum
                  </div>
                  <div className="text-primary-700 dark:text-primary-500">
                    sit amet consectetur
                  </div>
                </figcaption>
              </div>
            </figure>

            <figure className="md:flex mb-4 bg-primary-100 rounded-xl overflow-hidden p-8 md:p-0 dark:bg-primary-800">
              <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-xl mx-auto"
                src={`${process.env.PUBLIC_URL}/assets/2.jpg`}
                alt=""
                width="384"
                height="512"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium text-primary-800 italic">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui sed, nulla laboriosam ipsam, nam accusantium cum
                    officiis minus quis ut mollitia eum, eos autem harum totam
                    culpa. Quasi, ullam rerum?"
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-primary-500 dark:text-primary-400">
                    Lorem ipsum
                  </div>
                  <div className="text-primary-700 dark:text-primary-500">
                    sit amet consectetur
                  </div>
                </figcaption>
              </div>
            </figure>

            <figure className="md:flex mb-4 bg-primary-100 rounded-xl overflow-hidden p-8 md:p-0 dark:bg-primary-800">
              <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-xl mx-auto"
                src={`${process.env.PUBLIC_URL}/assets/3.jpg`}
                alt=""
                width="384"
                height="512"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium text-primary-800 italic">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui sed, nulla laboriosam ipsam, nam accusantium cum
                    officiis minus quis ut mollitia eum, eos autem harum totam
                    culpa. Quasi, ullam rerum?"
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-primary-500 dark:text-primary-400">
                    Lorem ipsum
                  </div>
                  <div className="text-primary-700 dark:text-primary-500">
                    sit amet consectetur
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-primary-600">
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-2 text-4xl font-bold text-center text-white">
            Lorem ipsum dolor sit
          </h2>
          <h3 className="mb-8 text-2xl text-primary-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h3>
          <button className="bg-white border-primary-700 text-primary-700 font-semibold rounded-xl py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-primary-50">
            Lorem ipsum
          </button>
        </div>
      </section>

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
      </footer>
    </>
  );
}

export default App;
