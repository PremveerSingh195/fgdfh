"use client";

import { useState } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

const properties = [
  {
    id: 1,
    name: "City Shine",
    image: "/city_shine.png",
    tagline: "Premium Urban Living",
    description:
      "Experience the pinnacle of modern city living with City Shine. Strategically located with world-class amenities, lush green surroundings, and premium infrastructure designed for a luxurious lifestyle.",
    highlights: [
      "Prime Location",
      "24/7 Security",
      "Landscaped Gardens",
      "Wide Roads",
    ],
    pricing: [
      { rate: "13,000", type: "One-Time Payment", badge: null },
      { rate: "13,500", type: "12 EMI Per Month", badge: null },
      { rate: "14,000", type: "18 EMI Per Month", badge: "Popular" },
      { rate: "15,000", type: "24 EMI Per Month", badge: null },
    ],
    accentFrom: "from-amber-400",
    accentTo: "to-orange-600",
    accentBg: "bg-amber-500",
    accentText: "text-amber-400",
    accentBorder: "border-amber-500/30",
    accentGlow: "rgba(245,158,11,0.4)",
    accentBgLight: "bg-amber-500/10",
    accentHover: "hover:bg-amber-500",
    badgeBg: "bg-amber-500",
  },
  {
    id: 2,
    name: "Mandkola Golden City",
    phase: "Phase 1",
    image: "/golden_city.png",
    tagline: "Golden Opportunities Await",
    description:
      "Mandkola Golden City Phase 1 offers an exclusive opportunity to invest in a thriving community. With affordable rates and flexible payment options, this is your gateway to owning a premium plot.",
    highlights: [
      "Affordable Pricing",
      "Flexible EMI Options",
      "Gated Community",
      "Modern Infrastructure",
    ],
    pricing: [
      { rate: "9,000", type: "One-Time Payment", badge: null },
      { rate: "9,500", type: "12 EMI Per Month", badge: null },
      { rate: "10,000", type: "18 EMI Per Month", badge: "Popular" },
      { rate: "10,500", type: "24 EMI Per Month", badge: null },
    ],
    accentFrom: "from-yellow-400",
    accentTo: "to-amber-600",
    accentBg: "bg-yellow-500",
    accentText: "text-yellow-400",
    accentBorder: "border-yellow-500/30",
    accentGlow: "rgba(234,179,8,0.4)",
    accentBgLight: "bg-yellow-500/10",
    accentHover: "hover:bg-yellow-500",
    badgeBg: "bg-yellow-500",
  },
  {
    id: 3,
    name: "Mandkola Star City",
    phase: "Phase 2",
    image: "/star_city.png",
    tagline: "Where Stars Align for Your Future",
    description:
      "Mandkola Star City Phase 2 brings you the most competitive rates in the region. Ideal for first-time buyers and smart investors looking for high-return opportunities in a rapidly developing area.",
    highlights: [
      "Best Value Rates",
      "High ROI Potential",
      "Developing Area",
      "Easy Connectivity",
    ],
    pricing: [
      { rate: "7,000", type: "One-Time Payment", badge: null },
      { rate: "7,500", type: "12 EMI Per Month", badge: null },
      { rate: "8,000", type: "18 EMI Per Month", badge: "Popular" },
      { rate: "8,500", type: "24 EMI Per Month", badge: null },
    ],
    accentFrom: "from-blue-400",
    accentTo: "to-indigo-600",
    accentBg: "bg-blue-500",
    accentText: "text-blue-400",
    accentBorder: "border-blue-500/30",
    accentGlow: "rgba(59,130,246,0.4)",
    accentBgLight: "bg-blue-500/10",
    accentHover: "hover:bg-blue-500",
    badgeBg: "bg-blue-500",
  },
];

