export const About = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#F8F2E0]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E34000] mb-4 sm:mb-6">About Limekiln</h2>
          <p className="text-base sm:text-lg text-limekiln-stone mb-6 sm:mb-8">
            Nestled in the heart of Sussex, Limekiln offers a unique blend of historic charm and modern amenities. 
            Our venue provides the perfect setting for weddings, corporate events, and special celebrations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12">
            {[
              { title: "Historic Venue", description: "Rich in heritage and character" },
              { title: "Beautiful Gardens", description: "Perfect for outdoor ceremonies" },
              { title: "Flexible Spaces", description: "Accommodating up to 150 guests" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-limekiln-earth mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-limekiln-stone">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 sm:mt-20">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-4">
            {[
              {
                src: "/lovable-uploads/0565d05c-dc42-4551-87e3-54ace4f6d2de.png",
                alt: "The Lodge",
                title: "The Lodge",
                description: "Explore our spaces for partying, experiencing new things, starting conversations and celebrating milestones."
              },
              {
                src: "/lovable-uploads/20d290d2-30bc-44cc-bc90-0c49c57a6418.png",
                alt: "Private Takeovers",
                title: "Private Takeovers",
                description: "Gather great people and create meaningful moments in our exclusive setting."
              }
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl bg-gray-100">
                <img 
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            {[
              {
                src: "/lovable-uploads/c9d69acb-9503-4787-9a80-6dbc4f5dda56.png",
                alt: "Weddings",
                title: "Weddings",
                description: "Host it your way in our versatile spaces that can accommodate up to 195 guests."
              },
              {
                src: "/lovable-uploads/2bbab274-0bcc-49e3-8cc6-0b7ca1fa4454.png",
                alt: "Eat & Drink",
                title: "Eat & Drink",
                description: "Enjoy culinary delights from our foodie partners, all passionate about delicious food and drink."
              }
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl bg-gray-100">
                <img 
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-[250px] sm:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-white/90">
                    {item.description}
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
