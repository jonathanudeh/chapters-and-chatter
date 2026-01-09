import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-32 bg-white font-sans text-[#2D2D2D]">
      {/* STEP 1 - CIRCLED NUMBER */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block bg-[#FF8A5B] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
            Step 1
          </div>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight tracking-tight">
            Read{" "}
            <span className="relative inline-block px-2">
              1{/* Hand-drawn circle SVG */}
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 pointer-events-none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M50,10 C20,10 5,40 15,70 C25,95 75,95 85,70 C95,40 80,10 50,10 Z"
                  fill="none"
                  stroke="#FF8A5B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            book <br /> every month
          </h2>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            We want reading to be an enjoyable experience. Choose a book from
            those offered in the book club and read at a measured pace for a
            month.
          </p>
        </div>

        <div className="relative">
          {/* Handwritten Annotation */}
          <p className="absolute -top-8 right-4 text-[11px] text-gray-400 italic font-serif opacity-80 max-w-30 text-right">
            Tip: make notes to remember every detail
          </p>
          <Image
            src="/readone.png"
            alt="Worm reading"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>
      </div>

      {/* STEP 2 - BRUSH HIGHLIGHT */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="relative">
          <Image
            src="/reflecting.png"
            alt="Reflecting"
            width={320}
            height={320}
            className="object-contain"
          />
        </div>

        <div className="flex-1 space-y-6">
          <div className="inline-block bg-[#FF8A5B] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
            Step 2
          </div>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight tracking-tight">
            And break down <br /> a few chapters{" "}
            <span className="relative inline-block">
              <span className="relative z-10">every week</span>
              {/* Thick Hand-drawn brush highlight SVG */}
              <svg
                className="absolute -bottom-1 -left-2 w-[110%] h-6 z-0 opacity-60"
                viewBox="0 0 200 40"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 30 Q 50 15, 100 30 T 195 25"
                  stroke="#FF8A5B"
                  strokeWidth="18"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <div className="flex flex-col md:flex-row md:items-end gap-6 pt-4">
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              We want all our meetings to be as effective and interesting as
              possible for you. Therefore, we meet on a weekly basis to discuss
              the new chapter as quickly as possible.
            </p>
            <div className="space-y-4">
              <p className="text-[10px] text-gray-400 italic">
                *together with your group :)
              </p>
              <button className="flex items-center gap-3 font-bold group">
                <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-lg group-hover:bg-[#FF8A5B] group-hover:text-white transition-all">
                  +
                </div>
                <span className="text-xs tracking-[0.2em] uppercase font-black">
                  Join Book Club
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
