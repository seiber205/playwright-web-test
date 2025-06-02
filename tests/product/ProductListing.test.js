import { test, expect } from '@playwright/test';
test('kiểm tra danh sách sản phẩm', async ({ page }) => {
await page.goto('https://www.demoblaze.com/')
await page.waitForSelector('#tbodyid')

await expect (page.locator('#tbodyid .col-lg-4' )).toHaveCount(9)

await page.click('#next2')

await page.click('a.list-group-item[onclick="byCat(\'phone\')"]');

})