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

export default async function ReviewDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const review = await sanity.fetch<Review>(
    `*[_type == "reviews" && slug.current == $slug][0]{
      _id,
      bookTitle,
      slug,
      coverImage,
      reviewText,
      reviewDate,
      authorName
    }`,
    { slug },
    { next: { revalidate: 30 } }
  );

  if (!review) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Review not found</h1>
          <Link href="/reviews" className="underline">
            Back to reviews
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Review Content */}
      <article className="max-w-4xl mx-auto px-6 py-16 md:px-12 md:py-24">
        {/* Book Cover & Title */}
        <div className="grid md:grid-cols-[300px_1fr] gap-12 mb-12">
          {/* Book Cover */}
          <div className="w-full max-w-75  mx-auto md:mx-0">
            {review.coverImage && (
              <div className="aspect-2/3 border border-black overflow-hidden shadow-[4px_4px_0px_black]">
                <Image
                  width={300}
                  height={450}
                  src={
                    urlFor(review.coverImage)?.width(300).height(450).url() ||
                    ""
                  }
                  alt={review.bookTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Review Header */}
          <div className="space-y-4 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              {review.bookTitle}
            </h1>
            <div className="flex flex-col gap-2 text-base opacity-60">
              <time>
                {new Date(review.reviewDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              {review.authorName && (
                <p className="italic">Reviewed by {review.authorName}</p>
              )}
            </div>
          </div>
        </div>

        {/* Review Text */}
        <div className="border-t-2 border-black pt-8 mb-16">
          <p className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
            {review.reviewText}
          </p>
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-300 pt-4 flex justify-center items-center gap-8 text-sm ">
          <Link
            href="/reviews"
            className="text-slate-100 bg-brand border p-4 hover:text-brand hover:bg-slate-100"
          >
            ← All Reviews
          </Link>
          <span>•</span>
          <Link
            href="/"
            className="text-slate-100 bg-brand border p-4 hover:text-brand hover:bg-slate-100"
          >
            Home
          </Link>
        </div>
      </article>
    </main>
  );
}
