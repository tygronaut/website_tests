import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.tygron.com/nl');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Tygron Platform – Accelerated Simulations for Engineers");
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.tygron.com/nl');

  // Click the get started link.
  await page.getByRole('a', { name: 'Free Trial' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('paragraph', { name: 'Start uw 10 dagen free trial' })).toBeVisible();
});
