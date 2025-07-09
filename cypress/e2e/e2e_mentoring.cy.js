describe(`access mentoring's feature`, () => {
    beforeEach(() => {
        Cypress.session.clearAllSavedSessions()
        cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/en');
        cy.contains('Mentoring').click();
    });

    it(`choose a mentor`, () => {
        cy.xpath(`//h4[normalize-space()='Cika']`).click({multiple: true});
        cy.wait(1000);
        cy.xpath(`//button[@type="button"]`).click({multiple: true});
        cy.wait(6000);
        cy.xpath(`//button[contains(text(),'Propose A Schedule')]`).should('be.visible').click();

        

    });
})