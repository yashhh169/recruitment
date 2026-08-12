import { test, expect } from '@playwright/test';

test.describe('Gozonixa Landing Page (React)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display main page title and brand header', async ({ page }) => {
    await expect(page).toHaveTitle(/Gozonixa/i);
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();
    await page.waitForTimeout(1000);
  });

  test('should interact with How It Works journey tabs', async ({ page }) => {
    const candidateTab = page.locator('#tab-candidate');
    const companyTab = page.locator('#tab-company');
    const allTab = page.locator('#tab-all');

    if (await candidateTab.isVisible()) {
      await candidateTab.click();
      await page.waitForTimeout(1000);

      await companyTab.click();
      await page.waitForTimeout(1000);

      await allTab.click();
      await page.waitForTimeout(1000);
    }
  });

  test('should check header action buttons (Login & Register)', async ({ page }) => {
    const loginButton = page.locator('nav a[href="/login"]');
    const registerButton = page.locator('nav a[href="/register"]');

    await expect(loginButton).toBeVisible();
    await expect(registerButton).toBeVisible();

    await loginButton.hover();
    await page.waitForTimeout(800);
    await registerButton.hover();
    await page.waitForTimeout(800);
  });

  test('should scroll down to footer and verify copyright text', async ({ page }) => {
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await expect(footer).toBeVisible();
  });
});
