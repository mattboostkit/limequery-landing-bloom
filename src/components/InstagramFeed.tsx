"use client";

export const InstagramFeed = () => {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E34000] mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-limekiln-stone text-base sm:text-lg mb-8">
            @limekilnsussex
          </p>
        </div>
        
        <div className="flex justify-center">
          <iframe
            src="https://www.instagram.com/limekilnsussex/embed"
            className="w-full max-w-3xl aspect-square"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
          ></iframe>
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
