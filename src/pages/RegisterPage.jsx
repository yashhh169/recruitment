import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserPlus, Badge, Mail, Key, Lock, Eye, EyeOff, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

export const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');

  const [globalError, setGlobalError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmError('');
    setGlobalError('');

    let valid = true;
    if (!name.trim()) {
      setNameError('Full Name is required.');
      valid = false;
    }

    if (!email.trim()) {
      setEmailError('Email address is required.');
      valid = false;
    } else if (!email.includes('@')) {
      setEmailError('Enter a valid email address.');
      valid = false;
    }

    if (!password) {
      setPasswordError('Password is required.');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      valid = false;
    }

    if (password !== confirmPassword) {
      setConfirmError('Passwords do not match.');
      valid = false;
    }

    if (!valid) return;

    setLoading(true);
    const result = await register(name, email, password);
    setLoading(false);

    if (result.success) {
      setSuccessMsg('Account created successfully! Redirecting...');
      setTimeout(() => {
        navigate('/dashboard');
      }, 800);
    } else {
      setGlobalError(result.error || 'Registration failed. Please try again.');
    }
  };

  return (
    <section className="min-h-[85vh] pt-32 pb-20 px-margin-mobile md:px-margin-desktop flex items-center justify-center relative overflow-hidden">
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/80 dark:bg-inverse-surface/80 backdrop-blur-xl border border-white/40 dark:border-outline-variant/30 rounded-3xl p-8 sm:p-10 soft-shadow">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary via-blue-600 to-indigo-500 text-white shadow-lg shadow-primary/30 mb-4">
              <UserPlus className="w-7 h-7" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-background tracking-tight">Create Account</h2>
            <p className="font-body-md text-sm text-on-surface-variant mt-2">Join Talentraw to unlock top opportunities</p>
          </div>

          <div id="register-error-container" className={`${globalError ? '' : 'hidden'} mb-6 p-4 rounded-xl bg-error-container/60 border border-error/20 text-error flex items-start gap-3`}>
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span id="register-error-message" className="text-xs font-semibold">{globalError}</span>
          </div>

          <div id="register-success-container" className={`${successMsg ? '' : 'hidden'} mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-start gap-3`}>
            <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span id="register-success-message" className="text-xs font-semibold">{successMsg}</span>
          </div>

          <form id="register-form" onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="reg-name" className="block font-label-md text-xs font-bold text-on-background mb-1.5">Full Name</label>
              <div className="relative">
                <Badge className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60" />
                <input 
                  type="text" 
                  id="reg-name" 
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  placeholder="Alex Morgan" 
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-body-md"
                />
              </div>
              {nameError && <p id="reg-name-error" className="text-[11px] text-error mt-1 font-medium">{nameError}</p>}
            </div>

            <div>
              <label htmlFor="reg-email" className="block font-label-md text-xs font-bold text-on-background mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60" />
                <input 
                  type="email" 
                  id="reg-email" 
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  placeholder="you@example.com" 
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-body-md"
                />
              </div>
              {emailError && <p id="reg-email-error" className="text-[11px] text-error mt-1 font-medium">{emailError}</p>}
            </div>

            <div>
              <label htmlFor="reg-password" className="block font-label-md text-xs font-bold text-on-background mb-1.5">Password</label>
              <div className="relative">
                <Key className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="reg-password" 
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  placeholder="Minimum 6 characters" 
                  className="w-full pl-11 pr-11 py-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-body-md"
                />
                <button 
                  type="button" 
                  id="toggle-reg-password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-on-background p-1 flex items-center justify-center transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {passwordError && <p id="reg-password-error" className="text-[11px] text-error mt-1 font-medium">{passwordError}</p>}
            </div>

            <div>
              <label htmlFor="reg-confirm-password" className="block font-label-md text-xs font-bold text-on-background mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60" />
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  id="reg-confirm-password" 
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading}
                  placeholder="Re-enter password" 
                  className="w-full pl-11 pr-11 py-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-body-md"
                />
                <button 
                  type="button" 
                  id="toggle-reg-confirm-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-on-background p-1 flex items-center justify-center transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {confirmError && <p id="reg-confirm-password-error" className="text-[11px] text-error mt-1 font-medium">{confirmError}</p>}
            </div>

            <button 
              type="submit" 
              id="reg-submit-btn"
              disabled={loading}
              className="w-full font-label-md text-sm font-bold bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span>Creating account...</span>
                  <Loader2 className="w-5 h-5 animate-spin" />
                </>
              ) : (
                <span>Create Account</span>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-outline-variant/20 text-center">
            <p className="text-xs font-body-md text-on-surface-variant">
              Already have an account? 
              <Link to="/login" className="font-bold text-primary hover:underline ml-1">Sign in</Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
