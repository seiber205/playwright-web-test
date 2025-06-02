import { test, expect } from '@playwright/test';
test('kiểm tra chi tiết sản phẩm', async ({ page }) => {
await page.goto('https://www.demoblaze.com/')
await page.click('a.hrefch:text("Samsung galaxy s6")');
await page.waitForSelector('.name')

await expect(page.locator('img[src="imgs/galaxy_s6.jpg"]')).toBeVisible();
console.log('Có ảnh sản phẩm')
await expect (page.locator('.name')).toHaveText("Samsung galaxy s6")
console.log('Có tên sản phẩm')
await expect (page.locator('.price-container')).toBeVisible
console.log('Có giá sản phẩm')
await expect (page.locator(' #more-information')).toBeVisible
console.log('Có thông tin sản phẩm')

})
