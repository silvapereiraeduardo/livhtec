import React from "react";

export const TestimonialsSection: React.FC<{}> = () => {
  return (
    <section className="bg-primary-50">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-primary-800 mb-8">
          Testimonials
        </h2>
        <div className="flex flex-wrap">
          <figure className="md:flex mb-4 bg-primary-100 rounded-xl overflow-hidden p-8 md:p-0">
            <img
              className="w-24 h-24 md:w-64 md:h-auto md:rounded-none rounded-xl mx-auto"
              src={`${process.env.PUBLIC_URL}/assets/1.jpg`}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium text-primary-800 italic">
                  "The anatomy of a landing page is important, but not what
                  drives sales. Before committing to anything, people want to
                  know who has used your product and what their experience was
                  like. To gain trust, use social proof like reviews,
                  testimonials, and videos. Ideally, social proof should support
                  your marketing demands and demonstrate that you deliver what
                  you promise."
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-primary-500">Send Pulse</div>
                <div className="text-primary-700">
                  The Anatomy of the Perfect Landing Page from Title to Footer
                </div>
              </figcaption>
            </div>
          </figure>

          <figure className="md:flex mb-4 bg-primary-100 rounded-xl overflow-hidden p-8 md:p-0">
            <img
              className="w-24 h-24 md:w-64 md:h-auto md:rounded-none rounded-xl mx-auto"
              src={`${process.env.PUBLIC_URL}/assets/2.jpg`}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium text-primary-800 italic">
                  "The anatomy of a landing page is important, but not what
                  drives sales. Before committing to anything, people want to
                  know who has used your product and what their experience was
                  like. To gain trust, use social proof like reviews,
                  testimonials, and videos. Ideally, social proof should support
                  your marketing demands and demonstrate that you deliver what
                  you promise."
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-primary-500">Send Pulse</div>
                <div className="text-primary-700">
                  The Anatomy of the Perfect Landing Page from Title to Footer
                </div>
              </figcaption>
            </div>
          </figure>

          <figure className="md:flex mb-4 bg-primary-100 rounded-xl overflow-hidden p-8 md:p-0">
            <img
              className="w-24 h-24 md:w-64 md:h-auto md:rounded-none rounded-xl mx-auto"
              src={`${process.env.PUBLIC_URL}/assets/3.jpg`}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium text-primary-800 italic">
                  "The anatomy of a landing page is important, but not what
                  drives sales. Before committing to anything, people want to
                  know who has used your product and what their experience was
                  like. To gain trust, use social proof like reviews,
                  testimonials, and videos. Ideally, social proof should support
                  your marketing demands and demonstrate that you deliver what
                  you promise."
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-primary-500">Send Pulse</div>
                <div className="text-primary-700">
                  The Anatomy of the Perfect Landing Page from Title to Footer
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
