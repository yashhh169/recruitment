import React from 'react';
import {
  Brain, Briefcase, GraduationCap, MessageSquare, Calendar,
  ShieldCheck, Clock, Target, Sliders, Shield, ArrowRight
} from 'lucide-react';

export const ContingentStaffingPage = () => {
  return (
    <main className="pt-20 font-sans text-[#191c1e] bg-[#f7f9fb] min-h-screen selection:bg-[#3755c3] selection:text-white">

      {/* 🔴 SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-[#0d1c32]/[0.03] to-[#3755c3]/[0.08] pt-20 pb-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-6 max-w-3xl">
            <span className="inline-block text-[#3755c3] font-bold text-xs sm:text-sm uppercase tracking-widest">
              RECRUITMENT SERVICES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Contingent Staffing
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 leading-snug">
              Focused recruitment support for active hiring requirements.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Contingent staffing helps businesses access relevant talent when they need to fill active roles. Our structured sourcing and screening process is designed to deliver focused shortlists of capable candidates, tailored specifically to your organizational requirements.
            </p>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white flex items-center justify-center p-6 sm:p-10">
            <img
              src="/assets/contingent_workflow.png"
              alt="Recruitment Journey Workflow"
              className="w-full h-auto object-contain max-h-[420px]"
            />
          </div>

        </div>
      </section>

      {/* 🔴 SECTION 2: INTRODUCTION */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                A more structured approach to hiring.
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                A large volume of applications does not always create a strong hiring pipeline. Wading through unsuitable profiles consumes valuable time and diverts attention away from your core business objectives. We prioritize precision over volume, ensuring that every candidate presented aligns closely with the role's specific demands.
              </p>

              <div className="bg-slate-50 border-l-4 border-[#3755c3] p-8 rounded-r-xl shadow-sm">
                <p className="text-xl sm:text-2xl font-semibold text-slate-900 italic leading-snug">
                  "The objective is not to deliver more profiles. It is to present more relevant, qualified candidates."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔴 SECTION 3: WHAT IS CONTINGENT STAFFING? */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 bg-[#f7f9fb]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            What is contingent staffing?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Contingent staffing is a flexible recruitment service designed to support businesses with immediate, active hiring needs. Unlike retained search which is typically used for executive-level roles, contingent staffing operates on a success-fee model. This means you only incur a fee when you successfully hire a candidate we introduce.
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            This model provides businesses with a risk-free avenue to tap into broader talent networks, leveraging our dedicated sourcing capabilities and rigorous screening processes to accelerate the hiring timeline for critical roles.
          </p>
        </div>
      </section>

      {/* 🔴 SECTION 4: TIMELINE */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              From hiring requirement to qualified shortlist
            </h2>
          </div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-slate-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">

              <div className="flex flex-row md:flex-col items-center md:text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3755c3] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">1</div>
                <p className="font-semibold text-slate-900 text-sm sm:text-base">Understand requirement</p>
              </div>

              <div className="flex flex-row md:flex-col items-center md:text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3755c3] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">2</div>
                <p className="font-semibold text-slate-900 text-sm sm:text-base">Define profile</p>
              </div>

              <div className="flex flex-row md:flex-col items-center md:text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3755c3] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">3</div>
                <p className="font-semibold text-slate-900 text-sm sm:text-base">Source talent</p>
              </div>

              <div className="flex flex-row md:flex-col items-center md:text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3755c3] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">4</div>
                <p className="font-semibold text-slate-900 text-sm sm:text-base">Screen and review</p>
              </div>

              <div className="flex flex-row md:flex-col items-center md:text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3755c3] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md">5</div>
                <p className="font-semibold text-slate-900 text-sm sm:text-base">Assess and qualify</p>
              </div>

              <div className="flex flex-row md:flex-col items-center md:text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0d1c32] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-lg ring-4 ring-slate-100">6</div>
                <p className="font-bold text-slate-900 text-sm sm:text-base">Present shortlist</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 🔴 SECTION 5: EVALUATION CARDS */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 bg-slate-100/70">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              What we consider before presenting a candidate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white p-8 border border-slate-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-8 h-8 text-[#3755c3] mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Skills</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Core competencies and technical capabilities required to execute the responsibilities of the role.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Briefcase className="w-8 h-8 text-[#3755c3] mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Experience</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Relevance of past roles, industries, and project scopes compared to your current hiring needs.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <GraduationCap className="w-8 h-8 text-[#3755c3] mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Qualifications</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Academic background, certifications, and specialized training pertinent to the position.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <MessageSquare className="w-8 h-8 text-[#3755c3] mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Communication</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Clarity, professionalism, and the ability to articulate complex ideas effectively within a team.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Calendar className="w-8 h-8 text-[#3755c3] mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Availability</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Notice periods, readiness to start, and alignment with your expected hiring and onboarding timelines.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[#3755c3] mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Overall Suitability</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A holistic assessment combining professional background with cultural alignment and motivation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🔴 SECTION 6: INFO CARDS */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Designed for active and evolving hiring needs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="p-8 bg-[#f7f9fb] border border-slate-200/70 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Urgent requirements</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                When a critical team member departs unexpectedly or a project demands immediate resourcing, our established networks allow for swift mobilization and candidate presentation.
              </p>
            </div>

            <div className="p-8 bg-[#f7f9fb] border border-slate-200/70 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Team growth</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Scaling operations requires a steady influx of capable professionals. We provide continuous sourcing support to help you build out departments systematically.
              </p>
            </div>

            <div className="p-8 bg-[#f7f9fb] border border-slate-200/70 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Role-specific needs</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                For specialized positions where active job seekers are scarce, we conduct targeted outreach to engage passive talent possessing the precise skillsets required.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🔴 SECTION 7: DARK NAVY SECTION */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 bg-[#0d1c32] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white leading-tight">
                What businesses gain from contingent staffing
              </h2>

              <div className="space-y-8">

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-[#b8c4ff] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Time efficiency</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      We absorb the time-intensive tasks of sourcing and initial screening.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Target className="w-6 h-6 text-[#b8c4ff] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Targeted reach</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Access to broader, active talent pools beyond your immediate network.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Sliders className="w-6 h-6 text-[#b8c4ff] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Flexibility</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Engage services exactly when hiring volumes spike without long-term commitments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-[#b8c4ff] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Risk mitigation</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      A success-based fee structure aligns our goals directly with your hiring success.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="flex items-center lg:justify-end">
              <div className="bg-black p-10 sm:p-12 rounded-2xl border border-white/15 max-w-md shadow-2xl">
                <p className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  A disciplined process for connecting businesses with relevant, qualified talent.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔴 SECTION 8: FINAL EDITORIAL PANEL */}
      <section className="py-28 px-4 sm:px-8 lg:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Talent support built around role relevance.
          </h2>

          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-[#f2f4f6] px-6 sm:px-8 py-4 rounded-full border border-slate-200">
            <span className="font-semibold text-slate-900 text-xs sm:text-sm">Requirement</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
            <span className="font-semibold text-slate-900 text-xs sm:text-sm">Screening</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
            <span className="font-semibold text-slate-900 text-xs sm:text-sm">Qualification</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
            <span className="font-semibold text-slate-900 text-xs sm:text-sm">Shortlist</span>
          </div>
        </div>
      </section>

    </main>
  );
};
