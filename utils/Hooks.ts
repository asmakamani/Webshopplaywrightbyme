import { test } from "@playwright/test";
import * as allure from 'allure-js-commons';
export function registerHooks() {
    test.beforeEach(async ({ page }) => {
        console.log("Before each test hook executed");
        // Setup code before each test
        await page.goto('/');
    });
    test.afterEach(async ({ page }) => {
        console.log("After each test hook executed");
        // Teardown code after each test
        if(test.info().status!='passed'){
           
            const screenshot = await page.screenshot({ fullPage: true });
             await page.screenshot({ path: `screenshots/${test.info().title}.png` });
             //attach the screenshot to the allure report
              await allure.attachment(`Failure - ${test.info().title}`, screenshot, {
                contentType: 'image/png',
            });
        }
    });
}