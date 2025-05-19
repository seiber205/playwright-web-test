import { test, expect } from '@playwright/test';
test ('Kiểm tra xóa sản phẩm',async({ page })  => {
    await page.goto('https://www.demoblaze.com/index.html')
    await page.click('a.hrefch:text("Samsung galaxy s6")')
    await page.waitForSelector('.name')
    await page.click('a.btn.btn-success.btn-lg')

    await page.click('#cartur')
    await page.click('a[onclick*="deleteItem"]');


})