function Connect() {
  const whatsappNumber = "2347018793509";
  const email = "wuesetershone@gmail.com";

  const whatsappMessage = encodeURIComponent(
    "Hello! I came across Chapters & Chatters on your website and I'd love to join the book club. Please add me to the group. Thank you!"
  );

  const emailSubject = encodeURIComponent(
    "Request to Join Chapters & Chatters"
  );
  const emailBody = encodeURIComponent(
    "Hello,\n\nI came across Chapters & Chatters on your website and I'd love to join the book club. Please let me know the next steps.\n\nThank you!"
  );

  return (
    <footer id="connect" className="max-w-7xl mx-auto px-6 py-10 text-center">
      <h2 className="text-6xl font-serif mb-8">
        Connect <span className="italic font-light text-brand">&</span> stay
        updated
      </h2>

      <p className="text-xl mb-12">
        Join our community and never miss a gathering.
      </p>

      <div className="max-w-md mx-auto space-y-6">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <button className="w-full bg-brand border-4 border-black p-5 rounded-sketch font-black text-xl shadow-[8px_8px_0px_black] hover:translate-y-1 hover:shadow-none transition-all">
            📱 CONNECT ON WHATSAPP
          </button>
        </a>

        {/* Email */}
        <a
          href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
          className="block"
        >
          <button className="w-full border-4 border-black p-5 rounded-inner-sketch font-black text-xl shadow-[8px_8px_0px_black] hover:translate-y-1 hover:shadow-none transition-all hover:bg-brand/10">
            ✉️ REQUEST VIA EMAIL
          </button>
        </a>
      </div>

      <div className="mt-32 pt-12 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
        <p>© 2026 Chapters & Chatters</p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
          <p>Makurdi Literary Community</p>
          <p>•</p>
          <p>Building Readers & Writers</p>
        </div>
      </div>
    </footer>
  );
}

export default Connect;
