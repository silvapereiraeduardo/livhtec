import React from "react";

export const FeaturiesSection: React.FC<{}> = () => {
  return (
    <section id="features" className="container mx-auto px-6 p-10">
      <h2 className="text-4xl font-bold text-center text-primary-800 mb-8">
        Features
      </h2>
      <div className="flex items-center flex-wrap mb-4">
        <div className="hidden md:block md:w-1/2">
          <img
            className="max-h-96 mx-auto p-2"
            src={`${process.env.PUBLIC_URL}/assets/undraw_educator_re_ju47.svg`}
            alt="what are features?"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h4 className="text-3xl text-primary-800 font-bold mb-3">
            what are features?
          </h4>
          <p className="text-primary-800 mb-8">
            Features are functionalities or resources developed by a team of
            people, usually from digital products and platforms, whose purpose
            is to add a new delivery of value and experience for its users. The
            features are defined according to the company's mission and strategy
            and are created according to the users' needs.
          </p>
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-4">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-primary-800 font-bold mb-3">
            what are features?
          </h4>
          <p className="text-primary-800 mb-8">
            Features are functionalities or resources developed by a team of
            people, usually from digital products and platforms, whose purpose
            is to add a new delivery of value and experience for its users. The
            features are defined according to the company's mission and strategy
            and are created according to the users' needs.
          </p>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            className="max-h-96 mx-auto p-2"
            src={`${process.env.PUBLIC_URL}/assets/undraw_team_up_re_84ok.svg`}
            alt="what are features?"
          />
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-4">
        <div className="hidden md:block md:w-1/2">
          <img
            className="max-h-96 mx-auto p-2"
            src={`${process.env.PUBLIC_URL}/assets/undraw_educator_re_ju47.svg`}
            alt="what are features?"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h4 className="text-3xl text-primary-800 font-bold mb-3">
            what are features?
          </h4>
          <p className="text-primary-800 mb-8">
            Features are functionalities or resources developed by a team of
            people, usually from digital products and platforms, whose purpose
            is to add a new delivery of value and experience for its users. The
            features are defined according to the company's mission and strategy
            and are created according to the users' needs.
          </p>
        </div>
      </div>
    </section>
  );
};
