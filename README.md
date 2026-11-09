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
```

---

## ⚙️ Pré-requisitos e Instalação (Passo a Passo)

Certifique-se de ter instalado em sua máquina o [Node.js](https://nodejs.org/) (versão LTS recomendada) e o Git. Em seguida, abra o terminal na pasta desejada e siga os comandos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/flvbinho/automacao-qa-playwright-saucedemo.git](https://github.com/flvbinho/automacao-qa-playwright-saucedemo.git)
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd automacao-qa-playwright-saucedemo
   ```

3. **Instale as dependências do Node:**
   ```bash
   npm install
   ```

4. **Instale os navegadores do Playwright:**
   ```bash
   npx playwright install
   ```

---

## 🧪 Como Executar os Testes Passo a Passo

Com o ambiente configurado, execute os testes utilizando os seguintes comandos no terminal:

* **Executar todos os testes (E2E e API) em modo headless (padrão):**
  ```bash
  npx playwright test
  ```

* **Executar apenas os testes E2E do SauceDemo (no navegador Chromium):**
  ```bash
  npx playwright test saucedemo-fluxo.spec.ts --project=chromium
  ```

* **Executar apenas os testes de API:**
  ```bash
  npx playwright test tests/api/usuarios.spec.ts
  ```

* **Executar os testes em modo visual interativo (UI Mode - excelente para depuração):**
  ```bash
  npx playwright test --ui
  ```

* **Visualizar o relatório detalhado da última execução em HTML:**
  ```bash
  npx playwright show-report
  ```

---

## 🤖 CI/CD (GitHub Actions)

O projeto possui integração contínua configurada na pasta `.github/workflows/playwright.yml`. Toda vez que um `git push` é realizado na branch principal (`main`), o GitHub Actions executa automaticamente toda a suíte de testes em um ambiente isolado na nuvem.

---

## 👨‍💻 Autor
**Flávio Ferreira Martins**  
*QA Analyst*
