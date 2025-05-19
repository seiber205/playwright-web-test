import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 300000,
  use: {
    headless: false, // Bật trình duyệt GUI
    screenshot: 'only-on-failure',
    launchOptions: {
      slowMo: 2000 // Chạy chậm 1 giây mỗi thao tác
    },
  },
});
