import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: "$450,000",
      location: "Downtown",
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    {
      id: 2,
      title: "Luxury Family Home",
      price: "$850,000",
      location: "Suburbs",
      beds: 4,
      baths: 3,
      sqft: 2800,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    },
    {
      id: 3,
      title: "Waterfront Condo",
      price: "$650,000",
      location: "Harbor View",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover the perfect property that matches your lifestyle
            </p>
            <div className="flex space-x-4">
              <Link
                href="/properties"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
              >
                Browse Properties
              </Link>
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100"
              >
                Contact Agent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
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
          </div>
        </div>
      </section>
    </Layout>
  );
}
