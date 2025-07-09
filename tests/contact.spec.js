// tests/contact.spec.js
import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {

  // Before each test in this describe block, navigate to the contact page
  test.beforeEach(async ({ page }) => {
    // Ensure your React app is running on localhost:3000
    await page.goto('http://localhost:3000/about/contact');
  });

  test('should display the Contact Us heading and form', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Cryptofox Technology Ltd/);

    // Expect the main heading for the contact form to be visible
    await expect(page.locator('h2', { hasText: 'Send Us a Message' })).toBeVisible();

    // Expect specific form fields to be visible
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="subject"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]', { hasText: 'Send Message' })).toBeVisible();
  });

  test('should successfully submit the contact form', async ({ page }) => {
    // Fill out the form
    await page.locator('input[name="name"]').fill('Carlos Test');
    await page.locator('input[name="email"]').fill('carlos.test@example.com');
    await page.locator('input[name="subject"]').fill('Playwright Test Subject');
    await page.locator('textarea[name="message"]').fill('This is an automated message from Playwright.');

    // Click the submit button
    await page.locator('button[type="submit"]').click();

    // Expect a success message to appear
    await expect(page.locator('.form-status')).toHaveText('Message sent successfully!');

    // Optionally, verify form fields are cleared after successful submission
    await expect(page.locator('input[name="name"]')).toHaveValue('');
    await expect(page.locator('input[name="email"]')).toHaveValue('');
  });

  // --- Visual Regression Test ---
  test('Contact page layout should match snapshot across viewports', async ({ page }) => {
    await page.goto('http://localhost:3000/contact');

    // Test on Desktop viewport
    await page.setViewportSize({ width: 1280, height: 800 });
    // The first time this runs, it will save 'contact-page-desktop.png' as the baseline.
    // Subsequent runs will compare against this baseline.
    await expect(page).toHaveScreenshot('contact-page-desktop.png');

    // Test on Tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.reload(); // Reload to ensure layout recalculates for new viewport
    await expect(page).toHaveScreenshot('contact-page-tablet.png');

    // Test on Mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload(); // Reload to ensure layout recalculates for new viewport
    await expect(page).toHaveScreenshot('contact-page-mobile.png');
  });

});