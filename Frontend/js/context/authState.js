import { authService } from '../services/authService.js';

/**
 * Centralized Auth State Store (Pub/Sub pattern)
 */
class AuthStateStore {
  constructor() {
    this.state = {
      user: null,
      isAuthenticated: false,
      isLoading: true
    };
    this.listeners = [];
  }

  async init() {
    try {
      const { session, user } = await authService.getSession();
      if (session && user) {
        this.state = {
          user,
          isAuthenticated: true,
          isLoading: false
        };
      } else {
        this.state = {
          user: null,
          isAuthenticated: false,
          isLoading: false
        };
      }
    } catch (err) {
      this.state = { user: null, isAuthenticated: false, isLoading: false };
    }
    this._notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    // Immediately trigger listener with current state
    listener(this.state);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  getState() {
    return this.state;
  }

  _notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  async login(email, password) {
    this.state.isLoading = true;
    this._notify();

    const { user, session, error } = await authService.login({ email, password });

    if (error) {
      this.state.isLoading = false;
      this._notify();
      return { success: false, error };
    }

    this.state = {
      user,
      isAuthenticated: true,
      isLoading: false
    };
    this._notify();
    return { success: true, user };
  }

  async register(name, email, password) {
    this.state.isLoading = true;
    this._notify();

    const { user, session, error } = await authService.register({ name, email, password });

    if (error) {
      this.state.isLoading = false;
      this._notify();
      return { success: false, error };
    }

    this.state = {
      user,
      isAuthenticated: true,
      isLoading: false
    };
    this._notify();
    return { success: true, user };
  }

  async logout() {
    this.state.isLoading = true;
    this._notify();

    await authService.logout();

    this.state = {
      user: null,
      isAuthenticated: false,
      isLoading: false
    };
    this._notify();
    return { success: true };
  }
}

export const authState = new AuthStateStore();
