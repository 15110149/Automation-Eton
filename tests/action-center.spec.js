import { test, expect } from '@playwright/test';

// Login
test('test', async ({ page }) => {
  await page.goto('https://ccu.eton.vn/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('aad.admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
});

test('verify click on objects in action center', async ({ page }) => {
  await page.goto('https://ccu.eton.vn/ActionCenter');

});