import React from "react";

export const HeroSection: React.FC<{}> = () => {
  return (
    <section className="gradient dark:gradient-dark">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary-900 dark:text-white">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-primary-900 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis, voluptatem. Explicabo consequuntur ipsum dolores
            obcaecati quia, qui doloribus illo ipsa eligendi tempore animi,
            quaerat minima nemo sunt recusandae. Necessitatibus, iusto!
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg text-primary-900 border-primary-900 dark:text-white dark:border-white focus:ring-4"
          >
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            alt="Livhtec Logo"
            className="dark:hidden"
            src={`${process.env.PUBLIC_URL}/assets/black_logo_transparent_background.png`}
          />

          <img
            alt="Livhtec Logo"
            className="hidden dark:block"
            src={`${process.env.PUBLIC_URL}/assets/white_logo_transparent_background.png`}
          />
        </div>
      </div>
    </section>
  );
};
