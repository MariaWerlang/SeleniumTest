const { Builder, By, Key, until } = require('selenium-webdriver');

// Função assíncrona para usar o Selenium
async function openWebPage() {
  // Crie uma instância do WebDriver
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navegue até a página desejada
    await driver.get('https://github.com/MariaWerlang');

    // Aguarde até que o título da página seja carregado (pode ser ajustado conforme necessário)
    await driver.wait(until.titleIs('Título da Página'), 5000);

    console.log('Página aberta com sucesso!');
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  } finally {
    // Feche o navegador, independentemente do resultado
    await driver.quit();
  }
}

// Chame a função para abrir a página
openWebPage();
