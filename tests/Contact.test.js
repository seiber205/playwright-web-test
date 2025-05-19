import { test, expect } from '@playwright/test';
test ('kiểm tra chức năng trợ giúp', async ({page}) => {
await page.goto('https://www.demoblaze.com/index.html')
await page.click('a.nav-link:text("Contact")')

await page.fill('input#recipient-email.form-control','PhatDat@gmail.com')
await page.fill('input#recipient-name.form-control','PhatDat')
await page.fill('#message-text.form-control','I have some problem with my order')


page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe('Thanks for the message!!');
        await dialog.accept();
      });
      
await page.click('button.btn.btn-primary')


})