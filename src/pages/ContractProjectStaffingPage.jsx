import React from 'react';

export const ContractProjectStaffingPage = () => {
  return (
    <main className="pt-20 font-sans text-slate-800 bg-[#f8fafc] min-h-screen selection:bg-[#253e91] selection:text-white">
      
      {/* 🔴 EDITORIAL HERO */}
      <section className="bg-gradient-to-br from-[#253e91]/[0.05] via-slate-50 to-[#fba91e]/[0.08] pt-20 pb-24 px-4 sm:px-8 lg:px-12 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6 max-w-3xl">
            <span className="inline-block text-[#253e91] font-extrabold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              RECRUITMENT SERVICES
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Contract &amp; Project <span className="text-[#253e91]">Staffing</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-700 leading-snug">
              Flexible talent support for time-bound work and evolving business needs.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Our structured process ensures that specialized talent is identified and mobilized efficiently, matching project requirements with precise professional capabilities.
            </p>

            <div className="border-l-4 border-[#253e91] bg-white p-5 rounded-r-xl shadow-sm border border-slate-200/60">
              <p className="text-slate-900 italic font-semibold text-base sm:text-lg leading-snug">
                "Flexible workforce support, built around role relevance and project needs."
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[450px] bg-white flex items-center justify-center p-2">
            <img 
              src="/assets/contract_staffing_hero.jpg" 
              alt="Contract & Project Staffing Visual" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* 🔴 INTRODUCTION SECTION */}
      <section className="py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                Workforce flexibility without compromising relevance.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Organizations require agility to address new projects, navigate seasonal peaks, or access specialized skills for a defined period. Contract staffing provides this essential flexibility.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Our methodology is designed to understand the specific scope of the assignment and efficiently source professionals equipped to deliver from day one.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-2xl flex items-center justify-center text-center shadow-inner">
              <p className="text-[#253e91] text-xl sm:text-2xl font-black leading-relaxed italic">
                "The goal is to connect the right capability to the right assignment, for the duration it is needed."
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};
