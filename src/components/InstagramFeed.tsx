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
        
        <style jsx global>{`
          .instagram-button {
            background-color: #E34000 !important;
            border: none !important;
            color: white !important;
          }
        `}</style>
      </div>
    </section>
  );
};
