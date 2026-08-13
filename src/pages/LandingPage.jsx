import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Building2, Search, Filter, ShieldCheck, CheckCircle2, Award, Target, 
  Briefcase, GraduationCap, PhoneCall, Check, ArrowRight, Zap, TrendingUp, 
  Sparkles, UserCheck, Clock, FileText, HeartHandshake, Compass, Layers, 
  Headset, DollarSign, Lightbulb, Star, RefreshCw, Lock, Rocket, 
  MessageSquare, FileCheck, ThumbsUp, Code, Database, Cpu, Settings, 
  LineChart, UserPlus, XCircle, ArrowUpRight, HelpCircle, ChevronRight,
  ShieldAlert, Activity, CheckCircle
} from 'lucide-react';

export const LandingPage = () => {
  const [activeIndustryTab, setActiveIndustryTab] = useState('all');

  // 12-Step Employer-Side Process
  const employerSteps = [
    { step: 1, title: 'Employer Shares Requirement', desc: 'Deep-dive intake into role criteria, technical specifications, compensation budget, and hiring timeline.', icon: FileText, tag: 'INTAKE' },
    { step: 2, title: 'Role & Skill Understanding', desc: 'Analyzing domain nuances, key result areas (KRAs), soft skills, and organizational culture fit.', icon: Compass, tag: 'ANALYSIS' },
    { step: 3, title: 'Targeted Candidate Search', desc: 'Proactive sourcing across proprietary talent databases, professional networks, and referral channels.', icon: Search, tag: 'SOURCING' },
    { step: 4, title: 'Quality Shortlisting', desc: 'Filtering candidate pools to extract profiles matching foundational skill and experience thresholds.', icon: Filter, tag: 'FILTERING' },
    { step: 5, title: 'Initial Candidate Screening', desc: 'Structured phone/video intake interviews evaluating candidate background, work history, and motivation.', icon: PhoneCall, tag: 'SCREENING' },
    { step: 6, title: 'Skill & Communication Evaluation', desc: 'Comprehensive domain competence testing, technical Q&A, and spoken/written communication assessments.', icon: ShieldCheck, tag: 'EVALUATION' },
    { step: 7, title: 'Qualification Criteria Match', desc: 'Validating experience authenticity, certifications, compensation expectations, and notice period constraints.', icon: CheckCircle2, tag: 'VALIDATION' },
    { step: 8, title: 'Candidate Readiness & Guidance', desc: 'Briefing candidates on client expectations, role context, and interview preparation to ensure high confidence.', icon: Sparkles, tag: 'GUIDANCE' },
    { step: 9, title: 'Qualified Candidate Presentation', desc: 'Delivering detailed, pre-screened candidate dossiers directly to the employer hiring manager.', icon: UserCheck, tag: 'DOSSIER' },
    { step: 10, title: 'Employer Interview & Selection', desc: 'Coordinating interview schedules, feedback loops, and client assessment rounds.', icon: Building2, tag: 'INTERVIEW' },
    { step: 11, title: 'Process & Offer Coordination', desc: 'Assisting with salary alignment, offer terms, candidate acceptance, and notice period tracking.', icon: HeartHandshake, tag: 'OFFER' },
    { step: 12, title: 'Post-Selection Support', desc: 'Maintaining regular check-ins during onboarding to ensure smooth integration and candidate retention.', icon: ThumbsUp, tag: 'ONBOARDING' }
  ];

  // 8-Point Screening Criteria
  const screeningPoints = [
    { id: '01', name: 'Resume & Profile Verification', desc: 'Validating work history chronology, job stability, key achievements, and resume authenticity.', icon: FileCheck },
    { id: '02', name: 'Education & Credentials Check', desc: 'Verifying degrees, educational institutions, technical certifications, and specialized accreditations.', icon: GraduationCap },
    { id: '03', name: 'Relevant Experience Assessment', desc: 'Evaluating actual hands-on domain experience versus theoretical knowledge for role alignment.', icon: Briefcase },
    { id: '04', name: 'Technical & Job-Specific Skills', desc: 'Assessing core software, tool proficiency, domain methodologies, and practical problem-solving ability.', icon: Cpu },
    { id: '05', name: 'Communication & Soft Skills', desc: 'Evaluating verbal articulation, clarity, listening skills, professional demeanor, and teamwork.', icon: MessageSquare },
    { id: '06', name: 'Role Requirements Alignment', desc: 'Checking alignment with location constraints, work arrangements (remote/hybrid/onsite), and shift flexibility.', icon: Target },
    { id: '07', name: 'Availability & Notice Period', desc: 'Confirming actual notice period length, buy-out options, and immediate joining readiness.', icon: Clock },
    { id: '08', name: 'Overall Cultural & Role Fit', desc: 'Measuring career trajectory expectations, enthusiasm, adaptability, and long-term retention potential.', icon: Star }
  ];

  // 6 Core Values
  const coreValues = [
    { title: 'Quality First', desc: 'We prioritize candidate fit and qualification accuracy over sending bulk unverified resumes to employers.', icon: Award, accent: 'text-[#0053db] bg-blue-50 border-blue-200' },
    { title: 'Integrity', desc: 'We operate with unwavering honesty, ensuring transparent expectations for both employers and job seekers.', icon: ShieldCheck, accent: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
    { title: 'Transparency', desc: 'Clear communication at every step—no hidden candidate fees, no misleading job specifications.', icon: Lock, accent: 'text-teal-700 bg-teal-50 border-teal-200' },
    { title: 'Candidate Focus', desc: 'We treat candidates as valued partners, providing career guidance, skill evaluation, and zero-cost placement support.', icon: Users, accent: 'text-sky-700 bg-sky-50 border-sky-200' },
    { title: 'Employer Partnership', desc: "We act as an extension of the employer's HR team, deeply understanding their talent requirements and company culture.", icon: HeartHandshake, accent: 'text-amber-700 bg-amber-50 border-amber-200' },
    { title: 'Continuous Improvement', desc: 'We constantly refine our screening methodologies, evaluation criteria, and candidate preparation frameworks.', icon: RefreshCw, accent: 'text-purple-700 bg-purple-50 border-purple-200' }
  ];

  // Industries / Roles
  const industries = [
    { category: 'tech', title: 'Technology & Software Engineering', roles: ['Full-Stack Developers', 'Cloud & DevOps Engineers', 'QA & Automation Leads', 'Product Managers', 'UI/UX Designers'], icon: Code },
    { category: 'it', title: 'IT Services & Infrastructure', roles: ['System Administrators', 'Network Engineers', 'Cybersecurity Specialists', 'Database Administrators', 'IT Helpdesk Support'], icon: Database },
    { category: 'ops', title: 'Business Operations & Management', roles: ['Operations Managers', 'Process Improvement Specialists', 'Project Managers (PMP/Scrum)', 'Strategy Analysts'], icon: Settings },
    { category: 'finance', title: 'Finance, Accounting & Analytics', roles: ['Financial Analysts', 'Chartered Accountants', 'Cost Controllers', 'Data Analysts & BI Engineers'], icon: LineChart },
    { category: 'sales', title: 'Sales, Marketing & Business Development', roles: ['B2B Account Executives', 'Enterprise Sales Leads', 'Digital Marketing Managers', 'Growth Strategists'], icon: TrendingUp },
    { category: 'hr', title: 'Human Resources & Talent Acquisition', roles: ['HR Business Partners', 'Technical Recruiters', 'Payroll & Compliance Officers', 'People Operations'], icon: Users },
    { category: 'support', title: 'Customer Support & Client Success', roles: ['Customer Success Managers', 'Technical Support Engineers', 'Client Escalation Specialists'], icon: Headset },
    { category: 'admin', title: 'Administration & Executive Support', roles: ['Executive Assistants', 'Office Operations Leads', 'Administrative Coordinators'], icon: Briefcase },
    { category: 'eng', title: 'Engineering & Technical Services', roles: ['Systems Engineers', 'Hardware & Electronics Engineers', 'Field Technical Leads'], icon: Cpu },
    { category: 'niche', title: 'Custom Professional Roles', roles: ['Tailored sourcing for specialized niche roles based on employer specifications.'], icon: Sparkles }
  ];

  const filteredIndustries = activeIndustryTab === 'all' 
    ? industries 
    : industries.filter(ind => ind.category === activeIndustryTab);

  return (
    <main className="bg-[#f8fafc] text-[#0f172a] min-h-screen font-sans selection:bg-[#0053db] selection:text-white overflow-x-hidden">
      
      {/* LIGHT MODE AMBIENT GLOW BACKDROP */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-100/70 via-sky-100/40 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute top-[45%] -left-40 w-[550px] h-[550px] bg-teal-100/50 rounded-full blur-[140px]"></div>
        <div className="absolute top-[75%] -right-40 w-[550px] h-[550px] bg-indigo-100/50 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10">

        {/* SECTION 1: HERO & WHO WE ARE (#who-we-are) */}
        <section id="who-we-are" className="pt-28 pb-20 md:pt-40 md:pb-28 px-4 sm:px-8 max-w-container-max mx-auto scroll-mt-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              {/* Light Mode Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0053db] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0053db] animate-pulse"></span>
                <span>RECRUITMENT & TALENT PARTNER (NOT A JOB BOARD)</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
                Precision Talent Partnering for <span className="bg-gradient-to-r from-[#0053db] via-blue-600 to-indigo-600 bg-clip-text text-transparent">Growing Enterprises</span>
              </h1>

              <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Gozonixa is a dedicated recruitment solutions company, not a self-service job listing site. We analyze employer specifications, search, screen, evaluate skills, and present pre-qualified candidates—reducing employer recruitment effort while providing candidates with 100% free career guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#for-employers" 
                  className="bg-[#0053db] hover:bg-[#0042b3] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-center text-sm"
                >
                  <span>Share Employer Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#for-candidates" 
                  className="bg-white hover:bg-slate-50 text-[#0f172a] border border-slate-300 px-8 py-4 rounded-xl shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-2 text-center text-sm font-semibold"
                >
                  <span>For Candidates (Career Support)</span>
                </a>
              </div>

              {/* Light Trust Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200">
                <div className="space-y-1">
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#0053db]">100%</div>
                  <div className="text-xs text-slate-500 font-mono font-medium">PRE-VETTED TALENT</div>
                </div>
                <div className="space-y-1">
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-indigo-600">80%</div>
                  <div className="text-xs text-slate-500 font-mono font-medium">TIME SAVED</div>
                </div>
                <div className="space-y-1">
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-600">ZERO</div>
                  <div className="text-xs text-slate-500 font-mono font-medium">CANDIDATE FEE</div>
                </div>
              </div>
            </div>

            {/* Hero Visual Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 p-2.5 shadow-xl relative group">
                  <div className="relative rounded-2xl overflow-hidden h-[420px]">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      alt="Recruitment Specialists Evaluating Candidates" 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/30 to-transparent"></div>
                    
                    <div className="absolute bottom-6 left-6 right-6 space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono text-white border border-white/30">
                        <Award className="w-3.5 h-3.5 text-amber-300" />
                        <span>REQUIREMENT-DRIVEN MATCHING</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white">End-to-End Talent Evaluation</h3>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        We replace unvetted resume flooding with curated, pre-screened candidate dossiers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Widget 1 */}
                <div className="absolute -top-6 -left-6 bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3.5 shadow-xl float">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0053db] flex items-center justify-center shrink-0 border border-blue-100">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#0f172a]">Skill Vetted</div>
                    <div className="text-[11px] text-slate-500 font-mono">PRE-SCREENED TALENT</div>
                  </div>
                </div>

                {/* Floating Widget 2 */}
                <div className="absolute -bottom-6 -right-6 bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3.5 shadow-xl float-delay">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#0f172a]">Employer Authority</div>
                    <div className="text-[11px] text-slate-500 font-mono">FINAL SELECTION</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 2: WHAT WE DO (#what-we-do) */}
        <section id="what-we-do" className="py-20 bg-slate-100/70 border-y border-slate-200/80 scroll-mt-24">
          <div className="max-w-container-max mx-auto px-4 sm:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0053db] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                <Layers className="w-4 h-4" />
                <span>12-Step Employer Recruitment Workflow</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Comprehensive End-to-End Talent Sourcing & Screening
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                We manage candidate sourcing, skill evaluation, and interview preparation through our structured 12-step hiring workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {employerSteps.map((item) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={item.step}
                    className="bg-white border border-slate-200/90 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl space-y-4 group relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-[#0053db] border border-blue-100">
                        STEP {item.step < 10 ? `0${item.step}` : item.step} • {item.tag}
                      </span>
                      <IconComp className="w-5 h-5 text-slate-400 group-hover:text-[#0053db] transition-colors" />
                    </div>
                    
                    <h3 className="font-display text-lg font-bold text-[#0f172a] group-hover:text-[#0053db] transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Selection Authority Notice Banner */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border border-blue-200 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0053db] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase font-mono tracking-wider text-[#0053db]">Employer Hiring Selection Authority Notice</h4>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                  <strong>Gozonixa</strong> manages end-to-end requirement understanding, candidate search, screening, evaluation, readiness guidance, and candidate presentation. <strong>The Employer retains full final hiring selection authority.</strong>
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 3: OUR RECRUITMENT APPROACH (#recruitment-approach) */}
        <section id="recruitment-approach" className="py-20 max-w-container-max mx-auto px-4 sm:px-8 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              <Award className="w-4 h-4" />
              <span>Quality Over Volume</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Pre-Screened Candidates vs. Resume Dumping
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Why waste hundreds of hours reviewing mismatched resumes? Here is how our requirement-driven recruitment approach compares.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Traditional Resume Dumping */}
            <div className="bg-rose-50/70 border border-rose-200 rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold border border-rose-200">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-rose-950">Traditional Job Boards & Resume Dumping</h3>
                  <p className="text-xs text-rose-700 font-mono font-semibold">HIGH VOLUME, LOW RELEVANCE</p>
                </div>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Hundreds of unverified resumes spammed directly to hiring managers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Zero initial screening, technical testing, or skill validation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Employers waste valuable engineering & management hours filtering out junk applications.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>High candidate interview no-show rates and salary expectation mismatches.</span>
                </li>
              </ul>
            </div>

            {/* Gozonixa Model */}
            <div className="bg-gradient-to-br from-blue-50/90 to-indigo-50/90 border border-blue-200 rounded-3xl p-8 space-y-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0053db] text-white flex items-center justify-center font-bold shadow-md shadow-blue-600/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#0f172a]">Gozonixa Recruitment Model</h3>
                  <p className="text-xs text-[#0053db] font-mono font-semibold">PRE-SCREENED & RELEVANT</p>
                </div>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Curated shortlist of 3–5 thoroughly pre-screened and evaluated candidates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Verification of technical competencies, communication skills, notice period, and budget fit.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Saves up to 80% of employer time by presenting interview-ready talent dossiers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Candidate readiness guidance ensures high interview attendance and alignment.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 8 Core Pillars */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="font-display text-xl font-bold text-center text-[#0f172a] mb-8">
              The 8 Pillars of Our Recruitment Methodology
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: 'Requirement Intake', desc: 'Understanding job specs', icon: Compass },
                { title: 'Talent Sourcing', desc: 'Multi-channel candidate reach', icon: Search },
                { title: 'Strict Screening', desc: 'Background & resume audit', icon: Filter },
                { title: 'Qualification Match', desc: 'Budget & availability fit', icon: CheckCircle2 },
                { title: 'Skill Evaluation', desc: 'Technical & soft skill test', icon: ShieldCheck },
                { title: 'Candidate Readiness', desc: 'Interview preparation guidance', icon: Sparkles },
                { title: 'Quality Shortlisting', desc: '3-5 vetted dossiers per role', icon: UserCheck },
                { title: 'Process Coordination', desc: 'End-to-end interview support', icon: HeartHandshake }
              ].map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div key={idx} className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/80 text-center space-y-2 hover:border-blue-400 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0053db] mx-auto flex items-center justify-center">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-xs text-[#0f172a]">{pillar.title}</div>
                    <div className="text-[11px] text-slate-500">{pillar.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* SECTION 4: FOR EMPLOYERS (#for-employers) */}
        <section id="for-employers" className="py-20 bg-slate-100/70 border-y border-slate-200/80 scroll-mt-24">
          <div className="max-w-container-max mx-auto px-4 sm:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0053db] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                <Building2 className="w-4 h-4" />
                <span>For Employers & Hiring Managers</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Eliminate Hiring Friction with Pre-Screened Talent
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Focus on choosing the right team member while Gozonixa handles the complex sourcing, screening, and evaluation pipeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Reduced Recruitment Effort', desc: 'Skip initial screening; receive pre-qualified, interview-ready candidate dossiers.', icon: Zap },
                { title: 'Access to Wider Talent Pool', desc: 'Tap into active job seekers and passive talent from our pre-screened candidate network.', icon: Users },
                { title: 'Rigorously Pre-Screened Talent', desc: 'Every candidate undergoes evaluation for technical expertise, communication skills, and experience.', icon: ShieldCheck },
                { title: 'Precision Skill-Job Alignment', desc: 'Perfect matching based on deep technical requirements, soft skills, and culture fit.', icon: Target },
                { title: 'Faster Candidate Identification', desc: 'Shorten your hiring cycle dramatically with rapid presentation of matched talent dossiers.', icon: Clock },
                { title: 'Personalized Account Support', desc: 'A dedicated recruitment specialist coordinates interviews, candidate feedback, and onboarding alignment.', icon: HeartHandshake },
                { title: 'Zero Wasted Hiring Time', desc: 'Say goodbye to reviewing unsuitable profiles, ghost candidates, and salary mismatch surprises.', icon: CheckCircle2 }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0053db] flex items-center justify-center border border-blue-100">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#0f172a]">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-white border border-blue-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div>
                <h3 className="font-display text-xl font-bold text-[#0f172a]">Have open hiring positions?</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">Share your requirement specifications with our recruitment specialists today.</p>
              </div>
              <Link 
                to="/register" 
                className="bg-[#0053db] hover:bg-[#0042b3] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap shadow-md shadow-blue-600/20"
              >
                <span>Submit Hiring Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>


        {/* SECTION 5: FOR CANDIDATES (#for-candidates) */}
        <section id="for-candidates" className="py-20 max-w-container-max mx-auto px-4 sm:px-8 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              <Users className="w-4 h-4" />
              <span>For Job Seekers & Professionals</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Empowering Your Career Journey with Zero Fees
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We partner with job seekers to analyze their true potential, evaluate skills, and connect them with trusted hiring partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Skill & Experience Analysis', desc: 'We take time to thoroughly understand your work background, technical skill sets, and career aspirations.', icon: Compass },
              { title: 'Targeted Role Matching', desc: 'Get introduced only to verified hiring partner opportunities that match your profile and growth goals.', icon: Target },
              { title: 'Professional Screening & Feedback', desc: 'Receive constructive feedback during screening to help highlight your key strengths.', icon: ShieldCheck },
              { title: 'Interview Preparation & Guidance', desc: 'Access guidance on client interview expectations, communication tips, and role-specific preparation.', icon: Sparkles },
              { title: 'Skill Readiness Support', desc: 'Get recommendations and readiness orientation before your client rounds to boost your interview success.', icon: GraduationCap },
              { title: 'Transparent Process Updates', desc: 'Stay updated at every step of your application lifecycle with complete transparency.', icon: Clock }
            ].map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200 hover:border-sky-400 rounded-2xl p-6 transition-all duration-300 space-y-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0f172a]">{card.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>

          {/* ZERO CANDIDATE FEE POLICY BOX */}
          <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-mono font-extrabold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-200" />
                  <span>STRICT FEE GUARANTEE</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Zero Candidate Fee Policy
                </h3>
                <p className="text-xs sm:text-sm text-emerald-50 max-w-2xl leading-relaxed">
                  <strong>Gozonixa NEVER charges candidates any fees</strong> for registration, profile creation, skill evaluation, interview preparation, or placement. Our recruitment services are entirely paid by client hiring companies.
                </p>
              </div>
              <Link 
                to="/register" 
                className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-sm shadow-lg transition-all whitespace-nowrap shrink-0"
              >
                Register Free Candidate Profile
              </Link>
            </div>
          </div>
        </section>


        {/* SECTION 6: OUR CANDIDATE SCREENING PROCESS (#screening-process) */}
        <section id="screening-process" className="py-20 bg-slate-100/70 border-y border-slate-200/80 scroll-mt-24">
          <div className="max-w-container-max mx-auto px-4 sm:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0053db] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                <Filter className="w-4 h-4" />
                <span>8-Point Screening Criteria Matrix</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Rigorous 8-Point Candidate Verification
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Every candidate presented to an employer undergoes thorough evaluation across eight essential screening parameters.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {screeningPoints.map((point) => {
                const IconComp = point.icon;
                return (
                  <div 
                    key={point.id} 
                    className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 space-y-4 group shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#0053db] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg">
                        #{point.id}
                      </span>
                      <IconComp className="w-5 h-5 text-slate-400 group-hover:text-[#0053db] transition-colors" />
                    </div>
                    <h3 className="font-display text-base font-bold text-[#0f172a] group-hover:text-[#0053db] transition-colors">
                      {point.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* SECTION 7: CANDIDATE TRAINING & READINESS (#readiness) */}
        <section id="readiness" className="py-20 max-w-container-max mx-auto px-4 sm:px-8 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Candidate Readiness Support</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Preparing Candidates for High-Impact Interviews
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We provide value-added guidance and orientation to help candidates present their authentic skills effectively during client interview rounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { title: 'Interview Guidance', desc: 'Scenario-based question walkthroughs, behavioral answer structuring, and mock interview tips.', icon: MessageSquare },
              { title: 'Communication Refinement', desc: 'Guidance on clear professional articulation, active listening, and technical response structure.', icon: PhoneCall },
              { title: 'Role & Company Context', desc: 'Deep insights into the client company culture, team structure, product goals, and role expectations.', icon: Building2 },
              { title: 'Skill & Profile Orientation', desc: 'Tailoring project presentation highlights to align with client technology stacks and domain requirements.', icon: FileCheck }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#0f172a]">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-sm">
            <HelpCircle className="w-5 h-5 text-[#0053db] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-[#0f172a]">Readiness Support Disclaimer:</strong> Candidate training, interview prep, and orientation are provided purely as value-added preparation support to improve candidate confidence and client readiness. Final hiring selection decisions remain solely at the discretion of the employer.
            </div>
          </div>
        </section>


        {/* SECTION 8: HOW WE CONNECT TALENT WITH BUSINESSES (#talent-flow) */}
        <section id="talent-flow" className="py-20 bg-slate-100/70 border-y border-slate-200/80 scroll-mt-24">
          <div className="max-w-container-max mx-auto px-4 sm:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0053db] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                <RefreshCw className="w-4 h-4" />
                <span>Two-Sided Workflow Sequence</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                How We Connect Talent With Businesses
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Synchronizing employer requirements and candidate aspirations through a balanced, transparent recruitment workflow.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { step: '01', emp: 'Employer Shares Role Requirements & Specs', cand: 'Candidate Registers Profile & Work History', match: 'Initial Criteria Alignment' },
                { step: '02', emp: 'Role & Skill Definition Established', cand: 'Candidate Background & Resume Screened', match: 'Foundational Filter' },
                { step: '03', emp: 'Targeted Sourcing & Pool Matching', cand: 'Candidate Screening & Technical Evaluation', match: 'Skill Verification' },
                { step: '04', emp: 'Interview-Ready Dossiers Delivered', cand: 'Interview Preparation & Guidance Provided', match: 'Pre-Match Dossier' },
                { step: '05', emp: 'Employer Conducts Final Interview Rounds', cand: 'Candidate Attends Employer Interviews', match: 'Employer Selection' },
                { step: '06', emp: 'Offer Extended & Selection Confirmed', cand: 'Candidate Accepts Offer & Prepares to Join', match: 'Successful Placement' }
              ].map((row, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 grid grid-cols-1 md:grid-cols-12 gap-4 items-center shadow-sm">
                  <div className="md:col-span-2 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#0053db] text-white font-bold font-mono text-xs flex items-center justify-center">
                      {row.step}
                    </span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0053db]">{row.match}</span>
                  </div>

                  <div className="md:col-span-5 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <div className="text-[10px] font-mono font-bold uppercase text-indigo-700 mb-0.5">EMPLOYER WORKFLOW</div>
                    <div className="text-xs font-semibold text-[#0f172a]">{row.emp}</div>
                  </div>

                  <div className="md:col-span-5 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <div className="text-[10px] font-mono font-bold uppercase text-emerald-700 mb-0.5">CANDIDATE WORKFLOW</div>
                    <div className="text-xs font-semibold text-[#0f172a]">{row.cand}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* SECTION 9: OUR SERVICE MODEL (#service-model) */}
        <section id="service-model" className="py-20 max-w-container-max mx-auto px-4 sm:px-8 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              <DollarSign className="w-4 h-4" />
              <span>Commercial & Service Model</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Transparent, Commercial Recruitment Model
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Professional recruitment services provided to employers on agreed business terms, charged per qualified candidate or successful placement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 space-y-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0053db] flex items-center justify-center border border-blue-100">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0f172a]">Employer Commercial Terms</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Recruitment and talent evaluation services are provided directly to client businesses. Commercial fees are billed according to signed business terms—charged <strong>per qualified candidate presented</strong> or per successful hiring placement as agreed.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero upfront registration fees for employers.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Transparent pricing based on pre-agreed candidate criteria.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Replacement guarantee period for placed candidates.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/50 border border-emerald-200 p-8 space-y-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-emerald-950">Candidate Zero-Fee Policy</h3>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                We uphold strict ethical recruitment standards. <strong>Candidates are never charged any fees</strong> at any point in the recruitment lifecycle.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-emerald-950">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Free profile registration and resume evaluation.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Free interview guidance, readiness support, and client feedback.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>100% employer-sponsored commercial model.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>


        {/* SECTION 10: MISSION & SECTION 11: VISION (#mission, #vision) */}
        <section id="mission" className="py-20 bg-slate-100/70 border-y border-slate-200/80 scroll-mt-24">
          <div className="max-w-container-max mx-auto px-4 sm:px-8 space-y-16">
            
            {/* Mission */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0053db] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
                  Connecting Talent with Meaningful Opportunities
                </h2>
                <blockquote className="p-6 rounded-2xl bg-white border-l-4 border-[#0053db] text-sm sm:text-base font-medium text-slate-800 italic shadow-sm">
                  "Connecting businesses with suitable talent while helping candidates discover meaningful career opportunities."
                </blockquote>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { title: 'Quality', desc: 'Vetted, accurate matches', icon: Award },
                  { title: 'Relevance', desc: 'Aligning exact skill sets', icon: Target },
                  { title: 'Trust', desc: 'Honest & ethical process', icon: ShieldCheck },
                  { title: 'Efficiency', desc: 'Streamlined hiring timeline', icon: Zap },
                  { title: 'Candidate Support', desc: 'Free preparation & guidance', icon: HeartHandshake },
                  { title: 'Employer Satisfaction', desc: 'Long-term hiring success', icon: ThumbsUp }
                ].map((m, idx) => {
                  const IconComp = m.icon;
                  return (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-sm">
                      <IconComp className="w-5 h-5 text-[#0053db]" />
                      <div className="font-bold text-sm text-[#0f172a]">{m.title}</div>
                      <div className="text-xs text-slate-500">{m.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Vision */}
            <div id="vision" className="rounded-3xl bg-gradient-to-r from-[#0f172a] via-slate-900 to-[#0f172a] text-white border border-slate-800 p-8 sm:p-12 shadow-xl space-y-6 scroll-mt-24">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider">
                <Rocket className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Shaping the Future of Precision Recruitment
              </h3>
              <blockquote className="text-lg sm:text-xl font-medium text-blue-200 italic border-l-4 border-blue-400 pl-4">
                "Becoming a trusted recruitment partner that makes hiring simpler, more efficient, and focused on the right talent."
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                We envision a recruitment ecosystem where hiring managers never have to sift through irrelevant resumes, and qualified professionals receive honest, constructive evaluation to reach their next career milestone.
              </p>
            </div>

          </div>
        </section>


        {/* SECTION 12: OUR VALUES (#values) */}
        <section id="values" className="py-20 max-w-container-max mx-auto px-4 sm:px-8 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0053db] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              <Star className="w-4 h-4" />
              <span>Our Core Values</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              The Principles That Drive Every Interaction
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Our 6 core values define how we treat candidates, support employers, and execute every recruitment assignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-6 transition-all duration-300 space-y-4 group shadow-sm"
                >
                  <div className={`w-12 h-12 rounded-2xl ${val.accent} border flex items-center justify-center shadow-sm`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0f172a] group-hover:text-[#0053db] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>


        {/* SECTION 13: WHY CHOOSE US (#why-choose-us) */}
        <section id="why-choose-us" className="py-20 bg-slate-100/70 border-y border-slate-200/80 scroll-mt-24">
          <div className="max-w-container-max mx-auto px-4 sm:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0053db] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Why Choose Gozonixa</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Differentiators That Set Us Apart
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                We combine deep domain understanding, strict screening, and candidate readiness to deliver unmatched hiring precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Requirement-Focused Recruitment', desc: 'We analyze your technical specs, culture, and team structure before sourcing.', icon: Compass },
                { title: 'Strict Candidate Screening', desc: 'Multi-stage evaluation verifying skills, background experience, notice period, and budget alignment.', icon: ShieldCheck },
                { title: 'Pre-Qualified Dossiers', desc: 'Receive structured, easy-to-read candidate reports highlighting key qualifications.', icon: UserCheck },
                { title: 'Personalized Partnering', desc: 'A dedicated account specialist manages your hiring pipeline from intake to onboarding.', icon: HeartHandshake },
                { title: 'Talent Relevance Over Volume', desc: 'We present 3–5 highly qualified candidates per role instead of sending unverified resumes.', icon: Target }
              ].map((diff, idx) => {
                const IconComp = diff.icon;
                return (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:border-blue-400 transition-colors shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0053db] flex items-center justify-center border border-blue-100">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#0f172a]">{diff.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{diff.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* SECTION 14: OUR RECRUITMENT JOURNEY (#our-journey) */}
        <section id="our-journey" className="py-20 max-w-container-max mx-auto px-4 sm:px-8 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0053db] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              <Compass className="w-4 h-4" />
              <span>Our Recruitment Journey</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Built on the Vision of Better Hiring
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Our evolution from identifying recruitment friction to establishing a structured, candidate-focused hiring model.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4 shadow-sm">
              <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">Phase 01</span>
              <h3 className="font-display text-xl font-bold text-[#0f172a]">The Problem We Saw</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Traditional recruitment relied heavily on resume volume dumping. Hiring managers spent hundreds of hours sifting through irrelevant resumes, while qualified candidates lacked feedback and guidance.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4 shadow-sm">
              <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#0053db] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">Phase 02</span>
              <h3 className="font-display text-xl font-bold text-[#0f172a]">Our Solution Framework</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Gozonixa was founded to create a candidate-focused, requirement-driven recruitment model centered on 8-point screening criteria and candidate readiness guidance.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4 shadow-sm">
              <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">Phase 03</span>
              <h3 className="font-display text-xl font-bold text-[#0f172a]">Where We Are Today</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Partnering with growing enterprises and mid-market leaders to deliver pre-qualified talent, while upholding our zero-fee promise to job seekers across all sectors.
              </p>
            </div>
          </div>
        </section>


        {/* SECTION 15: INDUSTRIES / ROLES WE SERVE (#industries) */}
        <section id="industries" className="py-20 bg-slate-100/70 border-y border-slate-200/80 scroll-mt-24">
          <div className="max-w-container-max mx-auto px-4 sm:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0053db] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                <Briefcase className="w-4 h-4" />
                <span>Domain Expertise</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Industries & Professional Roles We Serve
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Specialized recruitment solutions tailored across technology, operations, finance, sales, and custom enterprise roles.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex justify-center mb-10 overflow-x-auto pb-2">
              <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex-wrap justify-center gap-1">
                {['all', 'tech', 'ops', 'finance', 'sales'].map((tabKey) => (
                  <button
                    key={tabKey}
                    onClick={() => setActiveIndustryTab(tabKey)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all capitalize ${
                      activeIndustryTab === tabKey ? 'bg-[#0053db] text-white shadow-sm font-mono' : 'text-slate-600 hover:text-[#0f172a]'
                    }`}
                  >
                    {tabKey === 'all' ? 'All Sectors' : tabKey}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIndustries.map((ind, idx) => {
                const IconComp = ind.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 transition-all space-y-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0053db] flex items-center justify-center border border-blue-100">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-base font-bold text-[#0f172a]">{ind.title}</h3>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {ind.roles.map((r, rIdx) => (
                        <li key={rIdx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0053db] shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* SECTION 16: OUR COMMITMENT (#commitment) */}
        <section id="commitment" className="py-20 max-w-container-max mx-auto px-4 sm:px-8 scroll-mt-24">
          <div className="rounded-3xl bg-gradient-to-tr from-[#0053db] via-blue-700 to-indigo-800 text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-blue-200" />
              <span>OUR SOLEMN COMMITMENT</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white max-w-3xl mx-auto">
              The Alignment Triad: Employers + Candidates + Roles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-2">
                <Building2 className="w-6 h-6 text-blue-200" />
                <div className="font-bold text-base text-white">Employer Requirements</div>
                <p className="text-xs text-blue-100">Deep technical criteria, cultural goals, and budget constraints.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-2">
                <Users className="w-6 h-6 text-emerald-200" />
                <div className="font-bold text-base text-white">Candidate Skills</div>
                <p className="text-xs text-blue-100">Verified domain expertise, communication, and career aspirations.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-2">
                <Briefcase className="w-6 h-6 text-amber-200" />
                <div className="font-bold text-base text-white">Role Expectations</div>
                <p className="text-xs text-blue-100">Clear deliverables, growth trajectory, and transparent terms.</p>
              </div>
            </div>

            <p className="text-xs sm:text-base text-blue-100 max-w-3xl mx-auto leading-relaxed pt-2">
              "We are committed to maintaining strict alignment across employer requirements, candidate capabilities, and real role expectations. By fostering complete transparency and mutual trust, we build lasting recruitment partnerships that drive long-term business success."
            </p>
          </div>
        </section>


        {/* SECTION 17: FINAL CTA CONTENT (#cta) */}
        <section id="cta" className="py-20 bg-slate-100/70 border-t border-slate-200/80 scroll-mt-24">
          <div className="max-w-container-max mx-auto px-4 sm:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0053db] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                <Rocket className="w-4 h-4" />
                <span>Get Started Today</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Ready to Transform Your Hiring or Discover Your Next Career Move?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Connect with Gozonixa today—whether you are an employer looking for pre-screened talent or a candidate seeking career growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-400 transition-all space-y-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0053db] flex items-center justify-center border border-blue-100">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0f172a]">For Employers</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Share your hiring requirements with our recruitment specialists. Receive pre-screened, evaluated candidate dossiers aligned with your specifications.
                  </p>
                </div>
                <Link 
                  to="/register" 
                  className="w-full bg-[#0053db] hover:bg-[#0042b3] text-white py-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 transition-all"
                >
                  <span>Submit Hiring Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-emerald-400 transition-all space-y-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0f172a]">For Candidates</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Register your candidate profile for free. Get evaluated by recruitment experts, receive interview preparation, and access verified hiring partners.
                  </p>
                </div>
                <Link 
                  to="/register" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all"
                >
                  <span>Register Candidate Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
};
