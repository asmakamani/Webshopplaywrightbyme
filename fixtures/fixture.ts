import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { registerHooks } from '../utils/Hooks';

type MyFixtures = {

    loginPage: LoginPage;

};
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
     
    await use(loginPage);
  
  }
});
registerHooks();
export { expect } from '@playwright/test';