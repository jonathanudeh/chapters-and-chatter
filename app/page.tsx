import HowItWorks from "@/sections/HowItWorks";
import JoinOurBookClub from "@/sections/JoinOurBookClub";
import Hero from "@/sections/Hero";
import NumberOne from "@/sections/NumberOne";
import MonthlyGatherings from "@/sections/MonthlyGatherings";
import AboutTheClub from "@/sections/AboutTheClub";
import BooksRead from "@/sections/BooksRead";
import Connect from "@/sections/Connect";
import Nav from "@/sections/Nav";

export default function ChaptersAndChatters() {
  return (
    <div className="min-h-screen bg-canvas text-gray-900 font-sans selection:bg-brand/30 md:px-6">
      <Nav />

      <Hero />

      <HowItWorks />
      <JoinOurBookClub />
      <NumberOne />

      <MonthlyGatherings />

      <AboutTheClub />

      <BooksRead />

      <Connect />
    </div>
  );
}
