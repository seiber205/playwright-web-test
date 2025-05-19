import { test, expect } from '@playwright/test';
const accounts = [
  {username:'testuser_6',password:'123456',expect: 'Sign up successful.'},
  {username:'testuser_123 ',password:' 123456',expect: 'This user already exist.'},
  {username:'',password:'',expect:'Please fill out Username and Password.'}

];
for (const account of accounts) {
test(`kiểm tra chức năng đăng ký for ${account.username}`, async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.click('#signin2')
  await page.waitForSelector('#sign-username')
  await page.fill('input#sign-username',account.username)
  await page.fill('input#sign-password',account.password)
 

      page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe(account.expect);
    await dialog.accept();
  });
  await page.click('button[onclick="register()"]')
  });
 
};
