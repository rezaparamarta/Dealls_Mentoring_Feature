require('cypress-xpath');
import RegisterPage from '../pages/registerPage';

Cypress.Commands.add('login', (email, password) => {
  cy.get('#dealls-navbar-login-btn').click();
  cy.get('#basic_email').type(email);
  cy.get('#basic_password').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('register', (user) => {
  const registerPage = new RegisterPage();
  registerPage.openRegisterPage();
  registerPage.selectRegisterMethod();
  registerPage.continueRegistration();
  registerPage.fillFullName(user.fullName);
  registerPage.fillWhatsApp(user.waNumber);
  registerPage.fillEmail(user.email);
  registerPage.fillPassword(user.password);
  registerPage.acceptPrivacyPolicy();
  registerPage.submitRegistration();
});

