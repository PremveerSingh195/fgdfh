"use client";

import { useState } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const featuredProperties = [
    {
      id: 0,
      title: "Future Group Development Farm House",
      image: "/fgdfhimg.png",
    },
    {
      id: 1,
      title: "The Best Location in IMT Sohna",
      image: "/img1.jpeg",
    },
    {
      id: 2,
      title: "Future group developer Farm house",
      image: "/img2.jpeg",
    },
    {
      id: 3,
      title: "Sohna Elevated Road",
      image: "/img3.jpeg",
    },
    {
      id: 4,
      title: "News paper covers",
      image: "/img4.jpeg",
    },
    {
      id: 5,
      title: "Bright Future",
      image: "/img5.jpeg",
    },
    {
      id: 6,
      title: "Every Size Plots",
      image: "/img6.jpeg",
    },
    {
      id: 7,
      title: "Management meetings",
      image: "/img7.jpeg",
    },
    {
      id: 8,
      title: "Management meetings",
      image: "/img8.jpeg",
    },
    {
      id: 9,
      title: "Management meetings",
      image: "/img9.jpeg",
    },
    {
      id: 10,
      title: "Management meetings",
      image: "/img10.jpeg",
    },
    {
      id: 11,
      title: "Management meetings",
      image: "/img11.jpeg",
    },
    {
      id: 12,
      title: "Management meetings",
      image: "/img12.jpeg",
    },
    {
      id: 13,
      title: "Management meetings",
      image: "/img13.jpeg",
    },
    {
      id: 14,
      title: "Management meetings",
      image: "/img14.jpeg",
    },
    {
      id: 15,
      title: "Management meetings",
      image: "/img15.jpeg",
    },
    {
      id: 16,
      title: "Management meetings",
      image: "/img16.jpeg",
    },
    {
      id: 17,
      title: "Management meetings",
      image: "/img17.jpeg",
    },
    {
      id: 18,
      title: "Management meetings",
      image: "/img18.jpeg",
    },
    {
      id: 19,
      title: "Management meetings",
      image: "/img19.jpeg",
    },
    {
      id: 20,
      title: "Management meetings",
      image: "/img20.jpeg",
    },
    {
      id: 21,
      title: "Property Booking",
      image: "/img21.jpeg",
    },
    {
      id: 22,
      title: "Company Top Management",
      image: "/img22.jpeg",
    },
  ];

  return (
    <Layout>
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 text-center">Gallery</h2>
          <p className="text-gray-600 text-center mb-12">Explore our premium properties and recent events</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div
                  className="relative h-64 cursor-pointer overflow-hidden"
                  onClick={() => openImage(property.image)}
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 bg-blue-600/80 px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Image
                    </span>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {property.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for Full Image View */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeImage}
            >
              <img
                src={selectedImage}
                alt="Full View"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-colors"
                onClick={closeImage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
