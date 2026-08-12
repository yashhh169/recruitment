import { authState } from '../context/authState.js';

export class DashboardView {
  render() {
    const { user } = authState.getState();
    const name = user ? user.name : 'Candidate';
    const email = user ? user.email : '';

    return `
      <section class="min-h-[85vh] pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        
        <!-- Welcome Banner Card -->
        <div class="relative bg-gradient-to-r from-primary via-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white soft-shadow overflow-hidden mb-10">
          <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md mb-4">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Mock Auth Active (Development Mode)
              </div>
              <h1 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                Welcome, ${this._escapeHtml(name)}!
              </h1>
              <p class="font-body-md text-white/80 text-sm max-w-xl">
                Logged in as <span class="font-semibold text-white">${this._escapeHtml(email)}</span>. Your session is active and protected.
              </p>
            </div>

            <div class="flex items-center gap-4 shrink-0">
              <button 
                id="dashboard-logout-btn"
                class="font-label-md text-sm font-bold bg-white text-primary hover:bg-surface-bright px-6 py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <span class="material-symbols-outlined text-[20px]">logout</span>
                Logout
              </button>
            </div>
          </div>
        </div>

        <!-- Quick Info Grid -->
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          <div class="bg-white/80 dark:bg-inverse-surface/80 backdrop-blur-xl border border-white/40 dark:border-outline-variant/30 rounded-2xl p-6 soft-shadow flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[26px]">account_circle</span>
            </div>
            <div>
              <h3 class="font-headline-sm text-base font-bold text-on-background mb-1">User Profile</h3>
              <p class="font-body-md text-xs text-on-surface-variant mb-2">Authenticated locally via MockAuthAdapter.</p>
              <span class="inline-block px-2.5 py-0.5 rounded-md bg-primary/10 text-primary font-mono text-[11px] font-semibold">Active Session</span>
            </div>
          </div>

          <div class="bg-white/80 dark:bg-inverse-surface/80 backdrop-blur-xl border border-white/40 dark:border-outline-variant/30 rounded-2xl p-6 soft-shadow flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[26px]">verified_user</span>
            </div>
            <div>
              <h3 class="font-headline-sm text-base font-bold text-on-background mb-1">Supabase Ready</h3>
              <p class="font-body-md text-xs text-on-surface-variant mb-2">Architecture decoupled & ready for Supabase Auth swap.</p>
              <span class="inline-block px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-semibold">Adapter Ready</span>
            </div>
          </div>

          <div class="bg-white/80 dark:bg-inverse-surface/80 backdrop-blur-xl border border-white/40 dark:border-outline-variant/30 rounded-2xl p-6 soft-shadow flex items-start gap-4 sm:col-span-2 md:col-span-1">
            <div class="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[26px]">explore</span>
            </div>
            <div>
              <h3 class="font-headline-sm text-base font-bold text-on-background mb-1">Quick Navigation</h3>
              <p class="font-body-md text-xs text-on-surface-variant mb-2">Explore platform opportunities & features.</p>
              <a href="#" class="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                Return to Home Page <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>

        </div>

      </section>
    `;
  }

  mount() {
    const logoutBtn = document.getElementById('dashboard-logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', async () => {
        await authState.logout();
        window.location.hash = '#/login';
      });
    }
  }

  _escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
