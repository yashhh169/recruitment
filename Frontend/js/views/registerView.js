import { authState } from '../context/authState.js';

export class RegisterView {
  render() {
    return `
      <section class="min-h-[85vh] pt-32 pb-20 px-margin-mobile md:px-margin-desktop flex items-center justify-center relative overflow-hidden">
        <!-- Background Ambient Glow -->
        <div class="absolute -top-24 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="w-full max-w-md relative z-10">
          <div class="bg-white/80 dark:bg-inverse-surface/80 backdrop-blur-xl border border-white/40 dark:border-outline-variant/30 rounded-3xl p-8 sm:p-10 soft-shadow">
            
            <div class="text-center mb-8">
              <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary via-blue-600 to-indigo-500 text-white shadow-lg shadow-primary/30 mb-4">
                <span class="material-symbols-outlined text-[28px]">person_add</span>
              </div>
              <h2 class="font-display text-2xl sm:text-3xl font-extrabold text-on-background tracking-tight">Create Account</h2>
              <p class="font-body-md text-sm text-on-surface-variant mt-2">Join Talentraw to unlock top opportunities</p>
            </div>

            <!-- Global Error Alert Container -->
            <div id="register-error-container" class="hidden mb-6 p-4 rounded-xl bg-error-container/60 border border-error/20 text-error flex items-start gap-3">
              <span class="material-symbols-outlined text-[20px] shrink-0 mt-0.5">error</span>
              <span id="register-error-message" class="text-xs font-semibold"></span>
            </div>

            <!-- Global Success Alert Container -->
            <div id="register-success-container" class="hidden mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-start gap-3">
              <span class="material-symbols-outlined text-[20px] shrink-0 mt-0.5">check_circle</span>
              <span id="register-success-message" class="text-xs font-semibold">Account created successfully! Redirecting...</span>
            </div>

            <form id="register-form" class="space-y-4" novalidate>
              <div>
                <label for="reg-name" class="block font-label-md text-xs font-bold text-on-background mb-1.5">Full Name</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">badge</span>
                  <input 
                    type="text" 
                    id="reg-name" 
                    name="name"
                    required
                    placeholder="Alex Morgan" 
                    class="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-body-md"
                  />
                </div>
                <p id="reg-name-error" class="hidden text-[11px] text-error mt-1 font-medium"></p>
              </div>

              <div>
                <label for="reg-email" class="block font-label-md text-xs font-bold text-on-background mb-1.5">Email Address</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">mail</span>
                  <input 
                    type="email" 
                    id="reg-email" 
                    name="email"
                    required
                    placeholder="you@example.com" 
                    class="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-body-md"
                  />
                </div>
                <p id="reg-email-error" class="hidden text-[11px] text-error mt-1 font-medium"></p>
              </div>

              <div>
                <label for="reg-password" class="block font-label-md text-xs font-bold text-on-background mb-1.5">Password</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">key</span>
                  <input 
                    type="password" 
                    id="reg-password" 
                    name="password"
                    required
                    placeholder="Minimum 6 characters" 
                    class="w-full pl-11 pr-11 py-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-body-md"
                  />
                  <button 
                    type="button" 
                    id="toggle-reg-password"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-on-background p-1 flex items-center justify-center transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
                <p id="reg-password-error" class="hidden text-[11px] text-error mt-1 font-medium"></p>
              </div>

              <div>
                <label for="reg-confirm-password" class="block font-label-md text-xs font-bold text-on-background mb-1.5">Confirm Password</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">lock_reset</span>
                  <input 
                    type="password" 
                    id="reg-confirm-password" 
                    name="confirmPassword"
                    required
                    placeholder="Re-enter password" 
                    class="w-full pl-11 pr-11 py-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-body-md"
                  />
                  <button 
                    type="button" 
                    id="toggle-reg-confirm-password"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-on-background p-1 flex items-center justify-center transition-colors"
                    aria-label="Toggle confirm password visibility"
                  >
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
                <p id="reg-confirm-password-error" class="hidden text-[11px] text-error mt-1 font-medium"></p>
              </div>

              <button 
                type="submit" 
                id="reg-submit-btn"
                class="w-full font-label-md text-sm font-bold bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span id="reg-btn-text">Create Account</span>
                <span id="reg-btn-spinner" class="hidden material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
              </button>
            </form>

            <div class="mt-6 pt-5 border-t border-outline-variant/20 text-center">
              <p class="text-xs font-body-md text-on-surface-variant">
                Already have an account? 
                <a href="#/login" class="font-bold text-primary hover:underline ml-1">Sign in</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    `;
  }

