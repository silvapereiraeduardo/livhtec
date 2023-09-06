import React from "react";

export const LeftAlignedCallToAction: React.FC<{}> = () => {
  return (
    <section className="bg-primary-600">
      <div className="container mx-auto px-6 text-left py-20">
        <h2 className="mb-2 text-4xl font-bold text-left text-white">
          Left Aligned Call To Action
        </h2>
        <h3 className="mb-8 text-2xl text-primary-200">
          Call to action (CTA) is a marketing term for any design to prompt an
          immediate response or encourage an immediate sale. A CTA most often
          refers to the use of words or phrases that can be incorporated into
          sales scripts, advertising messages, or web pages, which compel an
          audience to act in a specific way.[
        </h3>
        <button className="bg-white border-primary-700 text-primary-700 font-semibold rounded-xl py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-primary-50">
          Action Button
        </button>
      </div>
    </section>
  );
};
