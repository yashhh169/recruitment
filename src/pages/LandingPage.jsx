import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (stepId) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-on-background mb-6">
              Find the Right Job. <span className="text-primary block mt-2">Build Your Career.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
              Register once and get matched with opportunities from our trusted hiring partners across multiple industries. Premium guidance for premium talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="font-label-md bg-primary text-white px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                Register Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <button className="font-label-md border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary/5 transition-all duration-300">
                Browse Jobs
              </button>
            </div>
          </div>

          <div className="relative h-[500px] w-full hidden md:block">
            {/* Abstract Image Placeholder */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden soft-shadow bg-surface-container-low">
              <img 
                className="w-full h-full object-cover" 
                alt="A modern office environment with professionals" 
                src="./assets/hero.jpg" 
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute top-10 -left-10 glass-card rounded-2xl p-4 flex items-center gap-4 float">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">work</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-background">500+</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">Open Positions</div>
              </div>
            </div>

            <div className="absolute bottom-20 -left-6 glass-card rounded-2xl p-4 flex items-center gap-4 float-delay">
              <div className="w-12 h-12 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
                <span className="material-symbols-outlined">apartment</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-background">150+</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">Partner Companies</div>
              </div>
            </div>

            <div className="absolute top-40 -right-8 glass-card rounded-2xl p-4 flex items-center gap-4 float-delay">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">group</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-background">10k+</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">Candidates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-surface-container-lowest border-y border-outline-variant/20 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 text-center">
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Trusted by Growing Companies</p>
        </div>
        <div className="relative w-full overflow-hidden flex">
          <div className="flex whitespace-nowrap gap-16 logo-scroll opacity-60">
            <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">ACME Corp</h3>
            <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">TechFlow</h3>
            <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">GlobalBank</h3>
            <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">Stark Ind.</h3>
            <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">Nexus Health</h3>
            <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">ACME Corp</h3>
            <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">TechFlow</h3>
            <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">GlobalBank</h3>
            <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">Stark Ind.</h3>
            <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">Nexus Health</h3>
          </div>
        </div>
      </section>

      {/* How Gozonixa Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-surface-container-low/50 relative overflow-hidden scroll-mt-24">
        {/* Ambient background decorative glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-primary/5 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md text-label-sm font-semibold tracking-wider uppercase mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">sync_alt</span>
              <span>HOW GOZONIXA WORKS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-background tracking-tight mb-4">
              From Application to <span className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">Opportunity</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              From your first application to the right opportunity, Gozonixa connects talented professionals with trusted hiring partners through a simple, human-led process.
            </p>
          </div>

          {/* Perspective Switcher Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-inner flex-wrap justify-center gap-1" role="tablist">
              <button 
                id="tab-all"
                onClick={() => setActiveTab('all')}
                className={`how-tab px-5 py-2.5 rounded-xl font-label-md text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'all' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-background'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">hub</span>
                  <span>Complete Ecosystem</span>
                </span>
              </button>
              <button 
                id="tab-candidate"
                onClick={() => setActiveTab('candidate')}
                className={`how-tab px-5 py-2.5 rounded-xl font-label-md text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'candidate' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-background'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                  <span>Candidate Pathway</span>
                </span>
              </button>
              <button 
                id="tab-company"
                onClick={() => setActiveTab('company')}
                className={`how-tab px-5 py-2.5 rounded-xl font-label-md text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'company' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-background'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">domain</span>
                  <span>Company Pathway</span>
                </span>
              </button>
            </div>
          </div>

          {/* Interactive Convergence Visual Diagram */}
          <div id="journey-view" className="relative mb-16">
            
            {/* Desktop / Tablet Dual-Lane Convergence Map */}
            <div className="hidden lg:grid grid-cols-12 gap-6 items-start relative">
              
              {/* LEFT LANE: Candidate Flow (Cols 1-5) */}
              <div 
                id="candidate-lane" 
                className="col-span-5 space-y-4 transition-all duration-500"
                style={{ opacity: activeTab === 'company' ? 0.35 : 1 }}
              >
                <div className="flex items-center gap-3 mb-2 pb-2 border-b border-primary/20">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">person</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-base font-bold text-on-background">Candidate Journey</h3>
                    <p className="text-xs text-on-surface-variant">For job seekers & professionals</p>
                  </div>
                </div>

                {/* Step C1 */}
                <div 
                  className={`flow-card p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow cursor-pointer group ${activeStep === 'c1' ? 'active-flow' : ''}`}
                  onClick={() => handleStepClick('c1')}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">01</div>
                    <div>
                      <h4 className="font-headline-sm text-sm font-bold text-on-background mb-1 flex items-center gap-1.5">
                        <span>Create Profile & Resume</span>
                        <span className="material-symbols-outlined text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">badge</span>
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Provide skills, work experience, education, preferred role, location, and upload your CV/Resume.</p>
                    </div>
                  </div>
                </div>

                {/* Step C2 */}
                <div 
                  className={`flow-card p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow cursor-pointer group ${activeStep === 'c2' ? 'active-flow' : ''}`}
                  onClick={() => handleStepClick('c2')}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">02</div>
                    <div>
                      <h4 className="font-headline-sm text-sm font-bold text-on-background mb-1 flex items-center gap-1.5">
                        <span>Apply for Relevant Jobs</span>
                        <span className="material-symbols-outlined text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">send</span>
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Explore verified opportunities matching your background and submit targeted applications in one click.</p>
                    </div>
                  </div>
                </div>

                {/* Step C3 */}
                <div 
                  className={`flow-card p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow cursor-pointer group ${activeStep === 'c3' ? 'active-flow' : ''}`}
                  onClick={() => handleStepClick('c3')}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">03</div>
                    <div>
                      <h4 className="font-headline-sm text-sm font-bold text-on-background mb-1 flex items-center gap-1.5">
                        <span>Gozonixa Screening</span>
                        <span className="material-symbols-outlined text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">record_voice_over</span>
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Our recruitment specialists review your credentials and conduct an initial screening interview.</p>
                    </div>
                  </div>
                </div>

                {/* Step C4 */}
                <div 
                  className={`flow-card p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow cursor-pointer group ${activeStep === 'c4' ? 'active-flow' : ''}`}
                  onClick={() => handleStepClick('c4')}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">04</div>
                    <div>
                      <h4 className="font-headline-sm text-sm font-bold text-on-background mb-1 flex items-center gap-1.5">
                        <span>Profile Shortlisted</span>
                        <span className="material-symbols-outlined text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">verified</span>
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Qualified talent is shortlisted and prepared for introduction to hiring partner requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CENTER LANE: Gozonixa Intelligent Matching Engine (Cols 6-7) */}
              <div id="matching-lane" className="col-span-2 flex flex-col items-center justify-center pt-8 space-y-6">
                <div className="flex items-center justify-between w-full text-primary/40 px-2">
                  <span className="material-symbols-outlined text-2xl animate-pulse">south_east</span>
                  <span className="material-symbols-outlined text-2xl animate-pulse">south_west</span>
                </div>

                <div className="orbit-pulse-node relative w-full p-5 rounded-3xl bg-gradient-to-b from-primary via-blue-700 to-indigo-800 text-white shadow-xl shadow-primary/30 text-center flex flex-col items-center overflow-hidden border border-white/20">
                  <div className="absolute -inset-4 border border-white/20 rounded-full spin-slow pointer-events-none opacity-40"></div>
                  
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 shadow-inner">
                    <span className="material-symbols-outlined text-2xl text-white">all_inclusive</span>
                  </div>
                  <div className="font-display text-sm font-black tracking-tight leading-tight mb-1">
                    Gozonixa
                  </div>
                  <div className="text-[11px] font-semibold text-blue-200 uppercase tracking-wider mb-2">
                    Matching Hub
                  </div>
                  <p className="text-[11px] text-blue-100/90 leading-tight">
                    Human-Led & AI-Powered Precision Alignment
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1 text-primary">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-primary to-indigo-600 rounded-full"></div>
                  <span className="material-symbols-outlined text-2xl animate-bounce">arrow_downward</span>
                </div>
              </div>

              {/* RIGHT LANE: Company Flow (Cols 8-12) */}
              <div 
                id="company-lane" 
                className="col-span-5 space-y-4 transition-all duration-500"
                style={{ opacity: activeTab === 'candidate' ? 0.35 : 1 }}
              >
                <div className="flex items-center gap-3 mb-2 pb-2 border-b border-indigo-500/20">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">domain</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-base font-bold text-on-background">Company Journey</h3>
                    <p className="text-xs text-on-surface-variant">For hiring partners & employers</p>
                  </div>
                </div>

                {/* Step E1 */}
                <div 
                  className={`flow-card p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow cursor-pointer group ${activeStep === 'e1' ? 'active-flow' : ''}`}
                  onClick={() => handleStepClick('e1')}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">01</div>
                    <div>
                      <h4 className="font-headline-sm text-sm font-bold text-on-background mb-1 flex items-center gap-1.5">
                        <span>Partner & Share Specs</span>
                        <span className="material-symbols-outlined text-xs text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">handshake</span>
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Companies connect with Gozonixa and outline required roles, skills, experience, and timeline.</p>
                    </div>
                  </div>
                </div>

                {/* Step E2 */}
                <div 
                  className={`flow-card p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow cursor-pointer group ${activeStep === 'e2' ? 'active-flow' : ''}`}
                  onClick={() => handleStepClick('e2')}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">02</div>
                    <div>
                      <h4 className="font-headline-sm text-sm font-bold text-on-background mb-1 flex items-center gap-1.5">
                        <span>Candidate Pool Sourcing</span>
                        <span className="material-symbols-outlined text-xs text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">manage_search</span>
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Gozonixa filters and targets relevant candidates from our pre-vetted professional talent pool.</p>
                    </div>
                  </div>
                </div>

                {/* Step E3 */}
                <div 
                  className={`flow-card p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow cursor-pointer group ${activeStep === 'e3' ? 'active-flow' : ''}`}
                  onClick={() => handleStepClick('e3')}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">03</div>
                    <div>
                      <h4 className="font-headline-sm text-sm font-bold text-on-background mb-1 flex items-center gap-1.5">
                        <span>Rigorous Skill Vetting</span>
                        <span className="material-symbols-outlined text-xs text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">psychology</span>
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Our domain evaluators conduct thorough technical and behavioral screenings against role requirements.</p>
                    </div>
                  </div>
                </div>

                {/* Step E4 */}
                <div 
                  className={`flow-card p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow cursor-pointer group ${activeStep === 'e4' ? 'active-flow' : ''}`}
                  onClick={() => handleStepClick('e4')}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-extrabold text-xs shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">04</div>
                    <div>
                      <h4 className="font-headline-sm text-sm font-bold text-on-background mb-1 flex items-center gap-1.5">
                        <span>Candidate Assignment</span>
                        <span className="material-symbols-outlined text-xs text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">assignment_ind</span>
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Gozonixa presents vetted, high-match candidate dossiers directly to the company hiring team.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Converged Shared Final Milestones (Company Interview & Placement) */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Final Step 05 */}
              <div className="flow-card p-5 rounded-2xl bg-white border-2 border-primary/30 soft-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none"></div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-display font-bold text-base shadow-md shadow-primary/30 shrink-0">05</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Collaborative Phase</div>
                    <h4 className="font-headline-sm text-base font-bold text-on-background mb-1.5 flex items-center gap-2">
                      <span>Company Interview</span>
                      <span className="material-symbols-outlined text-primary text-sm">groups</span>
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">The hiring partner conducts targeted final-round interviews directly with the shortlisted candidates.</p>
                  </div>
                </div>
              </div>

              {/* Final Step 06 */}
              <div className="flow-card p-5 rounded-2xl bg-gradient-to-br from-white to-surface-container-low border-2 border-indigo-500/30 soft-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-bl-full pointer-events-none"></div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-indigo-600 text-white flex items-center justify-center font-display font-bold text-base shadow-md shadow-indigo-500/30 shrink-0">06</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">Successful Outcome</div>
                    <h4 className="font-headline-sm text-base font-bold text-on-background mb-1.5 flex items-center gap-2">
                      <span>Hiring & Placement</span>
                      <span className="material-symbols-outlined text-indigo-600 text-sm">celebration</span>
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">Candidate accepts the offer and seamlessly transitions into their new role with ongoing partner support.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile-Optimized Sequential Timeline (Visible only on < lg screens) */}
            <div className="block lg:hidden space-y-6 max-w-xl mx-auto mt-6">
              {activeTab !== 'company' && (
                <div id="mobile-candidate-steps" className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 px-1">
                    <span className="material-symbols-outlined text-sm">person</span> Candidate Steps
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow flex gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h5 className="font-bold text-sm text-on-background">Create Profile & Resume</h5>
                      <p className="text-xs text-on-surface-variant mt-0.5">Submit your verified skills, experience, and CV.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow flex gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h5 className="font-bold text-sm text-on-background">Apply for Opportunities</h5>
                      <p className="text-xs text-on-surface-variant mt-0.5">One-click applications to relevant verified job roles.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow flex gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h5 className="font-bold text-sm text-on-background">Gozonixa Screening</h5>
                      <p className="text-xs text-on-surface-variant mt-0.5">Initial interview and evaluation by our specialists.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow flex gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">4</div>
                    <div>
                      <h5 className="font-bold text-sm text-on-background">Shortlisted for Matching</h5>
                      <p className="text-xs text-on-surface-variant mt-0.5">Validated profile ready for partner company assignment.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Central Hub Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-primary to-indigo-700 text-white text-center shadow-lg my-4">
                <div className="flex items-center justify-center gap-2 font-display font-bold text-sm">
                  <span className="material-symbols-outlined text-lg">hub</span>
                  <span>Gozonixa Intelligent Matching Engine</span>
                </div>
                <p className="text-xs text-blue-100 mt-1">Connecting pre-screened talent with exact hiring specifications</p>
              </div>

              {activeTab !== 'candidate' && (
                <div id="mobile-company-steps" className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-2 px-1">
                    <span className="material-symbols-outlined text-sm">domain</span> Company Steps
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow flex gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">1</div>
                    <div>
                      <h5 className="font-bold text-sm text-on-background">Partner & Share Criteria</h5>
                      <p className="text-xs text-on-surface-variant mt-0.5">Define role requirements, budget, and desired skills.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow flex gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">2</div>
                    <div>
                      <h5 className="font-bold text-sm text-on-background">Candidate Pool Matching</h5>
                      <p className="text-xs text-on-surface-variant mt-0.5">Automated and recruiter-curated candidate searches.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-outline-variant/30 soft-shadow flex gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">3</div>
                    <div>
                      <h5 className="font-bold text-sm text-on-background">Candidate Assignment</h5>
                      <p className="text-xs text-on-surface-variant mt-0.5">Receive interview-ready shortlisted candidates.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Final Call to Action Box */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-primary/10 via-surface-container-low to-indigo-500/10 border border-primary/20 p-8 sm:p-12 text-center soft-shadow relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-on-background mb-3">
                Ready to take the next step?
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-xl mx-auto mb-8">
                Join thousands of ambitious professionals and top-tier companies finding their perfect match with Gozonixa.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/register" className="w-full sm:w-auto font-label-md text-label-md bg-primary text-white px-8 py-3.5 rounded-xl hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Register Now</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <button className="w-full sm:w-auto font-label-md text-label-md border-2 border-primary text-primary px-8 py-3.5 rounded-xl hover:bg-primary/5 transition-all duration-300">
                  <span>Browse Jobs</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};
