import Image from "next/image";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="text-6xl md:text-8xl font-serif leading-none mb-8">
          Find your{" "}
          <span className="relative z-10">
            community
            <svg
              className="absolute bottom-0 z-0 left-0 w-full h-5"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 25 0, 50 5 T 100 5"
                stroke="#FF8A5B"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </span>{" "}
          within stories
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-md">
          A monthly gathering of curious minds, chatters, and people who treat
          fictional characters like real friends.
        </p>
        <button className="flex items-center gap-4 group">
          <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-brand transition-all shadow-[4px_4px_0px_black]">
            <span className="text-2xl">+</span>
          </div>
          <span className="font-bold uppercase text-lg tracking-widest">
            Explore With us
          </span>
        </button>
      </div>
      <div className="relative">
        {/*  */}
        <div className="p-4 bg-white rotate-2 shadow-xl">
          {/* <Image
                     width={310}
                     height={310}
                     src="/community.svg"
                     alt="Doodle"
                     className="w-full h-auto -rotate-6"
                   /> */}
          <Image
            width={310}
            height={310}
            src="/group.svg"
            alt="Doodle"
            className="w-full rotate-6 h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
