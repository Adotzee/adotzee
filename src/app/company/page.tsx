import { Metadata } from "next";
import Link from "next/link";
import { Building2, Users, MapPin, Mail, Phone, ArrowRight, MessageSquare, ShieldCheck, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | Adotzee Corporate Hub",
  description: "Learn about Adotzee's mission to revolutionize educational admissions in India. Contact our team, read student reviews, and explore career opportunities.",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "About Us | Adotzee Corporate Hub",
    description: "Learn about Adotzee's mission to revolutionize educational admissions in India.",
    url: "https://adotzee.com/company",
    type: "website",
  }
};

const LINKS = [
  { title: "About Adotzee", desc: "Our mission, vision, and the story of how we're changing education.", icon: Building2, href: "/about" },
  { title: "Contact Us", desc: "Get in touch with our support and counseling teams.", icon: Phone, href: "/contact" },
  { title: "Student Reviews", desc: "See what thousands of successfully placed students say about us.", icon: MessageSquare, href: "/reviews" }
];

const STATS = [
  { value: "10,000+", label: "Students Placed" },
  { value: "500+", label: "Partner Colleges" },
  { value: "98%", label: "Success Rate" },
  { value: "₹2Cr+", label: "Scholarships Disbursed" }
];

export default function CompanyHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 font-bold text-sm mb-6 border border-slate-300">
            <Building2 className="w-4 h-4" /> The Adotzee Ecosystem
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Revolutionizing <br className="hidden md:block"/>
            <span className="text-slate-600">
              Educational Admissions
            </span>
          </h1>
          <p className="text-xl text-slate-500 font-medium mb-10 max-w-3xl mx-auto">
            We believe that every student deserves access to quality education without the stress, confusion, and hidden fees of traditional admission processes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-xl max-w-5xl mx-auto mb-24 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
          {STATS.map(stat => (
            <div key={stat.label} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-slate-500 font-bold text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
          {LINKS.map(link => (
            <Link key={link.href} href={link.href} className="group">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <link.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{link.title}</h3>
                <p className="text-slate-500 font-medium mb-6 flex-1">{link.desc}</p>
                <div className="font-bold text-slate-400 group-hover:text-slate-900 flex items-center transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Legal & Trust */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-slate-600 font-medium text-sm">
              <ShieldCheck className="w-4 h-4" /> ISO 9001:2015 Certified
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-slate-600 font-medium text-sm">
              <HeartHandshake className="w-4 h-4" /> Verified Partners
            </div>
          </div>
          <div className="flex justify-center gap-6 text-sm font-bold text-slate-400">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-slate-900 transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
