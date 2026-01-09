import { sanity } from "@/lib/sanity";
import Image from "next/image";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import Link from "next/link";

type Meeting = {
  _id: string;
  date: string;
  photo: SanityImageSource;
};

const { projectId, dataset } = sanity.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function MeetingsPage() {
  const meetings = await sanity.fetch<Meeting[]>(
    `*[_type == "meetings"]{
      _id,
      date,
      photo
    } | order(date desc)`,
    {},
    { next: { revalidate: 30 } }
  );

  return (
    <main className="min-h-screen bg-canvas">
      {/* Header */}
      <div className="border-b-2 border-black  bg-brand">
        <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-serif font-bold">
            All Our Gatherings
          </h1>
          <Link href="/">
            <button className="border-2 border-black rounded-sketch md:px-6 px-2 md:py-2 font-bold hover:bg-brand transition-colors">
              ← BACK HOME
            </button>
          </Link>
        </div>
      </div>

      {/* Meetings Grid */}
      <section className="max-w-6xl mx-auto px-2 md:px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {meetings.map((meeting) => (
            <div key={meeting._id} className="group">
              <div className="border-2 border-black p-2 rounded-lg transform transition-transform group-hover:-rotate-2 hover:shadow-[8px_8px_0px_black]">
                {meeting.photo && (
                  <div className="bg-gray-200 aspect-video rounded-md overflow-hidden">
                    <Image
                      width={400}
                      height={225}
                      src={
                        urlFor(meeting.photo)?.width(400).height(225).url() ||
                        ""
                      }
                      alt={`Meeting from ${new Date(
                        meeting.date
                      ).toLocaleDateString()}`}
                      className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                )}
              </div>
              <p className="mt-4 font-bold text-center italic">
                {new Date(meeting.date).toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="border-t-2 border-black py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="border-2 border-black rounded-sketch p-8 shadow-[8px_8px_0px_black]">
              <div className="border-b-2 border-black rounded-inner-sketch pb-4 mb-6">
                <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed">
                To build a thriving literary community that connects Nigerians
                in Makurdi and across the diaspora. We are committed to
                fostering a deep appreciation for literary arts, expanding
                access to quality literature, and empowering younger generations
                to engage with and create meaningful literary works. Through
                events, discussions, and educational initiatives, we aim to make
                literature a vibrant, inclusive, and accessible part of everyday
                life.
              </p>
            </div>

            {/* Vision */}
            <div className="border-2 border-black rounded-inner-sketch p-8 shadow-[8px_8px_0px_black]">
              <div className="border-b-2 border-black rounded-inner-sketch pb-4 mb-6">
                <h2 className="text-3xl font-serif font-bold">Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed">
                To develop into a structured, sustainable, and widely recognized
                literary organization with strong operational systems. We
                envision becoming a leading platform for promoting literary arts
                in Nigeria, nurturing creativity, and shaping the next
                generation of writers, thinkers, and literary enthusiasts.
              </p>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center mt-16">
            <Link href="/">
              <button className="border-2 border-black px-10 py-4 font-bold text-lg  rounded-sketch hover:bg-brand transition-colors shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black]">
                RETURN TO HOME
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
