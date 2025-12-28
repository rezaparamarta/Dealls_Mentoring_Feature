describe('Mentoring Feature', () => {
    // This function generate a random string for unique user data registration
    function randomString(length = 8) {
      const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    }
    // This loop hooks before each test case to visit the base URL
  beforeEach(() => {
    cy.visit('/');
  });
  // Test case for user registration
  it('User create new account', () => {
    const randomPart = randomString();
    const timestamp  = Date.now();
    const user = {
      fullName: `Reza_test_${randomPart}`,
      email: `reza.test${randomPart}${timestamp}@gmail.com`,
      waNumber: `628${Math.floor(100000000 + Math.random() * 900000000)}`,
      password: 'Reza12345!',
    };
    // Use custom command to register user
    cy.register(user);
    // Assert registration success by checking for download button visibility
    cy.xpath("//button[normalize-space()='Unduh Sekarang']").should('be.visible');
  });
    // Test case for user login and mentoring feature  
  it('User can login, search mentor, and open mentor detail', () => {
    // Login using custom command
    cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    // Assert login success (mentoring menu visible)
    cy.get(
      'li[id="navigation-item-mentoring"] a[class="inline-block py-1 text-xs !font-semibold text-white !decoration-2 !underline-offset-4 hover:!text-gray-200 hover:underline"]'
    )
      .contains('Mentoring')
      .should('be.visible');
    cy.contains('Mentoring').click();
    // Search for a mentor
    cy.get('#searchMentor').type('QA Engineer');
    // Assert search results
    cy.contains('QA Software Engineer').click();
    // Assert mentor detail page
    cy.contains('About').should('be.visible');
  });
});
