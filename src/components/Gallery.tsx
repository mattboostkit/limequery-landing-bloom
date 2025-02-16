"use client";

import { Carousel } from "@/components/ui/carousel-gallery";

export const Gallery = () => {
  const slideData = [
    {
      title: "The Lodge",
      button: "View Space",
      src: "/lovable-uploads/0565d05c-dc42-4551-87e3-54ace4f6d2de.png",
    },
    {
      title: "Private Takeovers",
      button: "View Space",
      src: "/lovable-uploads/20d290d2-30bc-44cc-bc90-0c49c57a6418.png",
    },
    {
      title: "Weddings",
      button: "View Space",
      src: "/lovable-uploads/c9d69acb-9503-4787-9a80-6dbc4f5dda56.png",
    },
    {
      title: "Eat & Drink",
      button: "View Space",
      src: "/lovable-uploads/2bbab274-0bcc-49e3-8cc6-0b7ca1fa4454.png",
    },
  ];

  return (
    <section className="relative overflow-hidden w-full h-full py-20 bg-[#F8F2E0]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#E34000] mb-12 text-center">
          Explore Our Spaces
        </h2>
        <Carousel slides={slideData} />
      </div>
    </section>
  );
};
