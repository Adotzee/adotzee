import React from "react";
import { ArrowRight, BookOpen, Building2, CheckCircle2, Compass, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function StudentJourney() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Your Journey to Success</h2>
          <p className="text-xl text-slate-500 font-medium">A structured path from confusion to college admission.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-blue-100 z-0"></div>
          
          {[
            { step: "01", title: "Explore", desc: "Discover 1000+ courses and colleges matching your profile.", icon: Compass, color: "text-blue-600 bg-blue-50" },
            { step: "02", title: "Calculate", desc: "Check your eligibility and predict ranks instantly.", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50" },
            { step: "03", title: "Guidance", desc: "Get AI-driven recommendations & human counselling.", icon: Users, color: "text-indigo-600 bg-indigo-50" },
            { step: "04", title: "Admission", desc: "Secure your seat and apply for scholarships.", icon: GraduationCap, color: "text-purple-600 bg-purple-50" },
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-3xl ${item.color} flex items-center justify-center mb-6 shadow-xl border border-white group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-10 h-10" />
              </div>
              <div className="text-sm font-black text-slate-300 mb-2">{item.step}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareerGuidance() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-br from-indigo-950 to-blue-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Confused about what to study?</h2>
              <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
                Take our scientifically designed Career Aptitude Test or speak to our expert counsellors. We map your skills to the perfect degree and college.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tools/career-aptitude-test">
                  <Button className="w-full sm:w-auto h-14 px-8 rounded-full bg-white text-indigo-900 hover:bg-blue-50 font-black shadow-xl transition-all">
                    Take Aptitude Test
                  </Button>
                </Link>
                <Link href="/recommendations">
                  <Button className="w-full sm:w-auto h-14 px-8 rounded-full bg-indigo-800 hover:bg-indigo-700 text-white font-bold border border-indigo-700 shadow-xl transition-all">
                    Talk to Expert
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6">
                <h4 className="font-black text-2xl mb-1 text-blue-300">10k+</h4>
                <p className="text-indigo-200 text-sm font-medium">Students Counselled</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 mt-8">
                <h4 className="font-black text-2xl mb-1 text-emerald-400">98%</h4>
                <p className="text-indigo-200 text-sm font-medium">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SuccessMetrics() {
  return (
    <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {[
            { value: "500+", label: "Verified Colleges", color: "text-blue-400" },
            { value: "50k+", label: "Students Helped", color: "text-emerald-400" },
            { value: "100%", label: "Admission Support", color: "text-purple-400" },
            { value: "₹2Cr+", label: "Scholarships Given", color: "text-amber-400" }
          ].map((metric, i) => (
            <div key={i}>
              <div className={`text-4xl md:text-5xl font-black mb-2 ${metric.color}`}>{metric.value}</div>
              <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdmissionProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Direct Admission Simplified</h2>
          <p className="text-xl text-slate-500 font-medium">No hidden fees. Total transparency.</p>
        </div>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {[
            { title: "Profile Evaluation", desc: "Submit your details. We analyze your scores and preferences." },
            { title: "College Shortlisting", desc: "Get a personalized list of colleges where you have guaranteed admission." },
            { title: "Document Verification", desc: "Upload docs digitally. We handle the paperwork with the college." },
            { title: "Seat Confirmation", desc: "Receive the official admission letter and pay fees directly to the college." }
          ].map((step, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {i + 1}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LatestBlogs() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Latest Insights</h2>
            <p className="text-xl text-slate-500 font-medium">Guides and news to help you stay ahead.</p>
          </div>
          <Link href="/blogs" className="hidden md:flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
            View All <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Top 10 Engineering Colleges in Bangalore 2026", cat: "Colleges", img: "bg-blue-100" },
            { title: "How to apply for the Kerala LBS Allotment", cat: "Guides", img: "bg-emerald-100" },
            { title: "BSc Nursing vs Pharm D: Which is better?", cat: "Courses", img: "bg-indigo-100" }
          ].map((blog, i) => (
            <Link key={i} href="/blogs" className="group">
              <div className={`w-full h-48 rounded-2xl ${blog.img} mb-6 overflow-hidden relative`}>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">{blog.cat}</div>
              <h3 className="text-xl font-black text-slate-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">{blog.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
