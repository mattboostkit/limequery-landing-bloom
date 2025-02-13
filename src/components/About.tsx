
export const About = () => {
  return (
    <section className="py-20 bg-limekiln-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-limekiln-earth mb-6">About Limekiln</h2>
          <p className="text-lg text-limekiln-stone mb-8">
            Nestled in the heart of Sussex, Limekiln offers a unique blend of historic charm and modern amenities. 
            Our venue provides the perfect setting for weddings, corporate events, and special celebrations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Historic Venue", description: "Rich in heritage and character" },
              { title: "Beautiful Gardens", description: "Perfect for outdoor ceremonies" },
              { title: "Flexible Spaces", description: "Accommodating up to 150 guests" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-limekiln-earth mb-3">{feature.title}</h3>
                <p className="text-limekiln-stone">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-4">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                alt="The Lodge"
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end transition-opacity opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white mb-2">The Lodge</h3>
                <p className="text-white/90">
                  Explore our spaces for partying, experiencing new things, starting conversations and celebrating milestones.
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                alt="Private Takeovers"
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end transition-opacity opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white mb-2">Private Takeovers</h3>
                <p className="text-white/90">
                  Gather great people and create meaningful moments in our exclusive setting.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                alt="Weddings"
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end transition-opacity opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white mb-2">Weddings</h3>
                <p className="text-white/90">
                  Host it your way in our versatile spaces that can accommodate up to 195 guests.
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Eat & Drink"
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end transition-opacity opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white mb-2">Eat & Drink</h3>
                <p className="text-white/90">
                  Enjoy culinary delights from our foodie partners, all passionate about delicious ingredients and creative cooking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
