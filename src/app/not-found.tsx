import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-6xl font-black text-indigo-600 mb-4">404</h2>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          We couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <Link href="/" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
