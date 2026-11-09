import { Page } from '@playwright/test';

export class InventoryPage {
  private page: Page;
  private backpackAddButton = '#add-to-cart-sauce-labs-backpack';
  private cartIcon = '.shopping_cart_link';

  constructor(page: Page) {
    this.page = page;
  }

  async adicionarMochilaAoCarrinho() {
    await this.page.click(this.backpackAddButton);
  }

  async irParaCarrinho() {
    await this.page.click(this.cartIcon);
  }
}