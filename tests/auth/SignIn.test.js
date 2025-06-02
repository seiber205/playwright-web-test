import { test, expect } from '@playwright/test';

const loginData = [
  {
    id: 'TC_Login_01',
    description: 'Đăng nhập thành công',
    username: 'testuser_123',
    password: '123456',
    expect: 'success',
    expectedText: 'Welcome testuser_123'
  },
  {
    id: 'TC_Login_02',
    description: 'Đăng nhập thất bại (sai password)',
    username: 'testuser_123',
    password: 'wrongpass',
    expect: 'alert',
    expectedText: 'Wrong password.'
  },
  {
    id: 'TC_Login_03',
    description: 'Đăng nhập thất bại (username không tồn tại)',
    username: 'unknownuser',
    password: '123456',
    expect: 'alert',
    expectedText: 'User does not exist.'
  }
];

for (const tc of loginData) {
  test(`${tc.id} - ${tc.description}`, async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.click('#login2');
    await page.waitForSelector('#logInModal');

    await page.fill('#loginusername', tc.username);
    await page.fill('#loginpassword', tc.password);

    if (tc.expect === 'alert') {
      // Listen for alert
      page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe(tc.expectedText);
        await dialog.accept();
      });
    }

    await page.click('button[onclick="logIn()"]');

    if (tc.expect === 'success') {
     
      await expect(page.locator('#nameofuser')).toHaveText(tc.expectedText, { timeout: 5000 });
    }
  });
}
