import { Metadata } from "next";
import Link from "next/link";
import { Building2, BookOpen, MapPin, Sparkles, ArrowRight, Compass, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Discover Top Colleges & Courses in India | Adotzee",
  description: "Explore verified colleges, trending courses, and study destinations across India. Find your perfect educational match with Adotzee's comprehensive discovery tools.",
  alternates: {
    canonical: "/discover",
  },
  openGraph: {
    title: "Discover Top Colleges & Courses in India | Adotzee",
    description: "Explore verified colleges, trending courses, and study destinations across India.",
    url: "https://adotzee.com/discover",
    type: "website",
  }
};

const CARDS = [
  { title: "Top Colleges", desc: "Explore 500+ verified partner institutions with detailed placement and facility reports.", icon: Building2, href: "/colleges", color: "blue" },
  { title: "Trending Courses", desc: "Discover the most in-demand degrees, from B.Tech AI to B.Sc Nursing and Management.", icon: BookOpen, href: "/courses", color: "emerald" },
  { title: "Browse by State", desc: "Find leading educational hubs in Karnataka, Tamil Nadu, Kerala, and across India.", icon: MapPin, href: "/states", color: "rose" },
  { title: "Browse by City", desc: "Explore colleges in major metropolitan cities like Bangalore, Chennai, and Mangalore.", icon: MapPin, href: "/cities", color: "amber" }
];

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6 border border-blue-200">
            <Compass className="w-4 h-4" /> Start Your Journey
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Explore the Best <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Opportunities in Education
            </span>
          </h1>
          <p className="text-xl text-slate-500 font-medium mb-10 max-w-2xl mx-auto">
            Don't leave your future to chance. Browse through verified colleges, high-demand courses, and top educational destinations across India.
          </p>
          
          <div className="max-w-2xl mx-auto bg-white p-2 rounded-full shadow-lg border border-slate-200 flex items-center">
            <div className="pl-6 pr-4 text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Search for colleges, courses, or cities..." 
              className="flex-1 bg-transparent border-none outline-none font-medium text-slate-800 placeholder:text-slate-400 h-12"
            />
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 h-12 px-8 font-bold text-white transition-colors">
              Search
            </Button>
          </div>
        </div>

        {/* Discovery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {CARDS.map(card => (
            <Link key={card.href} href={card.href} className="group">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-${card.color}-50 text-${card.color}-600 group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6 flex-1">
                  {card.desc}
                </p>
                <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                  Explore <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* AI Recommendations Callout */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-slate-800 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-bold text-xs mb-4 border border-white/20">
              <Sparkles className="w-3 h-3 text-amber-400" /> AI Powered
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Not sure where to start?</h2>
            <p className="text-slate-400 font-medium text-lg">
              Stop guessing. Tell us about your marks, interests, and budget. Our AI matching engine will instantly recommend the best colleges and courses specifically for your profile.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <Link href="/recommendations">
              <Button className="h-16 px-10 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-black text-lg shadow-xl hover:scale-105 transition-all w-full md:w-auto">
                Get AI Recommendations <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
