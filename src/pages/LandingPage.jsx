import React, { useState, useEffect } from 'react';
import { 
  Users, Building2, Search, Filter, ShieldCheck, CheckCircle2, Award, Target, 
  Briefcase, GraduationCap, PhoneCall, Check, ArrowRight, Zap, TrendingUp, 
  Sparkles, UserCheck, Clock, FileText, HeartHandshake, Compass, Layers, 
  Headset, DollarSign, Lightbulb, Star, RefreshCw, Lock, Rocket, 
  MessageSquare, FileCheck, ThumbsUp, Code, Database, Cpu, Settings, 
  LineChart, UserPlus, XCircle, ArrowUpRight, HelpCircle, ChevronRight,
  ShieldAlert, Activity, CheckCircle, ChevronLeft, Globe
} from 'lucide-react';

export const LandingPage = () => {
  // Carousel State for "Why Talentraw?"
  const [currentSlide, setCurrentSlide] = useState(0);



  // Why Talentraw Slide Items (Matching page_content exact data & images)
  const whyItems = [
    {
      id: '01',
      title: 'Largest Women-Owned IT Staffing Partner',
      subtitle: 'NMSDC, WBENC & WEConnect Certified Enterprise Partner',
      img: '/assets/largest.jpg',
      badge: 'WOMEN-OWNED'
    },
    {
      id: '02',
      title: '$925+ Million Global Revenue Run Rate',
      subtitle: 'Proven Financial Stability & Enterprise Scalability',
      img: '/assets/925_million.jpg',
      badge: 'REVENUE'
    },
    {
      id: '03',
      title: '11,500+ Global Workforce',
      subtitle: 'High-performing technical & domain consultants deployed globally',
      img: '/assets/11500.jpg',
      badge: 'TALENT POOL'
    },
    {
      id: '04',
      title: 'Preferred Supplier to 100+ Fortune 500 Clients',
      subtitle: 'Trusted partner for mission-critical enterprise programs',
      img: '/assets/preferred.jpg',
      badge: 'FORTUNE 500'
    },
    {
      id: '05',
      title: 'Global Footprint Across 9+ Countries',
      subtitle: 'USA, Canada, India, China, Mexico, Philippines, Ireland, Poland & Singapore',
      img: '/assets/global_footprint.jpg',
      badge: 'GLOBAL REACH'
    },
    {
      id: '06',
      title: 'NMSDC, WBENC, WEConnect & CPUC Certified',
      subtitle: 'Top-tier Diversity & Compliance accreditations',
      img: '/assets/nmsdc_wbenc_weconnect_cpuc_certified.jpg',
      badge: 'DIVERSITY'
    },
    {
      id: '07',
      title: 'Proven Expertise & Market Intelligence',
      subtitle: 'Deep domain insight across tech, IT operations, and SOW delivery',
      img: '/assets/proven.jpg',
      badge: 'EXPERTISE'
    },
    {
      id: '08',
      title: 'Great Place To Work Certified',
      subtitle: 'Fostering world-class candidate and consultant workplace experiences',
      img: '/assets/great_place_to_work_certified_1.jpg',
      badge: 'CULTURE'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % whyItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [whyItems.length]);



  return (
    <main className="pt-16 bg-[#f8fafc] text-slate-800 min-h-screen font-sans selection:bg-[#253e91] selection:text-white overflow-x-hidden">

      {/* 🔴 HERO BANNER SLIDER SECTION */}
      <section className="relative bg-[#253e91] text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#fba91e]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-container-max mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white tracking-tight">
              Exceptional Talent. <br />
              <span className="text-[#fba91e]">Enduring Success.</span>
            </h1>

            <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              We partner with ambitious businesses to identify, attract, and secure high-impact professionals who shape lasting growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#our-solutions"
                className="bg-[#fba91e] hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>OUR SOLUTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#our-solutions"
                className="bg-blue-900/80 hover:bg-blue-800 text-white font-bold px-7 py-3.5 rounded-xl border border-blue-400/40 transition-all flex items-center gap-2"
              >
                <span>GET STARTED</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Hero Graphic Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl text-white space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-bold text-sm text-[#fba91e] uppercase tracking-wider">Talentraw Impact</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded">VERIFIED</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                  <span className="text-blue-200">Global Workforce</span>
                  <span className="font-bold text-white text-sm">11,500+</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                  <span className="text-blue-200">Fortune 500 Clients</span>
                  <span className="font-bold text-white text-sm">100+ Preferred</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                  <span className="text-blue-200">Annual Revenue Run Rate</span>
                  <span className="font-bold text-white text-sm">$925+ Million</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🔵 SOLUTIONS NAVIGATION BANNER (4 Key Cards) */}
      <section id="our-solutions" className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-4 sm:px-8">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-3xl font-extrabold text-[#253e91]">Our Solutions</h2>
            <div className="w-16 h-1 bg-[#fba91e] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <a href="#managed-services" className="group bg-slate-50 hover:bg-[#253e91] p-6 rounded-2xl border border-slate-200 transition-all duration-300 shadow-sm hover:shadow-xl text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 group-hover:bg-white/20 text-[#253e91] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base text-[#253e91] group-hover:text-white transition-colors">Managed Services & Project Delivery</h3>
              <p className="text-xs text-slate-500 group-hover:text-blue-100 mt-2 transition-colors">Value / Flexibility / Predictability</p>
            </a>

            <a href="#contingent-staffing" className="group bg-slate-50 hover:bg-[#253e91] p-6 rounded-2xl border border-slate-200 transition-all duration-300 shadow-sm hover:shadow-xl text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 group-hover:bg-white/20 text-[#253e91] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base text-[#253e91] group-hover:text-white transition-colors">Workforce Solutions</h3>
              <p className="text-xs text-slate-500 group-hover:text-blue-100 mt-2 transition-colors">Contingent, RPO & Direct Hire</p>
            </a>

            <a href="#diversity" className="group bg-slate-50 hover:bg-[#253e91] p-6 rounded-2xl border border-slate-200 transition-all duration-300 shadow-sm hover:shadow-xl text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 group-hover:bg-white/20 text-[#253e91] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base text-[#253e91] group-hover:text-white transition-colors">Diversity and Inclusion</h3>
              <p className="text-xs text-slate-500 group-hover:text-blue-100 mt-2 transition-colors">WBENC & NMSDC Certified</p>
            </a>

            <a href="#careers" className="group bg-slate-50 hover:bg-[#253e91] p-6 rounded-2xl border border-slate-200 transition-all duration-300 shadow-sm hover:shadow-xl text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 group-hover:bg-white/20 text-[#253e91] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base text-[#253e91] group-hover:text-white transition-colors">Consulting & Corporate Jobs</h3>
              <p className="text-xs text-slate-500 group-hover:text-blue-100 mt-2 transition-colors">Top Global Talent Opportunities</p>
            </a>

          </div>
        </div>
      </section>

      {/* ⚪ ACHIEVE OPTIMIZED EFFICIENCIES SECTION */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-container-max mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#253e91] leading-tight">
              Achieve Optimized Efficiencies <br />
              <span className="text-[#fba91e]">Across Talent & Project Execution</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Talentraw combines proprietary sourcing intelligence, rigorous technical evaluation, and agile project delivery to help global enterprises optimize workforce cost, accelerate timelines, and drive digital transformation.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#253e91] text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Flexible Commercial Models</h4>
                  <p className="text-xs text-slate-500">SOW, Managed Services, MVP, and Staff Augmentation tailored to your budget constraints.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#253e91] text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Pre-Screened Talent Dossiers</h4>
                  <p className="text-xs text-slate-500">Every candidate is pre-evaluated across 8 screening criteria before client presentation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#253e91] text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Global Compliance & Diversity</h4>
                  <p className="text-xs text-slate-500">Certified by NMSDC, WBENC, WEConnect, CPUC with 100% legal & payroll compliance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-3xl font-black text-[#253e91]">11,500+</div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Global Consultants</div>
              <p className="text-xs text-slate-500">Active professionals in engineering, IT ops & digital.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-3xl font-black text-[#fba91e]">92.4%</div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Retention Rate</div>
              <p className="text-xs text-slate-500">Consistently exceeding client placement benchmarks.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-3xl font-black text-[#253e91]">100+</div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Fortune 500</div>
              <p className="text-xs text-slate-500">Serving global leaders across tech, finance & retail.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-3xl font-black text-[#fba91e]">9+</div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Global Hubs</div>
              <p className="text-xs text-slate-500">USA, Canada, India, China, Philippines, Mexico, etc.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 🔵 WHY TALENTRAW? CAROUSEL SECTION */}
      <section className="py-16 bg-[#253e91] text-white">
        <div className="max-w-container-max mx-auto px-4 sm:px-8">
          
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Talentraw?</h2>
            <div className="w-16 h-1 bg-[#fba91e] mx-auto rounded-full"></div>
            <p className="text-blue-200 text-xs sm:text-sm max-w-xl mx-auto">
              Empowering global organizations through industry-leading metrics, diversity accreditations, and proven service delivery.
            </p>
          </div>

          {/* Interactive Carousel */}
          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              {/* Carousel Image / Icon */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-44 h-44 rounded-2xl bg-white p-4 shadow-lg flex items-center justify-center">
                  <img 
                    src={whyItems[currentSlide].img} 
                    alt={whyItems[currentSlide].title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Carousel Content */}
              <div className="md:col-span-7 space-y-4 text-center md:text-left">
                <span className="inline-block bg-[#fba91e] text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  {whyItems[currentSlide].badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {whyItems[currentSlide].title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {whyItems[currentSlide].subtitle}
                </p>

                {/* Controls */}
                <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                  <button 
                    onClick={() => setCurrentSlide((prev) => (prev === 0 ? whyItems.length - 1 : prev - 1))}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#fba91e] hover:text-slate-950 text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-bold text-blue-200">
                    {currentSlide + 1} / {whyItems.length}
                  </span>
                  <button 
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % whyItems.length)}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#fba91e] hover:text-slate-950 text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 🌍 GLOBAL PARTNER LOCATIONS BAR (Philippines, USA, India, etc.) */}
      <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-container-max mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#fba91e] text-xs font-bold uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <span>Global Delivery Footprint</span>
            </div>
            <h3 className="text-xl font-bold text-white">Partner Offices & Global Centers</h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2 bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-700">
              <img src="/assets/philippines_flag.png" alt="Philippines Flag" className="w-6 h-6 object-contain" />
              <span className="font-bold">PHILIPPINES</span>
            </div>
            <div className="bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 text-slate-300 text-center">
              <span className="text-[#fba91e] font-bold">Partner Offices:</span> USA, Canada, India, China, Mexico, Ireland, Poland, & Singapore.
            </div>
          </div>

        </div>
      </section>

      {/* 📄 LATEST BLOGS & ARTICLES SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-container-max mx-auto px-4 sm:px-8">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-extrabold text-[#253e91]">Our Latest Insights & Articles</h2>
            <div className="w-16 h-1 bg-[#fba91e] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-bold bg-blue-100 text-[#253e91] px-2.5 py-1 rounded-full uppercase">WORKFORCE REPORT</span>
                <h3 className="font-bold text-base text-slate-800 hover:text-[#253e91] transition-colors">
                  Top IT Staffing Trends & Contingent Hiring Strategies for 2026
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  How enterprise organizations are leveraging Managed Services and MVP to optimize tech talent costs.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full uppercase">DIVERSITY & INCLUSION</span>
                <h3 className="font-bold text-base text-slate-800 hover:text-[#253e91] transition-colors">
                  Building Certified Diverse Supply Chains with NMSDC & WBENC
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  The strategic advantage of partnering with women-owned and minority-certified IT solutions providers.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full uppercase">PROJECT DELIVERY</span>
                <h3 className="font-bold text-base text-slate-800 hover:text-[#253e91] transition-colors">
                  Application Modernization & DevOps Operational Best Practices
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Scaling digital content management, cloud infrastructure, and technical operations with predictable SLAs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};
