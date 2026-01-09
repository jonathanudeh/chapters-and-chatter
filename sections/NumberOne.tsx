function NumberOne() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t-2 border-black/10">
      <div className="border-4 border-black p-10 rounded-sketch relative">
        <span className="absolute -top-4 -left-4 bg-brand text-black font-bold px-4 py-1 border-2 border-black rotate-[-5deg]">
          Best Seller
        </span>
        <h3 className="text-4xl font-serif mb-4 text-center">
          No.
          <span className="inline-block border-2 border-brand rounded-full px-3 w-10 h-10 italic">
            1
          </span>{" "}
          fastest growing book club
        </h3>
        <p className="text-center text-gray-600">
          We pick a theme, you pick the pace. No pressure, just progress.
        </p>
      </div>
    </section>
  );
}

export default NumberOne;
