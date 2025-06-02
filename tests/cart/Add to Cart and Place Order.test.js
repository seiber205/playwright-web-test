import { test, expect } from '@playwright/test';

const UsersInfo = [
   {Name:'',Country:'',City:'',Creditcard:'',Month:'',Year:'',expect:'Please fill out Name and Creditcard.'},
   {Name:'John Doe',Country:'VietNam',City:'TP.HCM',Creditcard:'1234567890123456',Month:'12',Year:'2005',expect:'Thank you for your purchase!'}
]

test('kiểm tra chi tiết sản phẩm', async ({ page }) => { 
    await page.goto('https://www.demoblaze.com/')
    await page.click('a.hrefch:text("Samsung galaxy s6")');


page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe('Product added');
        await dialog.accept();
      });

      await page.click('a.btn.btn-success.btn-lg ')

      await page.goto('https://www.demoblaze.com/')
      await page.click('a.hrefch:text("Nexus 6")');
      page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe('Product added');
        await dialog.accept();
      });
await page.click('a.btn.btn-success.btn-lg ')
await page.click('#cartur')

const Products = await (page.locator('#tbodyid tr td:nth-child(2)')).allTextContents()
console.log(Products)

await expect (Products).toContain("Nexus 6")
await expect (Products).toContain("Samsung galaxy s6")

for (const User of UsersInfo) {
await page.click('.btn.btn-success')

await page.fill('input#name',User.Name)
await page.fill('input#country',User.Country)
await page.fill('input#city',User.City)
await page.fill('input#card',User.Creditcard)
await page.fill('input#month',User.Month)
await page.fill('input#year',User.Year)


if (User.expect === 'Please fill out Name and Creditcard.') {
    
    page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe(User.expect);
      await dialog.accept();
    });

    await page.click('button.btn.btn-primary:has-text("Purchase")');

    await page.goto('https://www.demoblaze.com/cart.html')

    
  } else {
    

    await page.click('button.btn.btn-primary:has-text("Purchase")');

    
    await expect(page.locator('h2', { hasText: User.expect })).toBeVisible();

    
    
      page.click('.confirm.btn.btn-lg.btn-primary')
    
  }

}
})
