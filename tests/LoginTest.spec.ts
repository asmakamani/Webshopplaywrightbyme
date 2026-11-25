//import { test, expect } from '@playwright/test';
import { FramworkConstants } from '../constants/Constants';
import { test, expect } from '../fixtures/fixture';
import { ExcelReader } from '../utils/ExcelReader';
//hard coded the test data for now but later we will pass it from constants file
//const data= ExcelReader.readExcelFile('./test-data/LoginTestData.xlsx', 'LoginData');
//now we will pass the test data file path and sheet name from the constants file
const data= ExcelReader.readExcelFile(`${FramworkConstants.TESTDATA_Folder}/${FramworkConstants.Excel_files.LoginTestData}`, `${FramworkConstants.Sheet_names.LoginSheet}`);
data.shift();

/*test('Verify Login Functionality', async ({ loginPage }) => {

await page.getByText("Log in").click()
await page.getByLabel("Email:").fill("111Test@test.com")
await page.getByLabel("Password:").fill("111Test@test")
await page.getByRole("button",{name:'Log in'}).click()
//if the logout button is present the test is marked as passed otherwise fail
await expect(page.getByLabel("Log out")).toBeVisible();

//No need to create the object of the page class as we have already created it in the fixture file and passed it to the test function as a parameter
//const loginPage = new LoginPage(page);
await loginPage.navigateToLoginPage();
await loginPage.enterLoginCredentials("111Test@test.com", "111Test@test");
await loginPage.verifyLogoutButtonIsVisible();
});*/

test.describe('Login Functionality', () => {
    data.forEach(([name, email, password], index) => {
        test(`Verify Login Functionality ${index + 1} - ${name}`, async ({ loginPage }) => {
            await loginPage.navigateToLoginPage();
            await loginPage.enterLoginCredentials(String(email ?? ''), String(password ?? ''));
            switch (String(name ?? '').toLowerCase()) {
            case "valid standard user":
             await loginPage.verifyLoginOutcome("valid standard user")
             break;
            case "wrong username":
             await loginPage.verifyLoginOutcome("wrong username")
             break;

            case "empty username":
               await loginPage.verifyLoginOutcome("empty username")
               break;

            case "empty password":
                  await loginPage.verifyLoginOutcome("empty password")
                break;

            
        }
        });
    });
    test("  Verify Remember Me Functionality", async ({ loginPage }) => {
            
    });
});