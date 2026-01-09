import Image from "next/image";

export default function JoinOurBookClub() {
  const clubs = [
    {
      id: 1,
      tag: "POPULAR CHOICE",
      title: "Detective",
      description:
        "Welcome to the exciting world of investigations. Ardent lovers of detective stories have gathered here to find answers to all mysteries.",
      image: "/detective.svg",
      width: 280,
      height: 200,
      featured: true,
    },
    {
      id: 2,
      tag: "BEST FOR YOUTH",
      title: "Fantasy",
      description:
        "Welcome to a book club for teenagers with a focus on Teen Fantasy books. Let's dive into the adventurous world of mystery.",
      image: "/fantasy.svg",
      width: 200,
      height: 220,
      featured: false,
    },
    {
      id: 3,
      tag: "TIMELESS CLASSIC",
      title: "Novel",
      description:
        '"For never was a story of more woe than this of Juliet and her Romeo...". Welcome to the touching world of novels.',
      image: "/novel.svg",
      width: 200,
      height: 220,
      featured: false,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 bg-white text-[#2D2D2D]">
      {/* SECTION TITLE WITH WAVY UNDERLINE */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-serif relative inline-block">
          Join our <br /> latest book clubs
          <svg
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-4"
            viewBox="0 0 100 20"
          >
            <path
              d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
              fill="none"
              stroke="#FF8A5B"
              strokeWidth="3"
            />
          </svg>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {clubs.map((club) => (
          <div
            key={club.id}
            className={`relative border-2 border-black p-8 md:p-12 transition-all hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] 
              ${
                club.featured
                  ? "md:col-span-2 rounded-sketch"
                  : "rounded-inner-sketch"
              }`}
          >
            {/* TAG */}
            <div className="absolute top-8 left-8">
              <span className="bg-[#FF8A5B] text-white text-[9px] font-bold px-3 py-1 rounded-sm uppercase tracking-tighter">
                {club.tag}
              </span>
            </div>

            <div
              className={`flex flex-col md:flex-row gap-8 ${
                !club.featured ? "md:flex-col" : ""
              }`}
            >
              {/* TEXT CONTENT */}
              <div className="flex-1 mt-6">
                <h3 className="text-4xl font-serif mb-6">{club.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  {club.description}
                </p>

                {club.featured && (
                  <button className="mt-10 flex items-center gap-3 group font-bold">
                    <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-[#FF8A5B] group-hover:text-white transition-all">
                      +
                    </div>
                    <span className="text-xs tracking-widest uppercase font-black">
                      SEE MORE DETAILS
                    </span>
                  </button>
                )}
              </div>

              {/* ILLUSTRATION */}
              <div className="flex justify-center items-center">
                <Image
                  src={club.image}
                  alt={club.title}
                  width={club.width}
                  height={club.height}
                  className="object-contain"
                />
              </div>
            </div>

            {/* FLOATING CORNER BUTTON FOR SMALL CARDS */}
            {!club.featured && (
              <div className="absolute -bottom-5 -right-5 md:right-4 md:-bottom-5">
                <button
                  className={`w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-2xl transition-all shadow-[4px_4px_0px_black] active:shadow-none
                   ${
                     club.title === "Fantasy"
                       ? "bg-[#FF8A5B] text-white"
                       : "bg-white text-black"
                   }`}
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
