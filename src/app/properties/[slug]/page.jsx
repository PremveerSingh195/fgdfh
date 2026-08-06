"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Layout from "../../../components/Layout";
import Link from "next/link";
import { properties, getPropertyBySlug } from "../../../data/properties";

// Amenity icon mapping
const amenityIcons = {
  road: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    />
  ),
  security: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  ),
  garden: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  ),
  park: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  ),
  water: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  ),
  electricity: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  ),
  boundary: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  ),
  drainage: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  ),
  streetlight: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  ),
  school: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  ),
  college: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  ),
};

export default function PropertyDetailPage() {
  const params = useParams();
  const property = getPropertyBySlug(params.slug);
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  const [activeImageTab, setActiveImageTab] = useState("gallery");

  console.log(property, 'fdasfdsafdas');


  if (!property) {
    return (
      <Layout>
        <section className="bg-[#0a1128] min-h-screen flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <p className="text-xl text-gray-400 mb-8">Property not found</p>
            <Link
              href="/properties"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300"
            >
              Back to Properties
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // Get other properties for recommendations
  const otherProperties = properties.filter((p) => p.id !== property.id);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#0a1128] overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.07] pointer-events-none"
            style={{
              backgroundColor: `rgb(${property.accentRgb})`,
            }}
          ></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05] pointer-events-none"></div>
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-16 md:pb-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/properties"
              className="hover:text-white transition-colors duration-300"
            >
              Properties
            </Link>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-gray-300">{property.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Image */}
            <div className="relative group">
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${property.accentFrom} ${property.accentTo} rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
              ></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-[400px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/70 via-transparent to-transparent"></div>

                {/* Sale Badge */}
                <div className="absolute top-6 left-6">
                  <span
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full ${property.accentBg} text-white text-sm font-bold shadow-lg`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    For Sale
                  </span>
                </div>

                {/* Location on image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white/90">
                    <svg
                      className="w-5 h-5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-medium">{property.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Key Info */}
            <div>
              {/* Phase Badge */}
              {property.phase && (
                <span
                  className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${property.accentBg} mb-4`}
                >
                  {property.phase}
                </span>
              )}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
                {property.name}
              </h1>
              <p
                className={`text-xl ${property.accentText} font-medium mb-6`}
              >
                {property.tagline}
              </p>

              {/* Location & Expressway */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm font-medium">
                    {property.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm font-medium">
                    {property.nearExpressway}
                  </span>
                </div>
              </div>

              {/* Starting Price Card */}
              <div
                className={`rounded-2xl border ${property.accentBorder} bg-gradient-to-br from-white/[0.04] to-transparent p-6 mb-8`}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">
                  Starting Price
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${property.accentFrom} ${property.accentTo}`}
                  >
                    ₹{property.pricing[0].rate}
                  </span>
                  <span className="text-gray-500 text-lg">/ gaj</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  One-Time Payment • Flexible EMI available
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <p
                    className={`text-lg font-bold ${property.accentText}`}
                  >
                    {property.siteDetails.totalPlots}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Total Plots</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <p
                    className={`text-lg font-bold ${property.accentText}`}
                  >
                    {property.siteDetails.roadWidth.split(" ")[0]}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Road Width</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <p
                    className={`text-lg font-bold ${property.accentText}`}
                  >
                    {property.pricing.length}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Payment Plans</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className={`flex-1 text-center px-8 py-4 bg-gradient-to-r ${property.accentFrom} ${property.accentTo} text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg`}
                  style={{
                    boxShadow: `0 4px 20px ${property.accentGlow}`,
                  }}
                >
                  Enquire Now
                </Link>
                <a
                  href="tel:+919667060723"
                  className="flex-1 text-center px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Property */}
      <section className="relative bg-[#0a1128] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Description */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                About{" "}
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-r ${property.accentFrom} ${property.accentTo}`}
                >
                  {property.name}
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                {property.description}
              </p>

              {/* Registration Info */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-sm text-gray-400 font-medium">
                  Reg. No: Firm / West / 2025 / 1784
                </span>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-3">
                {property.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-300 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${property.accentBgLight} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <svg
                        className={`w-5 h-5 ${property.accentText}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Site Details Card */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${property.accentFrom} ${property.accentTo} px-6 py-4`}
                >
                  <h3 className="text-lg font-bold text-white">
                    Site Details
                  </h3>
                </div>
                <div className="p-6 space-y-5">
                  {property.siteDetails.totalArea && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">
                        Total Area
                      </span>
                      <span className="text-white font-semibold">
                        {property.siteDetails.totalArea}
                      </span>
                    </div>
                  )}
                  {property.siteDetails.roadArea && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">
                        Road Area
                      </span>
                      <span className="text-white font-semibold">
                        {property.siteDetails.roadArea}
                      </span>
                    </div>
                  )}
                  {property.siteDetails.plotArea && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">
                        Plot Area
                      </span>
                      <span className="text-white font-semibold">
                        {property.siteDetails.plotArea}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Road Width</span>
                    <span className="text-white font-semibold">
                      {property.siteDetails.roadWidth}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">
                      Plot Sizes
                    </span>
                    <span className="text-white font-semibold">
                      {property.siteDetails.plotSizes}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">
                      Total Plots
                    </span>
                    <span className="text-white font-semibold">
                      {property.siteDetails.totalPlots}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">
                      Nearby Landmarks
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {property.nearbyLandmarks.map((landmark) => (
                        <span
                          key={landmark}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-xs font-medium"
                        >
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Map Section */}
      <section className="relative bg-[#0a1128] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Site{" "}
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r ${property.accentFrom} ${property.accentTo}`}
              >
                Layout Plan
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Detailed plot layout with road network and plot dimensions
            </p>
          </div>

          {/* Map Container */}
          <div className="relative group">
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${property.accentFrom} ${property.accentTo} rounded-3xl opacity-15 group-hover:opacity-25 blur-xl transition-opacity duration-500`}
            ></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white">
              <img
                src={property.siteMap}
                alt={`${property.name} Site Layout Plan`}
                className="w-full h-auto object-contain cursor-pointer transition-transform duration-500"
                onClick={() => setIsMapFullscreen(true)}
              />
              {/* Click hint overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-xl flex items-center gap-2 text-white font-medium">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                  Click to Enlarge
                </div>
              </div>
            </div>
          </div>

          {/* Fullscreen Map Modal */}
          {isMapFullscreen && (
            <div
              className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 cursor-pointer"
              onClick={() => setIsMapFullscreen(false)}
            >
              <button
                onClick={() => setIsMapFullscreen(false)}
                className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={property.siteMap}
                alt={`${property.name} Site Layout Plan`}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="relative bg-[#0a1128] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Amenities &{" "}
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r ${property.accentFrom} ${property.accentTo}`}
              >
                Features
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              World-class amenities designed for your comfortable living
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {property.amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-500 hover:-translate-y-1 text-center"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, rgba(${property.accentRgb}, 0.08) 0%, transparent 70%)`,
                  }}
                ></div>

                <div
                  className={`relative w-14 h-14 mx-auto rounded-2xl ${property.accentBgLight} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svg
                    className={`w-7 h-7 ${property.accentText}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {amenityIcons[amenity.icon] || (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 13l4 4L19 7"
                      />
                    )}
                  </svg>
                </div>
                <p className="relative text-gray-300 font-medium text-sm">
                  {amenity.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative bg-[#0a1128] border-t border-white/5">
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.05] pointer-events-none"
            style={{
              backgroundColor: `rgb(${property.accentRgb})`,
            }}
          ></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Payment{" "}
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r ${property.accentFrom} ${property.accentTo}`}
              >
                Plans
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Flexible payment options to suit every budget. Choose the plan
              that works best for you.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {property.pricing.map((plan, idx) => (
              <div
                key={idx}
                className={`relative group rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-2 ${plan.badge
                  ? `${property.accentBorder} bg-gradient-to-b from-white/[0.06] to-transparent shadow-lg`
                  : "border-white/10 bg-white/[0.02]"
                  }`}
                style={
                  plan.badge
                    ? {
                      boxShadow: `0 4px 30px rgba(${property.accentRgb}, 0.15)`,
                    }
                    : {}
                }
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div
                    className={`bg-gradient-to-r ${property.accentFrom} ${property.accentTo} text-center py-2`}
                  >
                    <span className="text-white text-xs font-bold uppercase tracking-wider">
                      ⭐ {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 text-center">
                  <p className="text-gray-500 text-sm font-medium mb-4">
                    {plan.type}
                  </p>
                  <div className="mb-6">
                    <span
                      className={`text-3xl font-bold ${plan.badge ? property.accentText : "text-white"
                        }`}
                    >
                      ₹{plan.rate}
                    </span>
                    <span className="text-gray-500 text-sm block mt-1">
                      per gaj
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.badge
                      ? `bg-gradient-to-r ${property.accentFrom} ${property.accentTo} text-white hover:shadow-lg`
                      : `border ${property.accentBorder} ${property.accentText} ${property.accentHover} hover:text-white hover:border-transparent`
                      }`}
                  >
                    Choose Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Special Offer */}
          <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-transparent to-green-500/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                <svg
                  className="w-7 h-7 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-lg">
                  2 Months Payment —{" "}
                  <span className="text-emerald-400">30% Off!</span>
                </p>
                <p className="text-gray-400 text-sm">
                  Pay in 2 instalments and get 30% discount on all sites
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(16,185,129,0.4)]"
            >
              Claim Offer
            </Link>
          </div>
        </div>
      </section>

      {/* Other Properties */}
      <section className="relative bg-[#0a1128] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Other Properties
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Discover more projects by Future Group Developers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProperties.map((other) => (
              <Link
                key={other.id}
                href={`/properties/${other.slug}`}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                    <img
                      src={other.image}
                      alt={other.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a1128]/50 sm:block hidden"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/50 to-transparent sm:hidden"></div>
                  </div>

                  {/* Info */}
                  <div className="sm:w-3/5 p-6">
                    {other.phase && (
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white ${other.accentBg} mb-3`}
                      >
                        {other.phase}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {other.name}
                    </h3>
                    <p className={`text-sm ${other.accentText} mb-3`}>
                      {other.tagline}
                    </p>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {other.shortDescription}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold">
                        ₹{other.pricing[0].rate}
                        <span className="text-gray-500 text-sm font-normal">
                          {" "}
                          / gaj
                        </span>
                      </span>
                      <span
                        className={`${other.accentText} text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all`}
                      >
                        View Details
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative bg-[#0a1128] border-t border-white/5">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600 rounded-full mix-blend-screen filter blur-[200px] opacity-[0.07]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in {property.name}?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Our team is ready to help you with detailed site plans, booking
            information, and exclusive offers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className={`px-10 py-4 bg-gradient-to-r ${property.accentFrom} ${property.accentTo} text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg`}
            >
              Contact Us Today
            </Link>
            <a
              href="tel:+919667060723"
              className="px-10 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 96670 60723
            </a>
          </div>

          {/* Trust footer */}
          <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
            <svg
              className="w-5 h-5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-300 font-medium text-sm">
              Your Trust, Our Commitment
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
