describe('Verify functions', () => {
    beforeEach(() => {
      // Clear local storage to reset state between tests
      cy.clearLocalStorage();
  
      // Clear session storage manually using cy.window()
      cy.window().then((win) => {
        win.sessionStorage.clear();  // Clears session storage
      });
  
      // Reload the page to ensure clean state
      cy.reload();
  
      
    });
  
    it("Verify selected item added to the cart and apply coupon", () => {
      cy.visit("http://localhost:3000/login");
  
      // Login to the user home page
      cy.get(':nth-child(2) > input').type("bandaranayake@gmail.com");
      cy.get(':nth-child(3) > input').type("Bandaranayake");
      cy.get('.btn').click();
  

  
     
      // Add the item to the cart
      cy.wait(3000);
      cy.get(':nth-child(1) > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="8"]').click();
     
      cy.get('[style="cursor: pointer; height: 35px; width: 35px; border-radius: 100%; background-color: rgb(48, 63, 159); box-shadow: none; border: none;"]').click();
      cy.get('.size-list-container > .list-block > :nth-child(2)').click();
      cy.get('.col-9 > .w-100').click();
  
      // Go to cart
      cy.get('.badge-num').click();
  
      // Apply coupon
      cy.get('input[placeholder="Enter A Product Id"]').type("65eda8e761759b34e53b419e");
      cy.get('input[placeholder="Enter A Coupon Code"]').type("polo5");
      cy.get(':nth-child(1) > .d-flex > .btn').click();
  
      // Assert old subtotal is shown (crossed out)
      cy.get('.bg-light > p').should('contain', 'Cart Subtotal: $ 9');
  
      // Assert new subtotal is shown (after discount)
      cy.get('.bg-light > p').should('contain', 'Cart Subtotal After Discount: $ 8.28');
    });
  });
  
  
      
  