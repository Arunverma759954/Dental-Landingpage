"use client";

import Image from "next/image";

export default function Home() {
  const phoneNumberDisplay = "+91 99677 56611";
  const phoneNumberHref = "+919967756611";
  const whatsappNumber = "919967756611";
  const phoneSecondary = "+91 9167244898";
  const phoneSecondaryHref = "+919167244898";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Floating Mobile Actions */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:hidden">
        <a
          href={`tel:${phoneNumberHref}`}
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

      <header className="border-b border-amber-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 lg:px-8 lg:py-5">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full bg-amber-50 ring-2 ring-amber-300">
              <Image
                src="/logo.png"
                alt="Clinic logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
                Andheri Dental Clinic
              </p>
              <p className="text-xs text-slate-500">
                Advanced & painless dental care
              </p>
            </div>
          </div>

          {/* No navigation links, only primary actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${phoneNumberHref}`}
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
        {/* Hero + Quick Appointment Form */}
        <section className="relative grid gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-100 p-6 shadow-sm shadow-amber-100 lg:grid-cols-[1.4fr_minmax(0,1fr)] lg:p-10">
          {/* Hero background image (clinic / smile) */}
          <div className="pointer-events-none absolute inset-y-0 right-[-10%] -z-10 hidden opacity-40 sm:block lg:right-0">
            <div className="relative h-full w-[60%] min-w-[260px]">
              <Image
                src="/pic1.webp"
                alt="Smiling dental patient"
                fill
                className="object-cover object-center"
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
                Andheri Dental Clinic
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Pain-Free & Advanced Dental Treatment in{" "}
                <span className="text-amber-700">Andheri East</span>
              </h1>
            </div>

            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              Get gentle, modern dental care with advanced technology, minimal
              pain and maximum comfort. From routine checkups to smile
              makeovers, we take care of your entire family&apos;s oral health.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/40 transition hover:bg-amber-700"
              >
                📅 Book Free Consultation
              </a>
              <a
                href={`tel:${phoneNumberHref}`}
                className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white px-5 py-3 text-sm font-semibold text-amber-800 shadow-sm transition hover:border-amber-300 hover:bg-amber-50"
              >
                📞 Call Now: {phoneNumberDisplay}
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
                <span>Painless & gentle treatments</span>
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 transition placeholder:text-slate-400 focus:bg-white focus:border-sky-400 focus:ring-2"
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 transition placeholder:text-slate-400 focus:bg-white focus:border-sky-400 focus:ring-2"
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 transition focus:bg-white focus:border-sky-400 focus:ring-2"
                >
                  <option value="">Select treatment</option>
                  <option>Dental Implants</option>
                  <option>Root Canal (RCT)</option>
                  <option>Braces & Aligners</option>
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 transition focus:bg-white focus:border-sky-400 focus:ring-2"
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

        {/* About Clinic */}
        <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_minmax(0,1fr)]">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              About Our Clinic
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Providing advanced and painless dental care in Andheri East with modern
              equipment and experienced specialists. We focus on gentle
              treatments, strict hygiene and long-term oral health for you and
              your family.
            </p>

            <div className="mt-6 grid gap-4 text-sm text-slate-700 sm:grid-cols-3">
              <div className="rounded-2xl bg-amber-50 p-4 shadow-sm shadow-amber-100">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  Experience
                </p>
                <p className="mt-1 text-xl font-semibold text-slate-900">
                  10+ Years
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Trusted dental care in Andheri East
                </p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-4 shadow-sm shadow-amber-100">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  Technology
                </p>
                <p className="mt-1 text-xl font-semibold text-slate-900">
                  Digital X-Ray
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Modern, low-radiation imaging
                </p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-4 shadow-sm shadow-amber-100">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  Comfort
                </p>
                <p className="mt-1 text-xl font-semibold text-slate-900">
                  Painless Care
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Gentle, patient-friendly approach
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-56 w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-amber-200 via-amber-50 to-amber-200 shadow-lg shadow-amber-200 ring-1 ring-amber-300/60">
              <Image
                src="/img2.webp"
                alt="Clinic interior"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-amber-900/40 via-amber-800/10 to-transparent p-5">
                <div>
                  <p className="inline-flex rounded-full bg-amber-700 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-50">
                    Modern Dental Care
                  </p>
                  <p className="mt-3 text-lg font-semibold text-amber-50 drop-shadow">
                    Clean, comfortable & friendly clinic environment.
                  </p>
                </div>
                <div className="space-y-1.5 text-xs text-amber-50/90">
                  <p>✓ Advanced sterilization protocols</p>
                  <p>✓ Relaxing, patient-first atmosphere</p>
                  <p>✓ Friendly and caring staff</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section className="mt-16">
          <h2 className="text-center text-2xl font-semibold text-slate-900">
            Treatments We Offer
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Complete dental solutions for you and your family.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dental Implants",
                desc: "Replace missing teeth with natural-looking, long-lasting implants.",
              },
              {
                title: "Root Canal Treatment (RCT)",
                desc: "Save damaged teeth with painless, advanced root canal procedures.",
              },
              {
                title: "Braces & Aligners",
                desc: "Straighten your teeth with metal, ceramic or clear aligners.",
              },
              {
                title: "Teeth Whitening",
                desc: "Get a brighter smile with safe and effective whitening.",
              },
              {
                title: "Smile Makeover",
                desc: "Design your dream smile with veneers, bonding and more.",
              },
              {
                title: "Kids Dentistry",
                desc: "Gentle treatments specially designed for children.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-amber-50 p-5 shadow-sm shadow-amber-100 ring-1 ring-amber-100/70 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-amber-200"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-lg">
                  <Image
                    src="/file.svg"
                    alt="Treatment icon"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-16 rounded-3xl bg-amber-900 px-5 py-8 text-amber-50 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(0,1.2fr)]">
            <div>
              <h2 className="text-2xl font-semibold">
                Why Patients Choose Our Clinic
              </h2>
              <p className="mt-2 text-sm text-amber-100/80">
                We combine experience, technology and a caring approach to make
                every dental visit comfortable and stress-free.
              </p>
              <a
                href="#appointment"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-md shadow-amber-400/40 transition hover:bg-amber-300"
              >
                Book Your Appointment
              </a>
            </div>
              <div className="grid gap-3 text-sm sm:grid-cols-2">
              {[
                "Experienced Dentist",
                "Painless Procedures",
                "Latest Technology",
                "Affordable Pricing",
                "Easy EMI Option",
                "1000+ Happy Patients",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2 rounded-2xl bg-amber-800/70 px-4 py-3"
                >
                  <span className="mt-0.5 text-lg">✔</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctor Section - Dr. Poonam Brahmadeen Singh */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-100 shadow-lg shadow-amber-100 ring-1 ring-amber-100">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_1.1fr]">
            {/* Doctor portrait */}
            <div className="relative flex items-center justify-center bg-slate-900/5 p-6 lg:p-0">
              <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl shadow-amber-900/10 lg:max-w-none lg:rounded-none lg:rounded-l-3xl">
                <Image
                  src="/dr-img.png"
                  alt="Dr. Poonam Brahmadeen Singh"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:from-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left lg:hidden">
                  <p className="text-sm font-semibold text-white drop-shadow-md">
                    Dr. Poonam Brahmadeen Singh
                  </p>
                  <p className="text-xs text-amber-200">Personalised dental care</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center px-6 py-8 lg:px-10 lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                Meet Your Dentist
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Personalised care from Dr. Poonam Brahmadeen Singh
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Modern diagnostics, pain-minimised treatments, and same-day
                emergency access. Your comfort and clarity come first at every
                visit.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-800">
                  Modern diagnostics
                </span>
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-800">
                  Pain-minimised care
                </span>
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-800">
                  Same-day emergency
                </span>
              </div>

              <a
                href="#appointment"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/30 transition hover:bg-amber-700"
              >
                Know more about Doctor
                <span className="text-base" aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16">
          <h2 className="text-center text-2xl font-semibold text-slate-900">
            What Our Patients Say
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Real feedback from patients who trusted us with their smile.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  name: "Priya K.",
                  text: "I was very scared of dental treatments but doctor made the whole root canal absolutely painless. Highly recommended!",
                },
                {
                  name: "Rahul S.",
                  text: "Got my teeth cleaning and whitening done. Very hygienic clinic, modern equipment and friendly staff.",
                },
                {
                  name: "Meera & Family",
                  text: "Our whole family visits this clinic. Doctor is very patient with kids and explains everything properly.",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col rounded-2xl bg-white p-5 shadow-sm shadow-amber-50"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">
                      {review.name}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-amber-500">
                      {"★★★★★".split("").map((star, idx) => (
                        <span key={idx}>{star}</span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 sm:text-sm">
                    {review.text}
                  </p>
                  <p className="mt-3 text-[11px] text-slate-400">
                    Google Review
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-4 h-56 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 via-white to-amber-200 shadow-lg shadow-amber-100 sm:mt-0">
              <Image
                src="/img11.webp"
                alt="Happy patient smile collage"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
          </div>
        </section>

        {/* Offers */}
        <section className="mt-16 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-amber-100 px-5 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Special Offers This Month
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Limited-time offers to help you start your dental treatment with
                confidence.
              </p>
            </div>
            <a
              href="#appointment"
              className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/40 transition hover:bg-amber-700"
            >
              Grab Offer &amp; Book Slot
            </a>
          </div>

          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-0 shadow-sm shadow-amber-100">
              <div className="relative h-28 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src="/img1.webp"
                  alt="Free dental checkup"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4">
                <p className="text-lg">🎁</p>
                <p className="mt-2 font-semibold text-slate-900">
                  Free Dental Checkup
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Get a complete oral health evaluation at no consultation cost.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-0 shadow-sm shadow-amber-100">
              <div className="relative h-28 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src="/img2%20(1).webp"
                  alt="Teeth whitening offer"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4">
                <p className="text-lg">🎁</p>
                <p className="mt-2 font-semibold text-slate-900">
                  20% Off Teeth Whitening
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Brighten your smile with safe, professional whitening.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-0 shadow-sm shadow-amber-100">
              <div className="relative h-28 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src="/img9.webp"
                  alt="Root canal with X-ray"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4">
                <p className="text-lg">🎁</p>
                <p className="mt-2 font-semibold text-slate-900">
                  Free X-Ray with RCT
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Digital X-ray included with every root canal treatment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Gallery */}
        <section className="mt-16">
          <h2 className="text-center text-2xl font-semibold text-slate-900">
            Clinic Gallery
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            A glimpse of our clinic, technology and patient smiles.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { src: "/img1%20(1).webp", alt: "Clinic interior 1" },
              { src: "/img2.webp", alt: "Clinic interior 2" },
              { src: "/img7.webp", alt: "Dentist at work" },
              { src: "/img9.webp", alt: "Smiling patient 1" },
              { src: "/img11.webp", alt: "Smiling patient 2" },
              { src: "/pic1.webp", alt: "Dental chair and equipment" },
              { src: "/img1.webp", alt: "Waiting area" },
              { src: "/img2%20(1).webp", alt: "Treatment room" },
            ].map((item) => (
              <div
                key={item.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Location & Contact */}
        <section className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Visit Our Clinic
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Conveniently located on Mahakali Caves Rd, Chakala, Andheri East.
              Easy to reach by public transport with parking available nearby.
            </p>

            <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-4 shadow-sm shadow-amber-100">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  Address
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Shop no. 9, Ground Floor, Moonlight C.H.S. Ltd, New Mahakali
                  Caves Rd, Chakala, Andheri East, Mumbai, Maharashtra 400093
                </p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-4 shadow-sm shadow-amber-100">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  Contact
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Phone:{" "}
                  <a
                    href={`tel:${phoneNumberHref}`}
                    className="font-semibold text-amber-800"
                  >
                    {phoneNumberDisplay}
                  </a>
                  <br />
                  WhatsApp:{" "}
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-600"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-900 px-4 py-3 text-slate-50">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Working Hours
                </p>
                <p className="mt-1 text-sm">
                  Mon – Sat: 10:00 AM – 2:00 PM
                  <br />
                  Mon – Sat: 5:00 PM – 9:00 PM
                  <br />
                  Sun: By Appointment Only
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Easy Booking
                </p>
                <p className="mt-1 text-sm">
                  Tap on{" "}
                  <span className="font-semibold text-amber-800">
                    Call
                  </span>{" "}
                  or{" "}
                  <span className="font-semibold text-emerald-600">
                    WhatsApp
                  </span>{" "}
                  buttons to book your visit instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="h-64 overflow-hidden rounded-3xl bg-slate-200 shadow-md shadow-sky-100 sm:h-80">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60317.023644241635!2d72.860899!3d19.115815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91e5825d75f%3A0x5d9cba987ddf0a74!2sAndheri%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1772121242731!5m2!1sen!2sin"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16 rounded-3xl bg-amber-700 px-5 py-8 text-center text-amber-50 sm:px-8 sm:py-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Book Your Appointment Today &amp; Get a Confident Smile!
          </h2>
          <p className="mt-2 text-sm text-amber-100">
            Limited free consultation slots available. Take the first step
            towards a healthy, beautiful smile.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-amber-800 shadow-md shadow-amber-500/40 transition hover:bg-amber-50"
            >
              📅 Book Appointment Now
            </a>
            <a
              href={`tel:${phoneNumberHref}`}
              className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-amber-800/70 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-800"
            >
              📞 Call Now
            </a>
          </div>
          <p className="mt-4 text-[11px] text-amber-100/80">
            Free consultation • WhatsApp support • Easy EMI options available
          </p>
        </section>
      </main>

      <footer className="border-t border-amber-200 bg-slate-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:gap-12">
            {/* Logo + clinic name */}
            <div className="flex flex-col gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-amber-500/20 ring-2 ring-amber-400/50">
                <Image
                  src="/logo.png"
                  alt="Andheri Dental Clinic logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-amber-400">
                Andheri Dental Clinic
              </p>
              <p className="text-xs text-slate-400">
                Caring, painless dentistry in Andheri East, Mumbai
              </p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Address
              </h3>
              <address className="mt-3 text-sm leading-relaxed text-slate-300 not-italic">
                Shop no. 9, Ground Floor,
                <br />
                Moonlight C.H.S. Ltd, New
                <br />
                Mahakali Caves Rd, Chakala,
                <br />
                Andheri East, Mumbai,
                <br />
                Maharashtra 400093
              </address>
            </div>

            {/* Contact + Social */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Contact
              </h3>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={`tel:${phoneNumberHref}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-amber-400"
                >
                  <span className="text-amber-400" aria-hidden>📞</span>
                  {phoneNumberDisplay}
                </a>
                <a
                  href={`tel:${phoneSecondaryHref}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-amber-400"
                >
                  <span className="text-amber-400" aria-hidden>📞</span>
                  {phoneSecondary}
                </a>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition hover:text-amber-400"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm0 5.25a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM12 7.5a3 3 0 110 6 3 3 0 010-6z" clipRule="evenodd" />
                    <path d="M18 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition hover:text-amber-400"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Andheri Dental Clinic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
