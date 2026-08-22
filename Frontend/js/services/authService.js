/**
 * Auth Service Module
 * Provides a provider-agnostic authentication service interface.
 * Current implementation uses MockAuthAdapter (development/local storage).
 * Future Supabase migration only requires providing SupabaseAuthAdapter here.
 */

const USERS_KEY = 'talentraw_mock_users';
const SESSION_KEY = 'talentraw_mock_session';

class MockAuthAdapter {
  constructor() {
    this._initSeedData();
  }

  _initSeedData() {
    if (!localStorage.getItem(USERS_KEY)) {
      const defaultUsers = [
        {
          id: 'usr_demo_1',
          name: 'Demo User',
          email: 'demo@talentraw.com',
          password: 'password123',
          createdAt: new Date().toISOString()
        }
      ];
      localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }
  }

  _getUsers() {
    try {
      let data = localStorage.getItem(USERS_KEY);
      if (!data) {
        this._initSeedData();
        data = localStorage.getItem(USERS_KEY);
      }
      return JSON.parse(data) || [];
    } catch (e) {
      return [];
    }
  }

  _saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  async _delay(ms = 350) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async login({ email, password }) {
    await this._delay();
    const cleanEmail = (email || '').trim().toLowerCase();
    const users = this._getUsers();
    
    const user = users.find(u => u.email.toLowerCase() === cleanEmail);

    if (!user) {
      return { user: null, session: null, error: 'Invalid email or password.' };
    }

    if (user.password !== password) {
      return { user: null, session: null, error: 'Invalid email or password.' };
    }

    const sessionUser = { id: user.id, name: user.name, email: user.email };
    const session = {
      token: `mock_jwt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      user: sessionUser,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return { user: sessionUser, session, error: null };
  }

  async register({ name, email, password }) {
    await this._delay();
    const cleanName = (name || '').trim();
    const cleanEmail = (email || '').trim().toLowerCase();

    if (!cleanName) {
      return { user: null, session: null, error: 'Full name is required.' };
    }
    if (!cleanEmail || !cleanEmail.includes('@')) {
      return { user: null, session: null, error: 'Please provide a valid email address.' };
    }
    if (!password || password.length < 6) {
      return { user: null, session: null, error: 'Password must be at least 6 characters long.' };
    }

    const users = this._getUsers();
    const existing = users.find(u => u.email.toLowerCase() === cleanEmail);

    if (existing) {
      return { user: null, session: null, error: 'An account with this email already exists.' };
    }

    const newUser = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      name: cleanName,
      email: cleanEmail,
      password: password,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    this._saveUsers(users);

    const sessionUser = { id: newUser.id, name: newUser.name, email: newUser.email };
    const session = {
      token: `mock_jwt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      user: sessionUser,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return { user: sessionUser, session, error: null };
  }

  async logout() {
    await this._delay(150);
    localStorage.removeItem(SESSION_KEY);
    return { error: null };
  }

  async getSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return { session: null, user: null };
      const session = JSON.parse(raw);
      if (new Date(session.expiresAt) < new Date()) {
        localStorage.removeItem(SESSION_KEY);
        return { session: null, user: null };
      }
      return { session, user: session.user };
    } catch (e) {
      return { session: null, user: null };
    }
  }
}

// Export singleton Auth Service instance
export const authService = new MockAuthAdapter();
