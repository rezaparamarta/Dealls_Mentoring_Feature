require('cypress-xpath');
Cypress.Commands.add('login', (email, password) => {
  cy.get('#dealls-navbar-login-btn').click();
  cy.get('#basic_email').type(email);
  cy.get('#basic_password').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('register', (user) => {
  cy.xpath('//a[@id="dealls-navbar-register-btn"]').click();
  cy.xpath(
    '//button[@class="flex items-center gap-3 rounded-lg border p-3 transition-all border-tertiary-violet-50 bg-[#F4F2FF]"]'
  ).click();
  cy.xpath('//button[normalize-space()="Continue"]').click();
  cy.xpath("//input[@id='fullName']").type(user.fullName);
  cy.xpath("//input[@id='waNumber']").type(user.waNumber);
  cy.xpath("//input[@id='email']").type(user.email);
  cy.xpath("//input[@id='confirmEmail']").type(user.email);
  cy.xpath("//input[@id='password']").type(user.password);
  cy.xpath("//input[@id='checkPrivacyPolicy']").check({ force: true });
  cy.xpath("//button[@type='submit']").click();
});

