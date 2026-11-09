import { Page, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private userInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';

  constructor(page: Page) {
    this.page = page;
  }

  async acessar() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async preencherLogin(usuario: string, senha: string) {
    await this.page.fill(this.userInput, usuario);
    await this.page.fill(this.passwordInput, senha);
  }

  async clicarEmLogin() {
    await this.page.click(this.loginButton);
  }

  async validarLoginComSucesso() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  }
}