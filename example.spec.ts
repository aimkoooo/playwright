import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

  test ("navigate to my project page", async ({page}) => {
    await page.goto (`https://staging.ensuria.com`);

    await expect(page.getByRole('heading', { name: 'Диджитал-страхування' })).toBeVisible();

    await expect(page.getByRole('link', { name: 'uk', exact:true })).toBeVisible();

    await expect(page.getByRole('link', { name: 'en', exact:true })).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Мамо, ми в інтернеті'})).toBeVisible();

    await page.goto (`https://staging.ensuria.com/travel`);
  }
  )
 // end for test run 1

 test ("navigate to my project travel page", async ({page}) => {
  await page.goto (`https://staging.ensuria.com/travel`);

  await expect(page.getByRole('img', { name: 'Ensuria' })).toBeVisible();

  await expect (page.getByRole (`button`, {name: `Придбати` })).toBeVisible();
 }
 )
 // end for test run 2
 test ("navigate to my project assistance page", async ({page}) => {
  await page.goto (`https://staging.ensuria.com/assistance`);

  await expect(page.getByRole('heading', {name: 'Що робимо інакше' })).toBeVisible();

  await expect(page.getByRole('heading', {name: 'Часті питання' })).toBeVisible();

  await expect(page.getByRole(`button`, {name: `Зв’язатись з нами'`})).toBeVisible();

 }
 )
// end of thest run 3. This are simple test runs `cause of my project is quite simple