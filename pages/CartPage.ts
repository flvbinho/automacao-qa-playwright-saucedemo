import { Page, expect } from '@playwright/test';

export class CartPage {
  private page: Page;
  private cartItemName = '.cart_item .inventory_item_name';
  private checkoutButton = '#checkout';

  constructor(page: Page) {
    this.page = page;
  }

  async validarProdutoNoCarrinho(nomeProduto: string) {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(this.page.locator(this.cartItemName)).toHaveText(nomeProduto);
  }

  async prosseguirParaCheckout() {
    await this.page.click(this.checkoutButton);
  }
}