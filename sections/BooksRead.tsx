import { sanity } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

type Book = {
  _id: string;
  title: string;
  genre: string;
  coverImage?: {
    asset: {
      url: string;
    };
  };
};

async function BooksRead() {
  const books = await sanity.fetch<Book[]>(
    `*[_type == "books"]{
      _id,
      title,
      genre,
      coverImage{asset->{url}}
    }`
  );

  return (
    <section id="books" className="py-24 bg-brand/5 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-serif mb-16 text-center">The Library</h2>
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          {books.map((book) => (
            <div key={book._id} className="w-48 text-center group">
              <div className="h-64 bg-white border-2 border-black mb-4 relative shadow-[8px_8px_0px_black] group-hover:shadow-[12px_12px_0px_#FF8A5B] transition-all overflow-hidden">
                <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 text-xs">
                  {book.genre}
                </div>
                {book.coverImage && (
                  <Image
                    width={310}
                    height={310}
                    src={book.coverImage.asset.url}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <p className="font-bold italic">{book.title}</p>
            </div>
          ))}
        </div>
        {books.length > 3 && (
          <div className="flex justify-center">
            <Link href="/meetings">
              <button className="underline decoration-2 underline-offset-8 font-black text-xl hover:text-brand transition-colors">
                EXPLORE THE FULL ARCHIVE →
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default BooksRead;
