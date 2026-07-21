"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost, BlogCategory } from "@/types/blog";
import { Search, ArrowRight, BookOpen, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogsClientProps {
  featuredPosts: BlogPost[];
  trendingPosts: BlogPost[];
  latestPosts: BlogPost[];
  categories: BlogCategory[];
}

function BlogCard({ post, large = false }: { post: BlogPost; large?: boolean }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group h-full flex flex-col">
      <div className={`bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 h-full flex flex-col ${large ? 'md:flex-row' : ''}`}>
        
        <div className={`relative ${large ? 'md:w-1/2 min-h-[300px]' : 'h-64'} overflow-hidden shrink-0 bg-slate-100`}>
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold text-${post.category.color}-700 bg-${post.category.color}-100 border border-${post.category.color}-200 shadow-sm backdrop-blur-md`}>
              {post.category.name}
            </span>
          </div>
        </div>

        <div className={`p-6 md:p-8 flex flex-col flex-1 ${large ? 'justify-center' : ''}`}>
          <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readingTime} min read</span>
          </div>
          
          <h3 className={`font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors ${large ? 'text-2xl md:text-4xl leading-[1.2]' : 'text-xl md:text-2xl leading-tight'}`}>
            {post.title}
          </h3>
          
          <p className="text-slate-500 font-medium leading-relaxed mb-6 flex-1 line-clamp-3">
            {post.summary}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full bg-slate-200" />
              <span className="text-sm font-bold text-slate-700">{post.author.name}</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
        
      </div>
    </Link>
  );
}

export default function BlogsClient({ featuredPosts, trendingPosts, latestPosts, categories }: BlogsClientProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Magazine Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              The Education <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Knowledge Hub</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium mb-10">
              Expert admission guides, college reviews, and career strategies to help you navigate your educational journey with confidence.
            </p>
            
            <div className="max-w-xl mx-auto bg-white p-2 rounded-full shadow-lg border border-slate-200 flex items-center">
              <div className="pl-6 pr-4 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search articles, guides, or exams..." 
                className="flex-1 bg-transparent border-none outline-none font-medium text-slate-800 placeholder:text-slate-400 h-12"
              />
              <Button className="rounded-full bg-slate-900 hover:bg-slate-800 h-12 px-8 font-bold text-white transition-colors">
                Search
              </Button>
            </div>
          </div>

          {/* Categories Pill Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map(cat => (
              <Link key={cat.id} href={`/blogs?category=${cat.slug}`}>
                <span className={`px-5 py-2.5 rounded-full text-sm font-bold bg-white border border-slate-200 text-slate-600 hover:border-${cat.color}-300 hover:text-${cat.color}-700 hover:bg-${cat.color}-50 shadow-sm transition-all cursor-pointer block`}>
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Featured Post (Massive Card) */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <BlogCard post={featuredPosts[0]} large={true} />
            </div>
          )}
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              Trending Now
            </h2>
            <Link href="/blogs/trending" className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Inline Conversion CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Confused about your career path?</h2>
          <p className="text-slate-400 font-medium text-lg mb-10 max-w-2xl mx-auto">
            Stop reading and start acting. Take our scientifically designed Career Aptitude Test to find the perfect course for your personality.
          </p>
          <Link href="/tools/career-aptitude-test">
            <Button className="h-14 px-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-lg shadow-xl shadow-blue-500/20 hover:scale-105 transition-all">
              Take Free Aptitude Test
            </Button>
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-slate-900">Latest Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
