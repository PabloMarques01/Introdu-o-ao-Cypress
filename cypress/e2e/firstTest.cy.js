describe('Verificação de Título de Página', () => {
  it('TC1 - Verificar o título da página', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should("equal", "OrangeHRM")
  })
  it('TC2 - Verificar o título da página', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should("equal", "OrangeHRM123")
  })
})