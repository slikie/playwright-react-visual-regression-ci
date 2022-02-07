import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const buffer = await page.screenshot({ path: 'screenshot.png', fullPage: true });
  console.log(buffer.toString('base64'));
});