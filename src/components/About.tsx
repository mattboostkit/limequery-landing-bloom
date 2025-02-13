
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
    </section>
  );
};
