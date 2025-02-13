
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb")',
          backgroundAttachment: 'fixed' 
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 animate-fade-down">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Create Unforgettable Events at Limekiln
          </h1>
          <p className="text-xl text-white/90 mb-8">
            A stunning Sussex venue perfect for your special occasions
          </p>
          <button 
            onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 bg-limekiln-green text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-limekiln-green/90"
          >
            Make an Inquiry
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
