    // Simple JavaScript for interactive elements
    document.addEventListener('DOMContentLoaded', function() {
        // Newsletter Form
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
          newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input');
            if (input.value) {
              alert('Thank you for subscribing to our newsletter!');
              input.value = '';
            }
          });
        }
  
        // Quick View Buttons
        const quickViewBtns = document.querySelectorAll('.quick-view-btn');
        quickViewBtns.forEach(btn => {
          btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.closest('.product-card').querySelector('.product-title').textContent;
            alert(`Quick view for ${productName}`);
          });
        });
  
        // Add to Cart Buttons
        const cartBtns = document.querySelectorAll('.cart-icon');
        cartBtns.forEach(btn => {
          btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.closest('.product-card').querySelector('.product-title').textContent;
            alert(`${productName} has been added to your cart.`);
          });
        });
      });