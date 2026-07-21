import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-sm text-slate-400 mb-4">{COMPANY_INFO.seo.description}</p>
            <p className="text-sm font-semibold text-indigo-400">Trusted by students across India.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Discover</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/colleges" className="hover:text-indigo-400 transition-colors">Verified Colleges</Link></li>
              <li><Link href="/courses" className="hover:text-indigo-400 transition-colors">Top Courses</Link></li>
              <li><Link href="/states" className="hover:text-indigo-400 transition-colors">Colleges by State</Link></li>
              <li><Link href="/cities" className="hover:text-indigo-400 transition-colors">Colleges by City</Link></li>
              <li><Link href="/reviews" className="hover:text-indigo-400 transition-colors">Student Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blogs" className="hover:text-indigo-400 transition-colors">Education Blog</Link></li>
              <li><Link href="/guides" className="hover:text-indigo-400 transition-colors">Admission Guides</Link></li>
              <li><Link href="/faq" className="hover:text-indigo-400 transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
              <li><Link href="/accessibility" className="hover:text-indigo-400 transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
