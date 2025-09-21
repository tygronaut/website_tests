import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  
  await page.goto('https://www.tygron.com/nl');

  await expect(page).toHaveTitle("Tygron Platform – Accelerated Simulations for Engineers");
});

test('get started link', async ({ page }) => {

  await page.goto('https://www.tygron.com/nl');

  await page.getByRole('link', { name: 'Free Trial' }).click();

  await expect(page.getByText('Start uw 10 dagen free trial')).toBeVisible();
});
