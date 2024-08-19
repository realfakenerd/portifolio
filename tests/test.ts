import { test, expect } from '@playwright/test';

test('Página Inicial - Testes de Animação e Elementos', async ({ page }) => {
  await page.goto('/'); 

  // 1. Teste de Título (Webdev):
  const webdevTitle = page.locator('h1');
  await expect(webdevTitle).toBeVisible();
  // Verifica se cada letra aparece na ordem correta
  const letters = webdevTitle.locator('.letter');
  const letterCount = await letters.count(); 
  for (let i = 0; i < letterCount; i++) {
    await expect(letters.nth(i)).toHaveText(String.fromCharCode(87 + i));
    await expect(letters.nth(i)).toBeVisible(); 
  }

  // 2. Teste dos Boxes (DYNAMICSA):
  const boxes = page.locator('.box');
  await expect(boxes).toBeVisible(); 

  // Verificar se a quantidade de boxes está correta
  await expect(boxes).toHaveCount(5);

  // Verifica se cada box contém as letras corretas 
  // (adapte as letras para o conteúdo da sua página)
  const expectedLetters = [
    ['M', 'L'],
    ['Y', 'N', 'U'],
    ['A', 'I', 'C'],
    ['M', 'S', 'A'],
    ['E', 'S'],
  ];
  for (let i = 0; i < 5; i++) {
    const boxSpans = boxes.nth(i).locator('span');
    const spanCount = await boxSpans.count();
    for (let j = 0; j < spanCount; j++) {
      await expect(boxSpans.nth(j)).toHaveText(expectedLetters[i][j] || ''); // Lidando com spans vazios
    }
  }

  // 3. Teste das Animações (após um tempo):
  // Aguarde um tempo para as animações serem executadas
  await page.waitForTimeout(2000); 

  // Verifique se os boxes estão na posição final (transformação)
  for (let i = 0; i < 5; i++) {
    await expect(boxes.nth(i)).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
  }

  // Verifique a opacidade final dos elementos
  await expect(letters).toHaveCSS('opacity', '1');
  await expect(boxes).toHaveCSS('opacity', '1');
  await expect(boxes.locator('span')).toHaveCSS('opacity', '1'); 
});