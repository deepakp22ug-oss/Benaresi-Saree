import { useState } from "react";

export default function HeroCarousel() {
  const images = [
    "https://th.bing.com/th/id/R.3fa6027f6c1cc9d9d4a5746e80ddfe58?rik=t57b3s1RE6wggQ&riu=http%3a%2f%2fhouseofbanaras.in%2fcdn%2fshop%2fcollections%2fhomepage_banners-01-04.png%3fv%3d1737096186&ehk=9PL8ukpnRkAJI%2fQfudapDmeJE4bvCfDeNy5hKND8OE8%3d&risl=&pid=ImgRaw&r=0",
    "https://irp-cdn.multiscreensite.com/f9f40ab7/dms3rep/multi/BANNER-LEHENGA-SAREE.jpg"
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="hidden md:block animate-fadeInUp relative w-full">
      {/* Images */}
      <div className="relative w-full h-[400px]">
  <img
    src={images[current]}
    alt="Hero Carousel"
    className="w-full h-full object-cover rounded-lg shadow-2xl transition-all duration-700"
  />
</div>


      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition 
            ${current === i ? "bg-gray-800" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}
