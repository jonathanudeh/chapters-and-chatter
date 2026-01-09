import { sanity } from "@/lib/sanity";
import Image from "next/image";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import Link from "next/link";

type Book = {
  _id: string;
  title: string;
  genre: string;
  coverImage?: SanityImageSource;
};

const { projectId, dataset } = sanity.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function BooksPage() {
  const books = await sanity.fetch<Book[]>(
    `*[_type == "books"]{
      _id,
      title,
      genre,
      coverImage
    }`,
    {},
    { next: { revalidate: 30 } }
  );

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="border-b-2 border-black  bg-brand">
        <div className="max-w-6xl mx-auto py-6 px-2 flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-serif font-bold">
            The Complete Library
          </h1>
          <Link href="/#books">
            <button className="border-2 border-black rounded-sketch md:px-6 px-2 md:py-2 md:font-bold text-sm hover:bg-brand transition-colors">
              ← BACK HOME
            </button>
          </Link>
        </div>
      </div>

      {/* Books Grid */}
      <section className="max-w-7xl mx-auto p-8">
        <div className="flex flex-wrap justify-center gap-12 mb-20">
          {books.map((book) => (
            <div key={book._id} className="w-48 text-center group">
              <div className="h-64 border-2 border-black mb-4 relative shadow-[8px_8px_0px_black] group-hover:shadow-[12px_12px_0px_#FF8A5B] transition-all overflow-hidden">
                <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 text-xs z-10">
                  {book.genre}
                </div>
                {book.coverImage && (
                  <Image
                    width={192}
                    height={256}
                    src={
                      urlFor(book.coverImage)?.width(192).height(256).url() ||
                      ""
                    }
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <p className="font-bold italic">{book.title}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision Section */}
        <section className="border-t-2 border-black py-20">
          <div className="max-w-4xl mx-auto px-2">
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
                  access to quality literature, and empowering younger
                  generations to engage with and create meaningful literary
                  works. Through events, discussions, and educational
                  initiatives, we aim to make literature a vibrant, inclusive,
                  and accessible part of everyday life.
                </p>
              </div>

              {/* Vision */}
              <div className="border-2 border-black rounded-inner-sketch p-8 shadow-[8px_8px_0px_black]">
                <div className="border-b-2 border-black rounded-inner-sketch pb-4 mb-6">
                  <h2 className="text-3xl font-serif font-bold">Our Vision</h2>
                </div>
                <p className="text-lg leading-relaxed">
                  To develop into a structured, sustainable, and widely
                  recognized literary organization with strong operational
                  systems. We envision becoming a leading platform for promoting
                  literary arts in Nigeria, nurturing creativity, and shaping
                  the next generation of writers, thinkers, and literary
                  enthusiasts.
                </p>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="flex justify-center mt-16">
              <Link href="/#books">
                <button className="border-2 border-black px-10 py-4 font-bold text-lg  rounded-sketch hover:bg-brand transition-colors shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black]">
                  RETURN TO HOME
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
