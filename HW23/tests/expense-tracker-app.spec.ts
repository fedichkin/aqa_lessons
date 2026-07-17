import { test, expect } from '@playwright/test';

test.describe('Expense Tracker App', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should display the correct title and init values', async ({ page }) => {
        await test.step('Check the title', async () => {
            expect(await page.locator('h2').textContent()).toBe('Expense Tracker App');
        });

        await test.step('Check the initial balance', async () => {
            expect(await page.locator('#balance').textContent()).toBe('$0.00');
        });

        await test.step('Check the initial income', async () => {
            expect(await page.locator('.money.plus').textContent()).toBe('0.00');
        });

        await test.step('Check the initial expense', async () => {
            expect(await page.locator('.money.minus').textContent()).toBe('0.00');
        });
    });

    test('should be positive balance after adding income', async ({ page }) => {
        await test.step('Check the initial balance', async () => {
            expect(await page.locator('#balance').textContent()).toBe('$0.00');
        });

        await test.step('Add transaction with income', async () => {
            await page.locator('#description').fill('Salary');
            await page.locator('#transactionamount').fill('1000');
            await page.locator('.btn').click();
        });

        await test.step('Check the balance after adding income', async () => {
            expect(await page.locator('#balance').textContent()).toBe('$1000.00');
        });
    });

    test('should be negative balance after adding expenses', async ({ page }) => {
        await test.step('Check the initial balance', async () => {
            expect(await page.locator('#balance').textContent()).toBe('$0.00');
        });

        await test.step('Add transaction with expense', async () => {
            await page.locator('#description').fill('Apartment rental');
            await page.locator('#transactionamount').fill('-500');
            await page.locator('.btn').click();
        });

        await test.step('Check the balance after adding expense', async () => {
            expect(await page.locator('#balance').textContent()).toBe('$-500.00');
        });
    });
});
