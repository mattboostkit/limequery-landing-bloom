import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/f763c5ba-5768-4cdf-8d85-471fa04c7e70.png")',
          backgroundAttachment: 'fixed' 
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="mb-4 sm:mb-8">
            <span className="block text-[#E34000] text-4xl sm:text-6xl md:text-8xl tracking-[0.25em] sm:tracking-[0.5em] uppercase font-serif mx-[0.125em] sm:mx-[0.25em]">
              Limekiln
            </span>
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            A unique venue nestled in Sussex woodland – perfect for weddings, private takeovers, parties, and more.
          </p>
          <button 
            onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#E34000] text-white px-6 sm:px-8 py-3 rounded-sm inline-flex items-center gap-2 hover:bg-[#E34000]/90 transition-colors text-base sm:text-lg"
          >
            Enquire Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
