"use client";
import { useEffect } from "react";

export const InstagramFeed = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Instagram Post 1 */}
          <div className="aspect-square w-full">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/C3VXvUuI5Uf/"
              data-instgrm-version="14"
              style={{ 
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: 'calc(100% - 2px)'
              }}
            >
            </blockquote>
          </div>
          
          {/* Instagram Post 2 */}
          <div className="aspect-square w-full">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/C3QfFkxI0Ys/"
              data-instgrm-version="14"
              style={{ 
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: 'calc(100% - 2px)'
              }}
            >
            </blockquote>
          </div>
          
          {/* Instagram Post 3 */}
          <div className="aspect-square w-full hidden lg:block">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/C3LhELzIuFI/"
              data-instgrm-version="14"
              style={{ 
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: 'calc(100% - 2px)'
              }}
            >
            </blockquote>
          </div>
          
          {/* Instagram Post 4 */}
          <div className="aspect-square w-full hidden lg:block">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/C3GiRdJIjpG/"
              data-instgrm-version="14"
              style={{ 
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: 'calc(100% - 2px)'
              }}
            >
            </blockquote>
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
