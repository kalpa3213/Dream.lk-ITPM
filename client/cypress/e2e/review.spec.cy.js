describe('Review Submission Flow with Validations', () => {
    const email = 'bandaranayake@gmail.com';
    const password = 'Bandaranayake';
    const productUrl = '/products/65fabb36683fee8c4ed03c52';
  
    before(() => {
      // Login once before all tests
      cy.visit('http://localhost:3000/login');
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type(password);
      cy.get('form').submit();
      cy.url().should('eq', 'http://localhost:3000/');
    });
  
    it('should test validation and successful review in sequence', () => {
      cy.visit(`http://localhost:3000${productUrl}`);
      cy.contains('Reviews').scrollIntoView().click();
  
    // Comment missing
      cy.get('textarea').clear().type('Only comment, no rating');
      cy.contains('button', 'Submit').click();
      cy.contains('Please enter a review text and rating').should('exist');
  
     // Rating missing 
      cy.get('.add-review-form svg').eq(4).click(); // 5 stars
      cy.get('textarea').clear(); // Remove text
      cy.contains('button', 'Submit').click();
      cy.contains('Please enter a review text and rating').should('exist');
  
      // Successful submission
      cy.get('.add-review-form svg').eq(4).click(); // 5 stars
      cy.get('textarea').type('Stylish, comfy, and perfect for any occasion,just runs a bit small! 🧥👌✨');
      cy.contains('button', 'Submit').click();
      cy.contains('Review Added Successfully', { timeout: 5000 }).should('exist');
      cy.contains('Stylish, comfy, and perfect for any occasion,just runs a bit small! 🧥👌✨').should('exist');
    });
  });
  