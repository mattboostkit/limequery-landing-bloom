import { Testimonial } from "../types";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Limekiln made our wedding magical. The venue was perfect and the staff went above and beyond!",
      author: "Sarah & James",
      role: "Wedding Couple"
    },
    {
      quote: "Our corporate retreat was a huge success thanks to Limekiln's amazing facilities and service.",
      author: "TechStart Inc.",
      role: "Corporate Client"
    },
    {
      quote: "The perfect blend of rustic charm and modern amenities. Our event was flawless!",
      author: "Emily R.",
      role: "Private Event Host"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F8F2E0]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E34000] mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-[#E34000]/20 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-limekiln-stone mb-4 italic text-sm sm:text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-limekiln-earth text-base sm:text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-limekiln-stone/80 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
