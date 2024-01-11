describe("Assertions" , () => {

    beforeEach( () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
    it("Assertions Implícitas" ,() => {

        // Should, and
        //cy.url().should("include", "orangehrmlive")
        //cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //cy.url().should("contain", "opensource")

        /*
        cy.url().should("include", "orangehrmlive")
        .should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .should("contain", "opensource")
        */

        // URL
        cy.url().should("include", "orangehrmlive")
        .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and("contain", "opensource")
        .and("not.contain", "bug")

        // Title
        cy.title().should("include", "Orange")
        .and("eq", "OrangeHRM")
        .and("contain", "HRM")

        //Logo
        cy.get('.orangehrm-login-logo > img').should("be.visible")
        .and("exist")

        // Verificar se o valor está a ser passado corretamente
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("[placeholder=Username]").should("have.value","Admin")
    })
    it("Assertions explícitas", () => {
        cy.get("[placeholder='Username']").type("Admin")
        cy.get("[placeholder='Password']").type("admin123")
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

        let expName = "Anusha Sivanandan"

        cy.get(".oxd-userdropdown-tab").then( (x) => {
            let actName = x.text()
            //BDD - Behavior Driven Development
            expect(actName).to.equal(expName)

            //TDD- Test Driven Development
            assert.equal(actName, expName)
        })
    })
})