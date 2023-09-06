import React from "react";

export const HeroSection: React.FC<{}> = () => {
  return (
    <div className="py-20 gradient">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-2 text-white">Hero Banner</h2>
            <h3 className="text-2xl mb-8 text-primary-200">
              hero banner is a term used to describe an oversized image of a
              product. In this concept, e-commerces use images with the
              appropriate zoom to highlight the main characteristics of that
              merchandise accompanied by banners next to the image.
            </h3>

            <button className="bg-white border-primary-700 text-primary-700 font-semibold rounded-xl py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-primary-50">
              Action Button
            </button>
          </div>

          <div>
            <img
              className="mx-auto max-h-96 p-2"
              src={`${process.env.PUBLIC_URL}/assets/undraw_team_up_re_84ok.svg`}
              alt="Monitoring"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
