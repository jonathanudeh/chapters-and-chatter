import { sanity } from "@/lib/sanity";
import Image from "next/image";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import Link from "next/link";

type Review = {
  _id: string;
  bookTitle: string;
  slug: {
    current: string;
  };
  coverImage: SanityImageSource;
  reviewText: string;
  reviewDate: string;
  authorName?: string;
};

const { projectId, dataset } = sanity.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function ReviewsPage() {
  const reviews = await sanity.fetch<Review[]>(
    `*[_type == "reviews"]{
      _id,
      bookTitle,
      slug,
      coverImage,
      reviewText,
      reviewDate,
      authorName
    } | order(reviewDate desc)`,
    {},
    { next: { revalidate: 30 } }
  );

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b-2 border-black  bg-brand">
        <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-serif font-bold">
            Book Reviews
          </h1>
          <Link href="/">
            <button className="border-2 border-black rounded-sketch md:px-6 px-2 md:py-2 font-bold hover:bg-brand transition-colors">
              ← BACK HOME
            </button>
          </Link>
        </div>
      </div>

      {/* Reviews List */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Link key={review._id} href={`/reviews/${review.slug.current}`}>
              <article className="border border-black rounded p-4 shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] transition-all cursor-pointer group">
                {/* Book Cover */}
                <div className="w-full h-64 border border-black overflow-hidden mb-4">
                  {review.coverImage && (
                    <Image
                      width={300}
                      height={400}
                      src={
                        urlFor(review.coverImage)
                          ?.width(300)
                          .height(400)
                          .url() || ""
                      }
                      alt={review.bookTitle}
                      className="w-full h-full object-contain bg-slate-900 group-hover:scale-105 transition-transform"
                    />
                  )}
                </div>

                {/* Review Info */}
                <div className="space-y-2">
                  <h2 className="text-xl font-serif font-bold line-clamp-2">
                    {review.bookTitle}
                  </h2>

                  <p className="text-sm opacity-60">
                    {new Date(review.reviewDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>

                  <p className="text-base line-clamp-3 leading-relaxed">
                    {review.reviewText}
                  </p>

                  <div className="pt-2 text-brand font-bold text-sm group-hover:underline">
                    READ FULL REVIEW →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-16">
          <Link href="/">
            <button className="border rounded-inner-sketch border-black px-10 py-4 font-bold text-lg hover:bg-brand transition-colors shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black]">
              RETURN TO HOME
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