  mount() {
    const form = document.getElementById('register-form');
    const nameInput = document.getElementById('reg-name');
    const emailInput = document.getElementById('reg-email');
    const passwordInput = document.getElementById('reg-password');
    const confirmInput = document.getElementById('reg-confirm-password');

    const togglePass = document.getElementById('toggle-reg-password');
    const toggleConfirm = document.getElementById('toggle-reg-confirm-password');

    if (togglePass && passwordInput) {
      togglePass.addEventListener('click', () => {
        const isPass = passwordInput.type === 'password';
        passwordInput.type = isPass ? 'text' : 'password';
        togglePass.querySelector('.material-symbols-outlined').textContent = isPass ? 'visibility_off' : 'visibility';
      });
    }

    if (toggleConfirm && confirmInput) {
      toggleConfirm.addEventListener('click', () => {
        const isPass = confirmInput.type === 'password';
        confirmInput.type = isPass ? 'text' : 'password';
        toggleConfirm.querySelector('.material-symbols-outlined').textContent = isPass ? 'visibility_off' : 'visibility';
      });
    }

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        this._clearErrors();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmInput.value;

        let valid = true;
        if (!name) {
          this._showFieldError('reg-name-error', 'Full Name is required.');
          valid = false;
        }

        if (!email) {
          this._showFieldError('reg-email-error', 'Email address is required.');
          valid = false;
        } else if (!email.includes('@')) {
          this._showFieldError('reg-email-error', 'Enter a valid email address.');
          valid = false;
        }

        if (!password) {
          this._showFieldError('reg-password-error', 'Password is required.');
          valid = false;
        } else if (password.length < 6) {
          this._showFieldError('reg-password-error', 'Password must be at least 6 characters.');
          valid = false;
        }

        if (password !== confirmPassword) {
          this._showFieldError('reg-confirm-password-error', 'Passwords do not match.');
          valid = false;
        }

        if (!valid) return;

        this._setLoading(true);

        const result = await authState.register(name, email, password);

        this._setLoading(false);

        if (result.success) {
          this._showSuccess('Account created successfully! Redirecting to dashboard...');
          setTimeout(() => {
            window.location.hash = '#/dashboard';
          }, 1000);
        } else {
          this._showError(result.error || 'Registration failed. Please try again.');
        }
      });
    }
  }

  _setLoading(isLoading) {
    const submitBtn = document.getElementById('reg-submit-btn');
    const btnText = document.getElementById('reg-btn-text');
    const btnSpinner = document.getElementById('reg-btn-spinner');
    const inputs = document.querySelectorAll('#register-form input');

    if (submitBtn) submitBtn.disabled = isLoading;
    inputs.forEach(input => input.disabled = isLoading);

    if (btnText && btnSpinner) {
      if (isLoading) {
        btnText.textContent = 'Creating account...';
        btnSpinner.classList.remove('hidden');
      } else {
        btnText.textContent = 'Create Account';
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
    const errBox = document.getElementById('register-error-container');
    const successBox = document.getElementById('register-success-container');
    if (errBox) errBox.classList.add('hidden');
    if (successBox) successBox.classList.add('hidden');

    document.querySelectorAll('[id$="-error"]').forEach(el => {
      el.textContent = '';
      el.classList.add('hidden');
    });
  }

  _showError(message) {
    const errBox = document.getElementById('register-error-container');
    const errText = document.getElementById('register-error-message');
    if (errBox && errText) {
      errText.textContent = message;
      errBox.classList.remove('hidden');
    }
  }

  _showSuccess(message) {
    const successBox = document.getElementById('register-success-container');
    const successText = document.getElementById('register-success-message');
    if (successBox && successText) {
      successText.textContent = message;
      successBox.classList.remove('hidden');
    }
  }
}
