// @ts-check
const { test, expect } = require('@playwright/test');

test('assertion dan locator',async ({page})=> {
    await page.goto('https://www.saucedemo.com/');
    
    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    await expect(inputUsername).toHaveValue('standard_user');

    const inputPassword = page.locator('#password');
    await inputPassword.fill('secret_sauce');
    await expect(inputPassword).toHaveValue('secret_sauce');

    const buttonLogin = page.locator('#login-button');
    await buttonLogin.click('#login-button');

    const buttonAddToCart = page.locator('#add-to-cart-sauce-labs-backpack');
    await buttonAddToCart.click('#add-to-cart-sauce-labs-backpack');

    const buttonCart = page.locator('#shopping_cart_container');
    await buttonCart.click('#shopping_cart_container');
    
    const buttonCheckout = page.locator('#checkout');
    await buttonCheckout.click('#checkout');

    const inputFirstName = page.locator('#first-name');
    await inputFirstName.fill('Adhi');
    await expect(inputFirstName).toHaveValue('Adhi');

    const inputLastName = page.locator('#last-name');
    await inputLastName.fill('Satya');  
    await expect(inputLastName).toHaveValue('Satya');

    const inputPostalCode = page.locator('#postal-code');
    await inputPostalCode.fill('12345');
    await expect(inputPostalCode).toHaveValue('12345');

    const buttonContinue = page.locator('#continue');
    await buttonContinue.click('#continue');
    
    const buttonFinish = page.locator('#finish');
    await buttonFinish.click('#finish');

    const buttonBackToProducts = page.locator('#back-to-products');
    await buttonBackToProducts.click('#back-to-products');

});
    