import newLoginLocator from "../locator/newLoginLocator";
import { expect, Page, Locator } from "@playwright/test";

export default class newLoginActions {
    private page: Page;
    private newLoginLocator: newLoginLocator;
    private inputUsername: Locator;
    private inputPassword: Locator;
    private clickLogin: Locator;
    private clickAddToCart: Locator;
    private clickCart: Locator;
    private clickCheckout: Locator;
    private inputFirstName: Locator;
    private inputLastName: Locator;
    private inputPostalCode: Locator;
    private clickContinue: Locator;
    private clickFinish: Locator;
    private clickBackToProducts: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newLoginLocator = new newLoginLocator();
        this.inputUsername = this.page.locator(this.newLoginLocator.inputUsername);
        this.inputPassword = this.page.locator(this.newLoginLocator.inputPassword);
        this.clickLogin = this.page.locator(this.newLoginLocator.buttonLogin);
        this.clickAddToCart = this.page.locator(this.newLoginLocator.buttonAddToCart);
        this.clickCart = this.page.locator(this.newLoginLocator.buttonCart);
        this.clickCheckout = this.page.locator(this.newLoginLocator.buttonCheckout);
        this.inputFirstName = this.page.locator(this.newLoginLocator.inputFirstName);
        this.inputLastName = this.page.locator(this.newLoginLocator.inputLastName);
        this.inputPostalCode = this.page.locator(this.newLoginLocator.inputPostalCode);
        this.clickContinue = this.page.locator(this.newLoginLocator.buttonContinue);
        this.clickFinish = this.page.locator(this.newLoginLocator.buttonFinish);
        this.clickBackToProducts = this.page.locator(this.newLoginLocator.buttonBackToProducts);

    }

    async goto(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async InputLogin(): Promise<void> {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickLogin.click();
    }

    async AddToCart(): Promise<void> {
        await this.clickAddToCart.click();
    }

    async Cart(): Promise<void> {
        await this.clickCart.click();
    }

    async Checkout(): Promise<void> {
        await this.clickCheckout.click();
    }

    async InputInformation(): Promise<void> {
        await this.inputFirstName.fill('Adhi');
        await expect(this.inputFirstName).toHaveValue('Adhi');

        await this.inputLastName.fill('Satya');
        await expect(this.inputLastName).toHaveValue('Satya');
        
        await this.inputPostalCode.fill('12345');
        await expect(this.inputPostalCode).toHaveValue('12345');
    }

    async Continue(): Promise<void> {
        await this.clickContinue.click();
    }

    async Finish(): Promise<void> {
        await this.clickFinish.click();
    }

    async BackToProducts(): Promise<void> {
        await this.clickBackToProducts.click();
    }
}
