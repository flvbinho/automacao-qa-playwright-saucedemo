import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Fluxo de compra completo no SauceDemo com Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1 & 2. Acessar e Logar
  await loginPage.acessar();
  await loginPage.preencherLogin('standard_user', 'secret_sauce');
  await loginPage.clicarEmLogin();
  await loginPage.validarLoginComSucesso();

  // 3 & 4. Adicionar produto e ir ao carrinho
  await inventoryPage.adicionarMochilaAoCarrinho();
  await inventoryPage.irParaCarrinho();
  await cartPage.validarProdutoNoCarrinho('Sauce Labs Backpack');

  // 5, 6 & 7. Checkout e Finalização
  await cartPage.prosseguirParaCheckout();
  await checkoutPage.preencherDadosEnvio('Flávio', 'Martins', '06000-000');
  await checkoutPage.finalizarCompra();
  await checkoutPage.validarPedidoConcluido();
});