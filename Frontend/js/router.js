import { authState } from './context/authState.js';
import { LoginView } from './views/loginView.js';
import { RegisterView } from './views/registerView.js';
import { DashboardView } from './views/dashboardView.js';

export class Router {
  constructor() {
    this.loginView = new LoginView();
    this.registerView = new RegisterView();
    this.dashboardView = new DashboardView();

    this.mainLandingEl = document.querySelector('main');
    this.authViewContainer = document.getElementById('app-view');
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('popstate', () => this.handleRoute());
    
    // Subscribe to auth state changes
    authState.subscribe(() => {
      this.handleRoute();
    });

    this.handleRoute();
  }

  async handleRoute() {
    const rawHash = window.location.hash || '';
    const pathname = window.location.pathname || '/';

    let path = '/';

    if (rawHash && rawHash.startsWith('#/')) {
      path = rawHash.slice(1);
    } else if (pathname && pathname !== '/' && pathname !== '/index.html') {
      path = pathname;
    } else if (rawHash === '#' || rawHash === '#landing' || rawHash === '') {
      path = '/';
    }

    path = path.split('?')[0];

    const { isAuthenticated, isLoading } = authState.getState();

    // If auth state is initializing, delay routing decision until loaded
    if (isLoading) return;

    // Route Guard Protection logic for authenticated routes
    if (path === '/dashboard' && !isAuthenticated) {
      if (window.location.hash !== '#/login') {
        window.location.hash = '#/login';
      }
      return;
    }

    // Render logic
    if (path === '/') {
      this._showLanding();
    } else if (path === '/login') {
      this._renderView(this.loginView);
    } else if (path === '/register') {
      this._renderView(this.registerView);
    } else if (path === '/dashboard') {
      this._renderView(this.dashboardView);
    } else {
      // Fallback unknown routes to landing page
      this._showLanding();
    }
  }

  _showLanding() {
    if (this.mainLandingEl) this.mainLandingEl.style.display = 'block';
    if (this.authViewContainer) {
      this.authViewContainer.innerHTML = '';
      this.authViewContainer.style.display = 'none';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  _renderView(viewComponent) {
    if (this.mainLandingEl) this.mainLandingEl.style.display = 'none';
    if (this.authViewContainer) {
      this.authViewContainer.style.display = 'block';
      this.authViewContainer.innerHTML = viewComponent.render();
      viewComponent.mount();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
