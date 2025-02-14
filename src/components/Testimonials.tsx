import { Testimonial } from "../types";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Limekiln made our wedding magical. The venue was perfect and the staff went above and beyond!",
      author: "Sarah & James"
    },
    {
      quote: "Our corporate retreat was a huge success thanks to Limekiln's amazing facilities and service.",
      author: "TechStart Inc."
    },
    {
      quote: "The perfect blend of rustic charm and modern amenities. Our event was flawless!",
      author: "Emily R."
    }
  ];

  return (
    <section className="py-20 bg-[#F8F2E0]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#E34000] mb-6">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-limekiln-stone mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-limekiln-earth">
                  – {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
