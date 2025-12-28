class MentoringPage {
  mentoringMenu() {
    return cy.get(
      'li[id="navigation-item-mentoring"] a[class="inline-block py-1 text-xs !font-semibold text-white !decoration-2 !underline-offset-4 hover:!text-gray-200 hover:underline"]'
    )
  }

  openMentoringMenu() {
    this.mentoringMenu()
      .contains('Mentoring')
      .should('be.visible')
      .click()
  }

  searchMentor(keyword) {
    cy.get('#searchMentor').type(keyword)
  }

  openMentorFromResult(mentorTitle) {
    cy.contains(mentorTitle).click()
  }

  mentorDetailShouldBeVisible() {
    cy.contains('About').should('be.visible')
  }
}

export default MentoringPage
