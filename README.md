# 🚀 Automação de Testes E2E e API - Playwright & TypeScript

Projeto de automação de testes desenvolvido para validar fluxos de interface (E2E) e testes de contrato/serviço (API), utilizando **Playwright** com **TypeScript** e aplicando o design pattern **Page Object Model (POM)**.

---

## 🛠️ Tecnologias Utilizadas

* **[Playwright](https://playwright.dev/)** - Framework moderno de automação de testes web e API.
* **TypeScript** - Superset do JavaScript garantindo tipagem estática e maior robustez.
* **Node.js** - Ambiente de execução JavaScript.
* **GitHub Actions** - Pipeline de Integração Contínua (CI/CD).

---

## 📂 Estrutura do Projeto

```text
automacao-qa-playwright-saucedemo/
├── .github/
│   └── workflows/
│       └── playwright.yml      # Pipeline de CI/CD (GitHub Actions)
├── pages/                      # Page Objects (Padrão POM)
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/
│   ├── api/                    # Testes de API (JSONPlaceholder)
│   │   └── usuarios.spec.ts
│   └── saucedemo-fluxo.spec.ts # Testes E2E do SauceDemo
├── playwright.config.ts        # Configurações globais do Playwright
├── package.json                # Dependências e scripts do projeto
└── README.md
