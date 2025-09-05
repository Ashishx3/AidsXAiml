import Link from "next/link";
import React from "react";

const Page = () => {
  const cards = [
    { img: "/img1.jpg", title: "IT Building", href: "/it-building" },
    { img: "/img2.jpg", title: "Library", href: "/library" },
    { img: "/img3.jpg", title: "Auditorium", href: "/auditorium" },
  ];

  return (
    <div className="w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
      {cards.map((card, idx) => (
        <Link href={card.href} key={idx} className="block">
          <div className="relative cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 w-full h-[80vh] lg:h-[400px]">
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay text */}
            <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-3">
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;
