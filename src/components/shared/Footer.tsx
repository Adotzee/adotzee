import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">

          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{COMPANY_INFO.name}</h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-xs">{COMPANY_INFO.seo.description}</p>
            <div className="space-y-3 text-sm text-slate-400 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{COMPANY_INFO.address || "Bangalore, India"}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>info@adotzee.com</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href={COMPANY_INFO.socials?.facebook || "#"} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
              <a href={COMPANY_INFO.socials?.instagram || "#"} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
              <a href={COMPANY_INFO.socials?.linkedin || "#"} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
              <a href={COMPANY_INFO.socials?.youtube || "#"} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Discover</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/colleges" className="text-slate-400 hover:text-indigo-400 transition-colors">Verified Colleges</Link></li>
              <li><Link href="/courses" className="text-slate-400 hover:text-indigo-400 transition-colors">Top Courses</Link></li>
              <li><Link href="/states" className="text-slate-400 hover:text-indigo-400 transition-colors">Colleges by State</Link></li>
              <li><Link href="/cities" className="text-slate-400 hover:text-indigo-400 transition-colors">Colleges by City</Link></li>
              <li><Link href="/search" className="text-slate-400 hover:text-indigo-400 transition-colors">Advanced Search</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Student Tools</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/tools/plus-two-percentage-calculator" className="text-slate-400 hover:text-indigo-400 transition-colors">+2 Calculator</Link></li>
              <li><Link href="/tools/lbs-rank-calculator" className="text-slate-400 hover:text-indigo-400 transition-colors">LBS Rank Predictor</Link></li>
              <li><Link href="/tools/career-aptitude-test" className="text-slate-400 hover:text-indigo-400 transition-colors">Career Aptitude Test</Link></li>
              <li><Link href="/tools/college-eligibility-checker" className="text-slate-400 hover:text-indigo-400 transition-colors">Eligibility Checker</Link></li>
              <li><Link href="/tools/scholarship-checker" className="text-slate-400 hover:text-indigo-400 transition-colors">Scholarship Checker</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Admissions</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/recommendations" className="text-slate-400 hover:text-indigo-400 transition-colors">AI Counselling</Link></li>
              <li><Link href="/scholarships/adotzee-merit-scholarship" className="text-slate-400 hover:text-indigo-400 transition-colors">Adotzee Scholarship</Link></li>
              <li><Link href="/guides" className="text-slate-400 hover:text-indigo-400 transition-colors">Admission Process</Link></li>
              <li><Link href="/faq" className="text-slate-400 hover:text-indigo-400 transition-colors">Admission FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/about" className="text-slate-400 hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/about-ai" className="text-slate-400 hover:text-indigo-400 transition-colors">Our AI Tech</Link></li>
              <li><Link href="/reviews" className="text-slate-400 hover:text-indigo-400 transition-colors">Student Reviews</Link></li>
              <li><Link href="/blogs" className="text-slate-400 hover:text-indigo-400 transition-colors">Education Blog</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-indigo-400 transition-colors">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-indigo-400 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
