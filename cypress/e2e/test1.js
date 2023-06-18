
chromeWebSecurity:false,
beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
 });

describe('test log in ', () => {
    it('test login - standard users', () => {
     cy.visit ('https://www.saucedemo.com/')   
     cy.get('[data-test="username"]').type("standard_user")
     cy.get('[data-test="password"]').type("secret_sauce")
     cy.get('[data-test="login-button"]').click ()
      // for (let i =0 ; i < 6 ;i++){
        //cy.get ('#inventory_container')
        cy.contains("Add to cart").click({multiple:true})
     });
    });
    
