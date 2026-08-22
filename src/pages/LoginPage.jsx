import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, Key, Eye, EyeOff, AlertCircle, Loader2 } from 'lucide-react';

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [globalError, setGlobalError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setGlobalError('');

    let valid = true;
    if (!email.trim()) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!email.includes('@')) {
      setEmailError('Enter a valid email address.');
      valid = false;
    }

    if (!password) {
      setPasswordError('Password is required.');
      valid = false;
    }

    if (!valid) return;

    setLoading(true);
    const result = await login(email, password);
    setLoading(false);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setGlobalError(result.error || 'Failed to login. Please try again.');
    }
  };

  return (
    <section className="min-h-[85vh] pt-32 pb-20 px-margin-mobile md:px-margin-desktop flex items-center justify-center relative overflow-hidden">
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/80 dark:bg-inverse-surface/80 backdrop-blur-xl border border-white/40 dark:border-outline-variant/30 rounded-3xl p-8 sm:p-10 soft-shadow">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary via-blue-600 to-indigo-500 text-white shadow-lg shadow-primary/30 mb-4">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-background tracking-tight">Welcome Back</h2>
            <p className="font-body-md text-sm text-on-surface-variant mt-2">Sign in to your Talentraw account</p>
          </div>

          <div id="login-error-container" className={`${globalError ? '' : 'hidden'} mb-6 p-4 rounded-xl bg-error-container/60 border border-error/20 text-error flex items-start gap-3`}>
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span id="login-error-message" className="text-xs font-semibold">{globalError}</span>
          </div>

          <form id="login-form" onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="login-email" className="block font-label-md text-xs font-bold text-on-background mb-2">Email Address</label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60" />
                <input 
                  type="email" 
                  id="login-email" 
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  placeholder="you@example.com" 
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-body-md"
                />
              </div>
              {emailError && <p id="email-field-error" className="text-[11px] text-error mt-1 font-medium">{emailError}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="login-password" className="block font-label-md text-xs font-bold text-on-background">Password</label>
                <a href="#/login" onClick={(e) => { e.preventDefault(); alert('Password reset link placeholder.'); }} className="text-xs font-semibold text-primary hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Key className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="login-password" 
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-11 py-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-body-md"
                />
                <button 
                  type="button" 
                  id="toggle-login-password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-on-background p-1 flex items-center justify-center transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {passwordError && <p id="password-field-error" className="text-[11px] text-error mt-1 font-medium">{passwordError}</p>}
            </div>

            <button 
              type="submit" 
              id="login-submit-btn"
              disabled={loading}
              className="w-full font-label-md text-sm font-bold bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span>Signing in...</span>
                  <Loader2 className="w-5 h-5 animate-spin" />
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-outline-variant/20 text-center">
            <p className="text-xs font-body-md text-on-surface-variant">
              Don't have an account? 
              <Link to="/register" className="font-bold text-primary hover:underline ml-1">Create an account</Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
