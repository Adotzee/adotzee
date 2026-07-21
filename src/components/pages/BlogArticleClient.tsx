"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { Calendar, Clock, ChevronRight, Share2, Facebook, Twitter, Linkedin, Building2, Calculator, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function BlogArticleClient({ post }: { post: BlogPost }) {
  const [activeSection, setActiveSection] = useState<string>("");

  // Simple scroll spy for TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    post.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post.sections]);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Article Hero */}
      <section className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blogs" className="hover:text-white transition-colors">Knowledge Hub</Link>
            <ChevronRight className="w-4 h-4" />
            <span className={`text-${post.category.color}-400`}>{post.category.name}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.15] tracking-tight mb-8">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-slate-300">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700" />
              <span>{post.author.name}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date(post.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <div className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Sidebar: Table of Contents & Social Share (Sticky) */}
            <aside className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-28">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Table of Contents</h4>
                <nav className="space-y-3 mb-12 border-l-2 border-slate-200">
                  {post.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(section.id, e)}
                      className={`block pl-4 text-sm font-bold transition-all ${activeSection === section.id ? `text-${post.category.color}-600 border-l-2 border-${post.category.color}-600 -ml-[2px]` : 'text-slate-500 hover:text-slate-900'}`}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>

                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Share Article</h4>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"><Facebook className="w-4 h-4" /></button>
                  <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors"><Twitter className="w-4 h-4" /></button>
                  <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"><Linkedin className="w-4 h-4" /></button>
                </div>
              </div>
            </aside>

            {/* Center: Article Content */}
            <article className="lg:w-7/12 bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-slate-200">
              <div className="prose prose-lg prose-slate max-w-none">
                {post.sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-28 mb-12">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">{section.title}</h2>
                    <div className="text-slate-600 font-medium leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: section.content }} />
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-100">
                {post.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-bold text-slate-600">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* FAQ Section */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-16 bg-slate-50 p-8 rounded-3xl border border-slate-200">
                  <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-6">
                    {post.faqs.map((faq, i) => (
                      <div key={i}>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h4>
                        <p className="text-slate-600 font-medium">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </article>

            {/* Right Sidebar: Contextual Tools & CTAs */}
            <aside className="lg:w-1/4">
              <div className="sticky top-28 space-y-6">
                
                {/* Natural Conversion CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl shadow-blue-500/20">
                  <h4 className="text-xl font-black mb-2">Check Your Eligibility</h4>
                  <p className="text-sm font-medium text-blue-100 mb-6 leading-relaxed">
                    Stop guessing. Use our AI tool to see which colleges you actually qualify for based on your marks.
                  </p>
                  <Link href="/tools/college-eligibility-checker">
                    <Button className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl h-12 shadow-sm">
                      Check Now <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>

                {/* Related Links */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Helpful Tools</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/colleges" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 font-bold text-sm transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50">
                          <Building2 className="w-4 h-4" />
                        </div>
                        Browse Top Colleges
                      </Link>
                    </li>
                    <li>
                      <Link href="/tools/plus-two-percentage-calculator" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 font-bold text-sm transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-blue-50">
                          <Calculator className="w-4 h-4" />
                        </div>
                        Percentage Calculator
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Newsletter Footer CTA */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Stay Ahead of Admissions</h2>
          <p className="text-slate-500 font-medium text-lg mb-8">
            Join 50,000+ students and parents who receive our weekly insights, important deadlines, and scholarship alerts.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input type="email" placeholder="Enter your email address" className="flex-1 h-14 rounded-xl bg-slate-50 border border-slate-200 px-6 font-medium text-slate-900 outline-none focus:border-blue-500 transition-colors" />
            <Button className="h-14 px-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-lg">
              Subscribe
            </Button>
          </div>
          <p className="text-xs font-bold text-slate-400 mt-4 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

    </div>
  );
}
