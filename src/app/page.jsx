"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const featuredProperties = [
    {
      id: 1,
      title: "The Best Location in IMT Sohna",
      price: "$450,000",
      location: "Downtown",
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: "/img1.jpeg",
    },
    {
      id: 2,
      title: "Future group developer Farm house",
      price: "$850,000",
      location: "Suburbs",
      beds: 4,
      baths: 3,
      sqft: 2800,
      image: "/img2.jpeg",
    },
    {
      id: 3,
      title: "Sohna Elevated Road",
      price: "$650,000",
      location: "Harbor View",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "/img3.jpeg",
    },
    {
      id: 4,
      title: "News paper covers",
      price: "$650,000",
      location: "Harbor View",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "/img4.jpeg",
    },
    {
      id: 5,
      title: "Bright Future",
      price: "$650,000",
      location: "Harbor View",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "/img5.jpeg",
    },
    {
      id: 6,
      title: "Every Size Plots",
      price: "$650,000",
      location: "Harbor View",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "/img6.jpeg",
    },
    {
      id: 7,
      title: "Management meetings",
      price: "$650,000",
      location: "Harbor View",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "/img7.jpeg",
    },
  ];

  const profiles = [
    {
      id: 1,
      name: "Asif Nawaz",
      role: "Director",
      image: "/asif.png",
      about: "Contact No. - 9667060723",
    },
    {
      id: 2,
      name: "Afa Hussain",
      role: "Director",
      image: "hafa.png",
      about: "Contact No. - 9315871006",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className=" h-auto bg-gray-900">
        <h2 className="text-white text-3xl font-bold flex justify-center items-center pt-4 px-2">
          Future Group developer farm house Since 2017.
        </h2>
        <div className="w-full max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="flex flex-col sm:flex-col items-center gap-4 p-4 border rounded-xl shadow-md bg-white"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-xl font-semibold">{profile.name}</h2>
                <p className="text-sm text-gray-500">{profile.role}</p>
                <p className="mt-2 text-gray-700">{profile.about}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured</h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    {property.price}
                  </p>
                  <div className="flex justify-between text-gray-600 mb-4">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <Link
                    href={`/properties/${property.id}`}
                    className="block text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div> */}

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div
                  className="relative h-48 cursor-pointer"
                  onClick={() => openImage(property.image)}
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  {/* <p className="text-2xl font-bold text-blue-600 mb-4">
                    {property.price}
                  </p>
                  <div className="flex justify-between text-gray-600 mb-4">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <Link
                    href={`/properties/${property.id}`}
                    className="block text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    View Details
                  </Link> */}
                </div>
              </div>
            ))}
          </div>

          {/* Modal for Full Image View */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
              onClick={closeImage}
            >
              <img
                src={selectedImage}
                alt="Full View"
                className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing on image click
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={closeImage}
              >
                &times;
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
