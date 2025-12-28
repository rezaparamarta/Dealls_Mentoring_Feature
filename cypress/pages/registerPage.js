class RegisterPage {
  openRegisterPage() {
    cy.xpath('//a[@id="dealls-navbar-register-btn"]').click()
  }

  selectRegisterMethod() {
    cy.xpath(
      '//button[@class="flex items-center gap-3 rounded-lg border p-3 transition-all border-tertiary-violet-50 bg-[#F4F2FF]"]'
    ).click()
  }

  continueRegistration() {
    cy.xpath('//button[normalize-space()="Continue"]').click()
  }

  fillFullName(name) {
    cy.xpath("//input[@id='fullName']").type(name)
  }

  fillWhatsApp(number) {
    cy.xpath("//input[@id='waNumber']").type(number)
  }

  fillEmail(email) {
    cy.xpath("//input[@id='email']").type(email)
    cy.xpath("//input[@id='confirmEmail']").type(email)
  }

  fillPassword(password) {
    cy.xpath("//input[@id='password']").type(password)
  }

  acceptPrivacyPolicy() {
    cy.xpath("//input[@id='checkPrivacyPolicy']").check({ force: true })
  }

  submitRegistration() {
    cy.xpath("//button[@type='submit']").click()
  }
}

export default RegisterPage
