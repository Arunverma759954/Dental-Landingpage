"use client";

import Image from "next/image";

export default function Home() {
  const phonePrimary = "+91 99677 56611";
  const phonePrimaryHref = "tel:+919967756611";
  const phoneSecondary = "+91 9167244898";
  const phoneSecondaryHref = "tel:+919167244898";
  const whatsappNumber = "919967756611";

  // Aliases for variables used in some sections
  const phoneNumberDisplay = phonePrimary;
  const phoneNumberHref = phonePrimaryHref;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Floating buttons (mobile) */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:hidden">
        <a
          href={phonePrimaryHref}
          className="flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40"
        >
          📞 Call
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-green-500/40"
        >
          💬 WhatsApp
        </a>
      </div>

      {/* Navbar – no links, only actions */}
      <header className="border-b border-amber-100 bg-white/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 lg:px-8 lg:py-5">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full bg-amber-50 ring-2 ring-amber-300">
              <Image
                src="/logo.png"
                alt="Andheri Dental Clinic logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
                Andheri Dental Clinic
              </p>
              <p className="text-xs text-slate-500">
                Advanced &amp; painless dental care
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={phonePrimaryHref}
              className="rounded-full border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-800 transition hover:border-amber-300 hover:bg-amber-50"
            >
              📞 Call Now
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-green-500/40 transition hover:bg-green-600"
            >
              💬 WhatsApp
            </a>
            <a
              href="#appointment"
              className="rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-amber-500/40 transition hover:bg-amber-700"
            >
              📅 Book Appointment
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 lg:px-8 lg:pb-24 lg:pt-12">
        {/* 1. Hero + Quick Appointment Form */}
        <section className="relative grid gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-100 p-6 shadow-sm shadow-amber-100 lg:grid-cols-[1.4fr_minmax(0,1fr)] lg:p-10">
          {/* Background hero image */}
          <div className="pointer-events-none absolute inset-y-0 right-[-10%] -z-10 hidden opacity-40 sm:block lg:right-0">
            <div className="relative h-full w-[60%] min-w-[260px]">
              <Image
                src="/pic1.webp"
                alt="Smiling dental patient"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 ring-1 ring-amber-200">
              <span>⭐ 5★ Rated Dental Clinic</span>
              <span className="h-1 w-1 rounded-full bg-emerald-300" />
              <span>10+ Years Experience</span>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Andheri East • Mumbai
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Pain-Less &amp; Advanced Dental Treatment in{" "}
                <span className="text-amber-700">Andheri East</span>
              </h1>
            </div>

            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              Providing gentle, modern dental care with advanced technology and
              a focus on comfort. From routine checkups to complete smile
              makeovers, we care for your entire family.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/40 transition hover:bg-amber-700"
              >
                📅 Book Free Consultation
              </a>
              <a
                href={phonePrimaryHref}
                className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white px-5 py-3 text-sm font-semibold text-amber-800 shadow-sm transition hover:border-amber-300 hover:bg-amber-50"
              >
                📞 Call Now: {phonePrimary}
              </a>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-amber-100 text-center text-lg leading-7">
                  😊
                </span>
                <span>1000+ Happy Patients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-amber-100 text-center text-lg leading-7">
                  🦷
                </span>
                <span>Painless &amp; gentle treatments</span>
              </div>
            </div>
          </div>

          {/* Quick Appointment Form */}
          <div
            id="appointment"
            className="flex flex-col justify-center rounded-2xl bg-amber-50 p-5 shadow-lg shadow-amber-100 ring-1 ring-amber-100 sm:p-6"
          >
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Book Your Free Consultation
            </h2>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Share a few details and our team will call you to confirm your
              appointment.
            </p>

            <form
              className="mt-5 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-amber-100 transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-xs font-medium text-slate-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-amber-100 transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="treatment"
                  className="text-xs font-medium text-slate-700"
                >
                  Treatment Needed
                </label>
                <select
                  id="treatment"
                  name="treatment"
                  className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-amber-100 transition focus:border-amber-400 focus:ring-2"
                >
                  <option value="">Select treatment</option>
                  <option>Dental Implants</option>
                  <option>Root Canal (RCT)</option>
                  <option>Braces &amp; Aligners</option>
                  <option>Teeth Whitening</option>
                  <option>Smile Makeover</option>
                  <option>Kids Dentistry</option>
                  <option>General Checkup / Cleaning</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="date"
                  className="text-xs font-medium text-slate-700"
                >
                  Preferred Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-amber-100 transition focus:border-amber-400 focus:ring-2"
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/40 transition hover:bg-emerald-600"
              >
                📅 Book Free Consultation
              </button>

              <p className="text-[11px] leading-snug text-slate-400">
                No charges for consultation. Our team will confirm your
                appointment time over call or WhatsApp.
              </p>
            </form>
          </div>
        </section>

        {/* 2. About Clinic - Screenshot Matching Layout */}
        <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_minmax(0,1fr)] items-start">
          {/* Left: Doctor Biography */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ring-1 ring-emerald-200">
              🦷 Expert Specialist
            </div>
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl leading-tight">
              At the heart of Andheri Dental Clinic is{" "}
              <span className="text-amber-700">Dr. Poonam Singh.</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              At the heart of Andheri Dental Clinic is Dr. Poonam Brahmadeen Singh, a dedicated Periodontist and Oral Implantologist with a passion for creating healthy, beautiful smiles. With her advanced qualifications (BDS, MDS) and a deep-seated expertise in gum treatments, dental implants, and full-mouth rehabilitation, Dr. Singh goes beyond just treating teeth—she restores confidence.
            </p>
            <p className="text-sm leading-relaxed text-slate-500">
              She is known for her warm, calming demeanor, making even the most anxious patients feel at ease. Believing in a partnership with her patients, Dr. Singh prioritizes clear communication and personalized care plans, ensuring every treatment is tailored for long-term health and well-being. Her commitment is to provide you with a dental experience that is as comfortable as it is transformative.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1 text-sm">
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <span className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 shrink-0">✓</span>
                Periodontics Specialist
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <span className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 shrink-0">✓</span>
                Oral Implantology Expert
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <div className="flex-1 rounded-2xl bg-amber-50 border border-amber-100 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-700">Education</p>
                <p className="mt-1 text-sm font-bold text-slate-900">M.D.S. in Periodontics &amp; Oral Implantology</p>
              </div>
              <div className="flex-1 rounded-2xl bg-amber-50 border border-amber-100 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-700">Experience</p>
                <p className="mt-1 text-sm font-bold text-slate-900">Ex-Senior Resident, MGM Dental College</p>
              </div>
            </div>
          </div>

          {/* Right: Doctor Image Card */}
          <div className="relative group self-start w-full">
            <div className="absolute -inset-3 rounded-[3rem] bg-amber-200/40 blur-2xl group-hover:bg-amber-300/40 transition-colors"></div>
            <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-amber-100 bg-white">
              <Image
                src="/dr.webp"
                alt="Dr. Poonam Singh"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 to-transparent p-6 sm:p-8">
                <p className="text-xl font-black text-white">Dr. Poonam Singh</p>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mt-0.5">Periodontist &amp; Oral Implantologist (BDS, MDS)</p>
              </div>
            </div>
          </div>
        </section>


        <section className="mt-24">
          <h2 className="text-center text-3xl font-black text-slate-900">
            Treatments We Offer
          </h2>
          <p className="mt-2 text-center text-sm text-slate-500 font-bold uppercase tracking-widest">
            Complete dental solutions for you and your family.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dental Implants",
                desc: "Replace missing teeth with natural-looking, long-lasting implants.",
                icon: "🦷"
              },
              {
                title: "Root Canal Treatment (RCT)",
                desc: "Save damaged teeth with painless, advanced root canal procedures.",
                icon: "⚡"
              },
              {
                title: "Braces & Aligners",
                desc: "Straighten your teeth with metal, ceramic or clear aligners.",
                icon: "📏"
              },
              {
                title: "Teeth Whitening",
                desc: "Get a brighter smile with safe and effective whitening.",
                icon: "✨"
              },
              {
                title: "Smile Makeover",
                desc: "Design your dream smile with veneers, bonding and more.",
                icon: "💎"
              },
              {
                title: "Kids Dentistry",
                desc: "Gentle treatments specially designed for children.",
                icon: "👶"
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[2.5rem] bg-amber-50/50 p-6 shadow-sm shadow-amber-100 ring-1 ring-amber-100/70 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-200"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>




        {/* 5. Special Offers */}
        <section className="mt-32 relative">
          <div className="rounded-[3rem] bg-gradient-to-br from-amber-50 via-white to-amber-100 px-6 py-12 sm:px-12 sm:py-16 shadow-xl shadow-amber-900/5 overflow-hidden ring-1 ring-amber-100/50">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl -z-10"></div>

            <div className="relative flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-end z-10">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-800 ring-1 ring-amber-200/50">
                  Exclusive Benefits
                </div>
                <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                  Special Offers <span className="text-amber-700">This Month</span>
                </h2>
                <p className="max-w-xl text-slate-600 font-medium sm:text-lg">
                  Limited-time opportunities to prioritize your oral health with expert care and modern technology.
                </p>
              </div>
              <div className="lg:text-right">
                <a
                  href="#appointment"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-8 py-4 text-sm font-black text-white shadow-xl shadow-amber-900/10 transition-all duration-300 hover:bg-amber-700 hover:-translate-y-1"
                >
                  Grab Offer & Book Slot
                  <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Free Dental Checkup",
                  desc: "Complete oral health evaluation at zero consultation cost.",
                  img: "/img1.webp",
                  tag: "NEW PATIENT"
                },
                {
                  title: "20% Off Whitening",
                  desc: "Brighten your smile with safe, professional grade treatment.",
                  img: "/img2.webp",
                  tag: "BRIGHTER SMILE"
                },
                {
                  title: "Free X-Ray with RCT",
                  desc: "Precision digital X-ray included with target treatments.",
                  img: "/img9.webp",
                  tag: "ADVANCED CARE"
                }
              ].map((offer, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col rounded-[2.5rem] bg-white p-3 shadow-lg ring-1 ring-amber-100/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10"
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-[2rem]">
                    <Image
                      src={offer.img}
                      alt={offer.title}
                      fill
                      className="object-cover object-center transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-amber-600 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white shadow-lg">
                        {offer.tag}
                      </span>
                    </div>
                  </div>

                  <div className="px-4 py-6 text-center space-y-2">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-xl shadow-inner mb-2">
                      🎁
                    </div>
                    <h3 className="text-lg font-black text-slate-900 leading-tight">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-bold">
                      {offer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-[11px] font-black uppercase tracking-widest text-slate-400">
              * Terms and conditions apply • Valid until end of the month
            </p>
          </div>
        </section>

        {/* 6. Premium Redesigned Gallery - Full Image Visibility */}
        <section className="mt-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-amber-50/50 -z-10 blur-[120px] rounded-full"></div>

          <div className="text-center space-y-4 mb-16 relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-amber-800 ring-1 ring-amber-200/50 mb-2">
              Our Showcase
            </div>
            <h2 className="text-4xl font-black text-slate-900 sm:text-5xl tracking-tight">
              World-Class <span className="text-amber-700 relative">
                Gallery
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-200/60 -z-10 rounded-full"></span>
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
              Experience our commitment to excellence through these glimpses of our facility and care.
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
              {[
                { src: "/neww.jpeg", alt: "Advanced Dental Care", className: "col-span-2 md:col-span-2 md:row-span-2" },
                { src: "/doc.jpeg", alt: "Clinical Excellence", className: "col-span-2 md:col-span-2 md:row-span-1" },
                { src: "/neww1.jpeg", alt: "Modern Clinical Setup", className: "col-span-1 md:col-span-1 md:row-span-1" },
                { src: "/neww2.jpeg", alt: "Expert Dental Procedures", className: "col-span-1 md:col-span-1 md:row-span-1" },
                { src: "/neww3.jpeg", alt: "Patient Comfort Room", className: "col-span-1 md:col-span-1 md:row-span-1" },
                { src: "/neww4.jpeg", alt: "Specialized Equipment", className: "col-span-1 md:col-span-1 md:row-span-1" },
                { src: "/neww5.jpeg", alt: "Compassionate Care", className: "col-span-2 md:col-span-2 md:row-span-1" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-50 p-6 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 transition-all duration-700 hover:-translate-y-2 hover:shadow-premium ${item.className}`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-clinical-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xl font-black text-white leading-tight drop-shadow-md">
                          {item.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Location & Contact */}
        <section className="mt-32 grid gap-12 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-700 ring-1 ring-slate-200 mb-4 self-start">
              📍 Find Us
            </div>
            <h2 className="text-3xl font-black text-slate-900 sm:text-5xl leading-tight">
              Visit Our Clinic in <br />
              <span className="text-amber-700">Andheri East</span>
            </h2>
            <p className="mt-4 text-slate-600 font-medium leading-relaxed">
              Conveniently located on Mahakali Caves Rd, Chakala. Easy access via public transport with dedicated patient assistance.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-amber-50 p-6 shadow-sm border border-amber-100/50">
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-700 mb-2">Full Address</p>
                <p className="text-sm font-bold text-slate-800 leading-relaxed">
                  Shop no. 9, Ground Floor, Moonlight C.H.S. Ltd, New Mahakali Caves Rd, Chakala, Andheri East, Mumbai, Maharashtra 400093
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-emerald-50 p-6 shadow-sm border border-emerald-100/50">
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2">Direct Contact</p>
                  <a href={phonePrimaryHref} className="text-lg font-black text-emerald-900 hover:text-emerald-700 transition-colors">
                    {phonePrimary}
                  </a>
                </div>
                <div className="rounded-3xl bg-slate-900 p-6 shadow-xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-2">Working Hours</p>
                  <p className="text-sm font-bold text-white">Mon – Sat: 10AM–2PM, 5PM–9PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] overflow-hidden rounded-[3rem] bg-slate-200 shadow-2xl border-4 border-white">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60317.023644241635!2d72.860899!3d19.115815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91e5825d75f%3A0x5d9cba987ddf0a74!2sAndheri%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1772121242731!5m2!1sen!2sin"
              className="h-full w-full border-0 grayscale active:grayscale-0 transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* 7. Final CTA */}
        <section className="mt-32 relative px-4">
          <div className="rounded-[3rem] bg-amber-700 px-6 py-16 text-center text-white shadow-[0_30px_60px_-15px_rgba(180,83,9,0.4)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>

            <h2 className="text-3xl font-black sm:text-5xl leading-tight max-w-3xl mx-auto">
              Ready to Transform <br />
              <span className="text-amber-300 italic">Your Smile?</span>
            </h2>
            <p className="mt-6 text-amber-100 font-bold max-w-xl mx-auto uppercase tracking-widest text-sm">
              Limited free consultation slots available this week.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-sm font-black text-amber-900 shadow-xl transition-all hover:bg-amber-50 hover:-translate-y-1"
              >
                📅 Book Appointment Now
              </a>
              <a
                href={phonePrimaryHref}
                className="inline-flex items-center justify-center rounded-full border-2 border-amber-400 bg-transparent px-10 py-5 text-sm font-black text-white transition-all hover:bg-amber-600 hover:-translate-y-1"
              >
                📞 Speak with Doctor
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                Free Consultation
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                WhatsApp Support
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                Easy EMI Options
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-32 border-t border-slate-800 bg-slate-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-24">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-amber-500/10 ring-2 ring-amber-500/20 p-2">
                  <Image
                    src="/logo.png"
                    alt="Andheri Dental Clinic logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-xl font-black text-amber-400 uppercase tracking-tight">
                    Andheri Dental Clinic
                  </p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Painless Excellence Since 2014
                  </p>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-sm">
                Dedicated to providing world-class dental care using the latest technology and a compassionate, patient-first approach.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">
                Visit Us
              </h3>
              <address className="text-sm font-bold leading-relaxed text-slate-400 not-italic">
                Shop no. 9, Ground Floor,<br />
                Moonlight C.H.S. Ltd, Chakala,<br />
                Andheri East, Mumbai 400093
              </address>
              <div className="pt-4 space-y-3">
                <a href={phonePrimaryHref} className="flex items-center gap-3 text-sm font-black text-amber-400 hover:text-amber-300 transition-colors">
                  <span>📞</span> {phonePrimary}
                </a>
                <a href={phoneSecondaryHref} className="flex items-center gap-3 text-sm font-black text-slate-400 hover:text-white transition-colors">
                  <span>📞</span> {phoneSecondary}
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center transition-colors hover:bg-amber-600">IG</a>
                <a href="#" className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center transition-colors hover:bg-amber-600">FB</a>
                <a href="#" className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center transition-colors hover:bg-amber-600">YT</a>
              </div>
              <div className="pt-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                  © {new Date().getFullYear()} ANDHERI DENTAL CLINIC.
                </p>
                <p className="text-[10px] font-bold text-slate-700 mt-1">
                  DESIGNED FOR EXCELLENCE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
