import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  private page: Page;
  private firstNameInput = '#first-name';
  private lastNameInput = '#last-name';
  private postalCodeInput = '#postal-code';
  private continueButton = '#continue';
  private finishButton = '#finish';
  private completeHeader = '.complete-header';

  constructor(page: Page) {
    this.page = page;
  }

  async preencherDadosEnvio(nome: string, sobrenome: string, cep: string) {
    await this.page.fill(this.firstNameInput, nome);
    await this.page.fill(this.lastNameInput, sobrenome);
    await this.page.fill(this.postalCodeInput, cep);
    await this.page.click(this.continueButton);
  }

  async finalizarCompra() {
    await this.page.click(this.finishButton);
  }

  async validarPedidoConcluido() {
    await expect(this.page.locator(this.completeHeader)).toHaveText('Thank you for your order!');
  }
}