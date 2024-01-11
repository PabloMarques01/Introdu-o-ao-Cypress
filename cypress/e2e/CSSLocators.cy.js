describe("CSSLocators", () => {

    beforeEach( ()=> {
        // Visitar a página
        cy.visit("https://www.saucedemo.com/v1/index.html")
    
        // Preencher o campo Username
        cy.get("input#user-name").type("standard_user")
    
        // Preencher o campo Password
        cy.get("input[placeholder='Password']").type("secret_sauce")
    
        // Clicar no botão Login
        cy.get("input.btn_action").click()

    })

    it("Login Válido", () => {

        // Verificar se estou na página inventory.html
        cy.title().should("equal", "Swag Labs")
        cy.get("div.product_label").contains("Products")
    })
    it("XPath", () => {
         // Adicionar item ao carrinho
         cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()
         cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').contains("REMOVE")
    })
})