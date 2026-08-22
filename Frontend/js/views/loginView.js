import { authState } from '../context/authState.js';

export class LoginView {
  render() {
    return `
      <section class="min-h-[85vh] pt-32 pb-20 px-margin-mobile md:px-margin-desktop flex items-center justify-center relative overflow-hidden">
        <!-- Background Ambient Glow -->
        <div class="absolute -top-24 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="w-full max-w-md relative z-10">
          <div class="bg-white/80 dark:bg-inverse-surface/80 backdrop-blur-xl border border-white/40 dark:border-outline-variant/30 rounded-3xl p-8 sm:p-10 soft-shadow">
            
            <div class="text-center mb-8">
              <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary via-blue-600 to-indigo-500 text-white shadow-lg shadow-primary/30 mb-4">
                <span class="material-symbols-outlined text-[28px]">lock</span>
              </div>
              <h2 class="font-display text-2xl sm:text-3xl font-extrabold text-on-background tracking-tight">Welcome Back</h2>
              <p class="font-body-md text-sm text-on-surface-variant mt-2">Sign in to your Talentraw account</p>
            </div>

            <!-- Global Error Alert Container -->
            <div id="login-error-container" class="hidden mb-6 p-4 rounded-xl bg-error-container/60 border border-error/20 text-error flex items-start gap-3">
              <span class="material-symbols-outlined text-[20px] shrink-0 mt-0.5">error</span>
              <span id="login-error-message" class="text-xs font-semibold"></span>
            </div>

            <form id="login-form" class="space-y-5" novalidate>
              <div>
                <label for="login-email" class="block font-label-md text-xs font-bold text-on-background mb-2">Email Address</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">mail</span>
                  <input 
                    type="email" 
                    id="login-email" 
                    name="email"
                    required
                    placeholder="you@example.com" 
                    class="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-body-md"
                  />
                </div>
                <p id="email-field-error" class="hidden text-[11px] text-error mt-1 font-medium"></p>
              </div>

              <div>
                <div class="flex items-center justify-between mb-2">
                  <label for="login-password" class="block font-label-md text-xs font-bold text-on-background">Password</label>
                  <a href="#/login" id="forgot-password-link" class="text-xs font-semibold text-primary hover:underline">Forgot password?</a>
                </div>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">key</span>
                  <input 
                    type="password" 
                    id="login-password" 
                    name="password"
                    required
                    placeholder="••••••••" 
                    class="w-full pl-11 pr-11 py-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-body-md"
                  />
                  <button 
                    type="button" 
                    id="toggle-login-password"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-on-background p-1 flex items-center justify-center transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
                <p id="password-field-error" class="hidden text-[11px] text-error mt-1 font-medium"></p>
              </div>

              <button 
                type="submit" 
                id="login-submit-btn"
                class="w-full font-label-md text-sm font-bold bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span id="login-btn-text">Sign In</span>
                <span id="login-btn-spinner" class="hidden material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
              </button>
            </form>

            <div class="mt-8 pt-6 border-t border-outline-variant/20 text-center">
              <p class="text-xs font-body-md text-on-surface-variant">
                Don't have an account? 
                <a href="#/register" class="font-bold text-primary hover:underline ml-1">Create an account</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    `;
  }

  mount() {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const togglePassBtn = document.getElementById('toggle-login-password');
    const forgotPassLink = document.getElementById('forgot-password-link');

    if (togglePassBtn && passwordInput) {
      togglePassBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        const icon = togglePassBtn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = isPassword ? 'visibility_off' : 'visibility';
      });
    }

    if (forgotPassLink) {
      forgotPassLink.addEventListener('click', (e) => {
        e.preventDefault();
        this._showError('Password reset link has been sent to your email (Placeholder function).');
      });
    }

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        this._clearErrors();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        let valid = true;
        if (!email) {
          this._showFieldError('email-field-error', 'Email is required.');
          valid = false;
        } else if (!email.includes('@')) {
          this._showFieldError('email-field-error', 'Enter a valid email address.');
          valid = false;
        }

        if (!password) {
          this._showFieldError('password-field-error', 'Password is required.');
          valid = false;
        }

        if (!valid) return;

        this._setLoading(true);

        const result = await authState.login(email, password);

        this._setLoading(false);

        if (result.success) {
          window.location.hash = '#/dashboard';
        } else {
          this._showError(result.error || 'Failed to login. Please try again.');
        }
      });
    }
  }

  _setLoading(isLoading) {
    const submitBtn = document.getElementById('login-submit-btn');
    const btnText = document.getElementById('login-btn-text');
    const btnSpinner = document.getElementById('login-btn-spinner');
    const inputs = document.querySelectorAll('#login-form input');

    if (submitBtn) submitBtn.disabled = isLoading;
    inputs.forEach(input => input.disabled = isLoading);

    if (btnText && btnSpinner) {
      if (isLoading) {
        btnText.textContent = 'Signing in...';
        btnSpinner.classList.remove('hidden');
      } else {
        btnText.textContent = 'Sign In';
        btnSpinner.classList.add('hidden');
      }
    }
  }

  _showFieldError(fieldErrorId, message) {
    const errorEl = document.getElementById(fieldErrorId);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
  }

  _clearErrors() {
    const errBox = document.getElementById('login-error-container');
    if (errBox) errBox.classList.add('hidden');
    
    document.querySelectorAll('[id$="-field-error"]').forEach(el => {
      el.textContent = '';
      el.classList.add('hidden');
    });
  }

  _showError(message) {
    const errBox = document.getElementById('login-error-container');
    const errText = document.getElementById('login-error-message');
    if (errBox && errText) {
      errText.textContent = message;
      errBox.classList.remove('hidden');
    }
  }
}
