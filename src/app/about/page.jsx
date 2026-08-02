"use client";

import Layout from "../../components/Layout";
import Link from "next/link";

export default function About() {
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

  const milestones = [
    { year: "2017", title: "Company Founded", description: "Future Group Developer was established with a vision to create premium farm house plots in emerging areas." },
    { year: "2018", title: "First Project Launch", description: "Successfully launched our first residential plot project near IMT Sohna, Gurugram." },
    { year: "2019", title: "100+ Happy Clients", description: "Crossed the milestone of 100 satisfied property buyers within two years of operations." },
    { year: "2021", title: "Multi-City Expansion", description: "Expanded operations to Delhi, Faridabad, Jewar, and other key NCR locations." },
    { year: "2023", title: "500+ Clients Served", description: "Built a trusted community of over 500 families who chose Future Group for their property investments." },
    { year: "2024", title: "New Horizons", description: "Launched premium projects in Lucknow, Mathura, and Ghaziabad with a focus on high-ROI investments." },
  ];

  const values = [
    {
      title: "Transparency",
      description: "Every transaction is fully documented and legally verified. No hidden fees, no surprises.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Customer First",
      description: "Our clients are our top priority. We provide personalized guidance throughout the entire process.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Quality Assurance",
      description: "Every property we offer undergoes strict quality checks for infrastructure, legal compliance, and location.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "We continuously evolve to identify high-growth locations and offer future-ready investment opportunities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a1128]"></div>
        <div className="absolute inset-0 bg-[url('/img18.jpeg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-[#0a1128]/90 to-[#0a1128]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold tracking-[0.25em] text-blue-400 uppercase mb-4 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">About Us</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mt-4">
            Building Dreams,<br />
            <span className="text-blue-400">Securing Futures</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-12 h-0.5 bg-blue-600 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <div className="w-12 h-0.5 bg-blue-600 rounded-full"></div>
          </div>
          <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Since 2017, Future Group Developer has been pioneering excellence in farm house development and premium real estate across India&apos;s most promising locations.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="/img10.jpeg" alt="Future Group Developer" className="w-full h-[450px] object-cover" />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-4 md:right-8 bg-blue-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-extrabold mb-1">6+</div>
                <div className="text-blue-100 text-sm font-medium">Years of<br />Excellence</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Who We Are</h3>
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                <p>
                  <strong className="text-gray-900">Future Group Developer</strong> was founded in 2017 with a clear mission — to make premium property investment accessible, transparent, and rewarding for everyone.
                </p>
                <p>
                  Under the visionary leadership of our directors <strong className="text-gray-900">Asif Nawaz</strong> and <strong className="text-gray-900">Afa Hussain</strong>, we have grown from a single project in Sohna to a multi-city real estate company with presence across Gurugram, Delhi, Faridabad, Jewar, Lucknow, Mathura, Ghaziabad, and Nangloi.
                </p>
                <p>
                  We specialize in premium residential plots, farm houses, and commercial spaces — all legally verified, strategically located, and designed for maximum return on investment.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                  Get in Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">8+</div>
              <div className="text-gray-600 font-medium">Cities Covered</div>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">6+</div>
              <div className="text-gray-600 font-medium">Years in Business</div>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Legal Verification</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">What Drives Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-blue-600/30">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a1128]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-transparent to-purple-950/30"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-bold tracking-[0.25em] text-blue-400 uppercase mb-4 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">Our Journey</span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-4">Milestones That Define Us</h3>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-500/20"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0a1128] shadow-lg shadow-blue-500/50 z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <span className="text-blue-400 font-extrabold text-2xl">{milestone.year}</span>
                      <h4 className="text-xl font-bold text-white mt-2 mb-2">{milestone.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Directors */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Meet the Directors</h3>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The visionaries driving Future Group Developer towards excellence and innovation in real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h4>
                  <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-5">{profile.role}</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <a
                      href={`tel:${profile.about.replace(/\D/g, '')}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {profile.about.replace('Contact No. - ', '')}
                    </a>
                    <a
                      href={`https://wa.me/91${profile.about.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-400 text-white rounded-full text-sm font-semibold transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Property Journey?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re looking for your dream home or a smart investment, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300"
            >
              Contact Us Now
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
