import { test, expect } from '@playwright/test';

test.describe('Authentication System (React Mock Auth)', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.clear();
    });
    await page.goto('/');
  });

  test('should display login page and perform successful login with demo user', async ({ page }) => {
    await page.goto('/login');
    
    await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible();
    
    // Fill demo credentials
    await page.fill('#login-email', 'demo@gozonixa.com');
    await page.fill('#login-password', 'password123');
    
    // Test password toggle
    const toggleBtn = page.locator('#toggle-login-password');
    await toggleBtn.click();
    await expect(page.locator('#login-password')).toHaveAttribute('type', 'text');
    await toggleBtn.click();
    await expect(page.locator('#login-password')).toHaveAttribute('type', 'password');

    // Submit form
    await page.click('#login-submit-btn');

    // Should redirect to dashboard
    await expect(page).toHaveURL(/\/dashboard/, { timeout: 10000 });
    await expect(page.getByRole('heading', { name: /Welcome, Demo User/i })).toBeVisible();
  });

  test('should show validation error on invalid login credentials', async ({ page }) => {
    await page.goto('/login');
    
    await page.fill('#login-email', 'wrong@example.com');
    await page.fill('#login-password', 'wrongpass');
    await page.click('#login-submit-btn');

    const errorMsg = page.locator('#login-error-message');
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText('Invalid email or password');
  });

  test('should register a new user and automatically log in', async ({ page }) => {
    const testEmail = `newuser_${Date.now()}@example.com`;

    await page.goto('/register');
    await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible();

    await page.fill('#reg-name', 'Sarah Connor');
    await page.fill('#reg-email', testEmail);
    await page.fill('#reg-password', 'securePass123');
    await page.fill('#reg-confirm-password', 'securePass123');

    await page.click('#reg-submit-btn');

    // Check automatic redirection to dashboard and welcome banner
    await expect(page).toHaveURL(/\/dashboard/, { timeout: 10000 });
    await expect(page.getByRole('heading', { name: /Welcome, Sarah Connor/i })).toBeVisible();
  });

  test('should show error when passwords do not match during registration', async ({ page }) => {
    await page.goto('/register');

    await page.fill('#reg-name', 'Test User');
    await page.fill('#reg-email', 'test@example.com');
    await page.fill('#reg-password', 'password123');
    await page.fill('#reg-confirm-password', 'differentPassword');

    await page.click('#reg-submit-btn');

    const fieldError = page.locator('#reg-confirm-password-error');
    await expect(fieldError).toBeVisible();
    await expect(fieldError).toContainText('Passwords do not match');
  });

  test('should protect dashboard route and redirect to login when unauthenticated', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Should be guarded and redirected to login page
    await expect(page).toHaveURL(/\/login/);
    await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible();
  });

  test('should logout user and redirect to login page', async ({ page }) => {
    // Login first
    await page.goto('/login');
    await page.fill('#login-email', 'demo@gozonixa.com');
    await page.fill('#login-password', 'password123');
    await page.click('#login-submit-btn');
    await expect(page).toHaveURL(/\/dashboard/, { timeout: 10000 });

    // Click logout button on dashboard
    await page.click('#dashboard-logout-btn');

    // Should redirect to login page
    await expect(page).toHaveURL(/\/login/);

    // Trying to navigate back to dashboard should be blocked
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login/);
  });
});
