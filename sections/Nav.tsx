function Nav() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
      <div className="flex items-center gap-2 font-bold text-xl italic underline decoration-brand underline-offset-4">
        CHAPTERS & CHATTERS
      </div>
      <div className="hidden md:flex gap-10 font-medium">
        <a href="#about" className="hover:text-brand">
          About Us
        </a>
        <a href="#meetings" className="hover:text-brand">
          Meetings
        </a>
        <a href="#books" className="hover:text-brand">
          Books
        </a>
        <button className="border-2 border-black px-6 py-1 rounded-sketch hover:bg-black hover:text-white transition-all">
          Connect
        </button>
      </div>
    </nav>
  );
}

export default Nav;