export default function PropertiesPage() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative bg-[#0a1128] overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500 rounded-full mix-blend-screen filter blur-[200px] opacity-5"></div>
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            {/* Registration badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm text-gray-400 font-medium tracking-wide">
                Reg. No: Firm / West / 2025 / 1784
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400">
                Properties
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Discover premium plots with flexible payment plans. Your dream
              property is just one step away.
            </p>

            {/* Trust tagline */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10">
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
              <span className="text-gray-300 font-medium text-sm md:text-base">
                Your Trust, Our Commitment
              </span>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1128] to-transparent"></div>
      </section>

      {/* Properties Sections */}
      {properties.map((property, index) => (
        <section
          key={property.id}
          className={`relative bg-[#0a1128] overflow-hidden ${
            index !== properties.length - 1
              ? "border-b border-white/5"
              : ""
          }`}
        >
          {/* Section background glow */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.04] pointer-events-none"
            style={{
              [index % 2 === 0 ? "right" : "left"]: "-10%",
              backgroundColor:
                index === 0
                  ? "#f59e0b"
                  : index === 1
                  ? "#eab308"
                  : "#3b82f6",
            }}
          ></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
              {property.phase && (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${property.accentBg}`}
                >
                  {property.phase}
                </span>
              )}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {property.name}
                </h2>
                <p className={`text-lg ${property.accentText} font-medium mt-1`}>
                  {property.tagline}
                </p>
              </div>
            </div>

            {/* Content Grid */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image Side */}
              <div
                className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="relative group">
                  {/* Glow effect behind image */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${property.accentFrom} ${property.accentTo} rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                  ></div>

                  {/* Image container */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-[350px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/60 via-transparent to-transparent"></div>

                    {/* Price badge on image */}
                    <div className="absolute bottom-6 left-6">
                      <div className="bg-[#0a1128]/80 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                          Starting from
                        </p>
                        <p className="text-2xl font-bold text-white">
                          ₹{property.pricing[0].rate}
                          <span className="text-sm font-normal text-gray-400">
                            {" "}
                            / gaj
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Side */}
              <div
                className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
              >
                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                  {property.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {property.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors duration-300`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg ${property.accentBgLight} flex items-center justify-center shrink-0`}
                      >
                        <svg
                          className={`w-4 h-4 ${property.accentText}`}
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
                      <span className="text-gray-300 text-sm font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing Table */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                  {/* Table Header */}
                  <div
                    className={`bg-gradient-to-r ${property.accentFrom} ${property.accentTo} px-6 py-4`}
                  >
                    <div className="flex justify-between items-center text-white">
                      <h3 className="font-bold text-lg">Rate Per Gaj (₹)</h3>
                      <span className="text-sm font-medium opacity-90">
                        Payment Type
                      </span>
                    </div>
                  </div>

                  {/* Table Body */}
                  <div className="divide-y divide-white/5">
                    {property.pricing.map((plan, planIndex) => (
                      <div
                        key={planIndex}
                        className={`flex justify-between items-center px-6 py-4 transition-all duration-300 hover:bg-white/[0.03] group cursor-default ${
                          plan.badge ? `${property.accentBgLight}` : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold text-white group-hover:scale-105 transition-transform origin-left">
                            ₹{plan.rate}
                          </span>
                          {plan.badge && (
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white ${property.badgeBg} animate-pulse`}
                            >
                              {plan.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
                          {plan.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className={`flex-1 text-center px-8 py-4 bg-gradient-to-r ${property.accentFrom} ${property.accentTo} text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg`}
                    style={{
                      boxShadow: `0 4px 20px ${property.accentGlow}`,
                    }}
                  >
                    Enquire Now
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 text-center px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    Book a Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* All Sites Offer Banner */}
      <section className="relative bg-[#0a1128] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-green-500/10 overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>

            <div className="relative px-8 md:px-16 py-12 md:py-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-4">
                    <svg
                      className="w-4 h-4 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider">
                      Special Offer
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    All Sites — Flat{" "}
                    <span className="text-emerald-400">30% Off</span>
                  </h3>
                  <p className="text-gray-400 text-lg max-w-lg">
                    Pay in 2 monthly instalments and get an exclusive{" "}
                    <span className="text-white font-semibold">
                      30% discount
                    </span>{" "}
                    across all project sites. Limited time offer!
                  </p>
                </div>

                <div className="shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.4)]"
                  >
                    Claim Offer
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="relative bg-[#0a1128] overflow-hidden border-t border-white/5">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Quick{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Comparison
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Compare pricing across all our properties at a glance
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div
                key={property.id}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Card gradient top */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${property.accentFrom} ${property.accentTo}`}
                ></div>

                <div className="p-8">
                  {/* Property Name */}
                  <div className="mb-6">
                    {property.phase && (
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        {property.phase}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white">
                      {property.name}
                    </h3>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-4">
                    {property.pricing.map((plan, planIndex) => (
                      <div
                        key={planIndex}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-500 text-sm">
                          {plan.type}
                        </span>
                        <span
                          className={`font-bold ${
                            planIndex === 0
                              ? property.accentText
                              : "text-gray-300"
                          }`}
                        >
                          ₹{plan.rate}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-6 border-t border-white/5"></div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`block text-center w-full py-3 rounded-xl border ${property.accentBorder} ${property.accentText} font-semibold text-sm transition-all duration-300 ${property.accentHover} hover:text-white hover:border-transparent`}
                  >
                    Get Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative bg-[#0a1128] border-t border-white/5">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600 rounded-full mix-blend-screen filter blur-[200px] opacity-[0.07]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Invest in Your Future?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Get in touch with our team for detailed site plans, booking
            information, and exclusive offers tailored just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)]"
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
              Call: +91 96670 60723
            </a>
          </div>

          {/* Website & Email */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 text-sm">
            <a
              href="https://www.fgdfh.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
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
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              www.fgdfh.in
            </a>
            <a
              href="mailto:futuregroupdeveloper@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              futuregroupdeveloper@gmail.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
