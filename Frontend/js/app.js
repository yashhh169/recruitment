import { authState } from './context/authState.js';
import { Router } from './router.js';

class App {
  constructor() {
    this.router = new Router();
  }

  async start() {
    // Setup navbar subscriber
    authState.subscribe((state) => {
      this.updateNavbar(state);
    });

    // Initialize auth state from stored session
    await authState.init();

    // Start router
    this.router.init();

    // Wire desktop & mobile static navbar buttons to route hashes
    this.wireNavButtons();
  }

  updateNavbar({ user, isAuthenticated }) {
    const desktopAuthContainer = document.querySelector('nav .hidden.md\\:flex.items-center.gap-4');
    
    if (desktopAuthContainer) {
      if (isAuthenticated && user) {
        desktopAuthContainer.innerHTML = `
          <a href="#/dashboard" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <span class="material-symbols-outlined text-[18px]">account_circle</span>
            ${this._escapeHtml(user.name.split(' ')[0])}
          </a>
          <button id="nav-logout-btn" class="font-label-md text-xs font-semibold border border-outline-variant/40 text-on-surface-variant hover:text-error hover:border-error/40 px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px]">logout</span>
            Logout
          </button>
        `;

        const logoutBtn = document.getElementById('nav-logout-btn');
        if (logoutBtn) {
          logoutBtn.addEventListener('click', async () => {
            await authState.logout();
            window.location.hash = '#/login';
          });
        }
      } else {
        desktopAuthContainer.innerHTML = `
          <a href="#/login" class="font-label-md text-label-md text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors font-semibold">Login</a>
          <a href="#/register" class="font-label-md text-label-md bg-primary text-white px-6 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 font-semibold inline-block">Register</a>
        `;
      }
    }
  }

  wireNavButtons() {
    // Hero register button wire
    document.querySelectorAll('button').forEach(btn => {
      if (btn.textContent.includes('Register Now')) {
        btn.addEventListener('click', () => {
          window.location.hash = '#/register';
        });
      }
    });
  }

  _escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start();
});
