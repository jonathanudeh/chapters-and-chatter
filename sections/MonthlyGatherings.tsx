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

async function MonthlyGatherings() {
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
    <section
      id="meetings"
      className="max-w-6xl mx-auto mb-32 p-4 border-y border-black"
    >
      <h3 className="text-4xl font-serif mb-12">Our Monthly Gatherings</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {meetings.slice(0, 3).map((meeting) => (
          <div key={meeting._id} className="group">
            <div className="border-2 border-black p-2 rounded-lg transform transition-transform group-hover:-rotate-2">
              {meeting.photo && (
                <div className="bg-gray-200 aspect-video rounded-md overflow-hidden">
                  <Image
                    width={400}
                    height={225}
                    src={
                      urlFor(meeting.photo)?.width(400).height(225).url() || ""
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
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        ))}
      </div>
      {meetings.length > 3 && (
        <div className="flex justify-center mt-12">
          <Link href="/meetings">
            <button className="border-2 border-black px-8 py-3 font-bold hover:bg-brand transition-colors">
              VIEW ALL MEETINGS
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default MonthlyGatherings;
