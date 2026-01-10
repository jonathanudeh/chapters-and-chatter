import Image from "next/image";

function AboutTheClub() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center"
    >
      <div className="order-2 md:order-1">
        <Image
          src="/Community.svg"
          alt="About the club"
          width={280}
          height={280}
          className="object-contain"
        />
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-5xl font-serif mb-6 underline decoration-brand">
          About the club
        </h2>
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Chapters & Chatters started as a small reading group and is growing
          into a community of bibliophiles. We don&apos;t just read; we analyze,
          we debate, and occasionally, we cry and laugh over fictional endings.
        </p>
        <p className="text-xl leading-relaxed text-gray-700">
          Our mission is to make reading a social experience again in a world
          dominated by screens.
        </p>
      </div>
    </section>
  );
}

export default AboutTheClub;
