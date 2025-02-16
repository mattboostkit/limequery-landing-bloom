"use client";

export const InstagramFeed = () => {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E34000] mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-limekiln-stone text-base sm:text-lg">
            @limekilnsussex
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Instagram Post 1 */}
          <div className="aspect-square w-full">
            <iframe
              className="w-full h-full"
              src="https://www.instagram.com/p/C3VXvUuI5Uf/embed"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              loading="lazy"
            ></iframe>
          </div>
          
          {/* Instagram Post 2 */}
          <div className="aspect-square w-full">
            <iframe
              className="w-full h-full"
              src="https://www.instagram.com/p/C3QfFkxI0Ys/embed"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              loading="lazy"
            ></iframe>
          </div>
          
          {/* Instagram Post 3 */}
          <div className="aspect-square w-full hidden lg:block">
            <iframe
              className="w-full h-full"
              src="https://www.instagram.com/p/C3LhELzIuFI/embed"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              loading="lazy"
            ></iframe>
          </div>
          
          {/* Instagram Post 4 */}
          <div className="aspect-square w-full hidden lg:block">
            <iframe
              className="w-full h-full"
              src="https://www.instagram.com/p/C3GiRdJIjpG/embed"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://www.instagram.com/limekilnsussex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#E34000] text-white rounded-lg hover:bg-[#E34000]/90 transition-colors text-base sm:text-lg"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
