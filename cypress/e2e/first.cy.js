describe('Header Text', function() {
    
    it('Anasayfadaki Button tıklanabiliyor', function () {
        cy.visit("/")
       const aciktimButton = cy.get("[data-cy=im-hungry]")
      /* const sizeCheck = cy.get("[data-cy=small-size]")
       const dimensionCheck = cy.get("[data-cy=dimension-change]")
       const specialText = cy.get("[data-cy=special")
       const nameText = cy.get("[data-cy=name")
       const addressText = cy.get("[data-cy=address")
       const submit =cy.get("[data-cy=submit-order")
*/
       aciktimButton.click()
       cy.contains("Boyut")
    })

it('Form düzgün çalışıyor', function () {
    cy.visit("/pizza")
  
   const sizeCheck = cy.get("[data-cy=small-size]")
   const dimensionCheck = cy.get('#size-dropdown')
   const specialText = cy.get("[data-cy=special]")
   const nameText = cy.get("[data-cy=name]")
   const addressText = cy.get("[data-cy=address]")
   const submit =cy.get("[data-cy=submit-order]")

 sizeCheck.check()
 dimensionCheck.select("Orta")
 specialText.type("something")
 nameText.type("something")
 addressText.type("something")
submit.click()
cy.contains("SİPARİŞ ALINDI")
})
it('Count elementi düzgün çalışıyor', function () {
    cy.visit("/pizza")
    const higher = cy.get('#higher')
    higher.click()
    higher.click()
    cy.contains(259.5)
})

})

