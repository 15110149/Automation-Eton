import { test, expect } from '@playwright/test';

// Pre-condition step (have to login before)
test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto('./');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('aad.admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('123456');
    await page.getByRole('button', { name: 'Login' }).click();
});


test('Verify after login successfully redirect to action center', async ({ page }) => {
  await expect(page).toHaveURL('./ActionCenter');
  await expect(page).toHaveTitle('Phòng hành động - Eton.Hrm.Web');
});

test('verify redirect correct link when clicking on objects <Out-of-stock> in action center', async ({ page }) => {
  await page.goto('./ActionCenter');
  await page.getByRole('link', { name: 'Đơn hàng không đủ hàng (Out-of-stock)' }).click();
  await expect(page).toHaveURL('./SaleOrder?status=PreOrder');
});

