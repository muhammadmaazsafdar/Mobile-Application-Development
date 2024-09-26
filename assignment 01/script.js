class ShoppingCart {
    constructor() {
      this.cart = [];
    }
  
    // 1. Add Items to the Cart
    addItem(productId, productName, quantity, price) {
      const product = { productId, productName, quantity, price };
      this.cart.push(product);
    }
  
    // 2. Remove and Update Items
    removeItem(productId) {
      const index = this.cart.findIndex((product) => product.productId === productId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  
    updateQuantity(productId, newQuantity) {
      const product = this.cart.find((product) => product.productId === productId);
      if (product) {
        product.quantity = newQuantity;
      }
    }
  
    // 3. Calculate Total Cost
    calculateTotalCost() {
      return this.cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    }
  
    // 4. Display Cart Summary
    getCartSummary() {
      const summary = this.cart
        .filter((product) => product.quantity > 0)
        .map((product) => ({
          productName: product.productName,
          quantity: product.quantity,
          totalPrice: product.price * product.quantity,
        }));
      return summary;
    }
  
    // 5. Bonus (Optional): Apply Discount Code
    applyDiscountCode(discountCode) {
      const discountAmount = this.getDiscountAmount(discountCode);
      return this.calculateTotalCost() - discountAmount;
    }
  
    getDiscountAmount(discountCode) {
      // implement logic to retrieve discount amount based on discount code
      // for example:
      const discounts = {
        "SUMMER10": 10,
        "WINTER20": 20,
      };
      return discounts[discountCode] || 0;
    }
  }
  
  // Create a new shopping cart instance
  const cart = new ShoppingCart();
  
  // Add items to the cart
  cart.addItem(1, "Product A", 2, 10.99);
  cart.addItem(2, "Product B", 3, 9.99);
  cart.addItem(3, "Product C", 1, 19.99);
  
  // Display cart summary
  console.log("Initial Cart Summary:");
  console.log(cart.getCartSummary());
  
  // Update quantity of an item
  cart.updateQuantity(2, 2);
  
  // Display updated cart summary
  console.log("Updated Cart Summary:");
  console.log(cart.getCartSummary());
  
  // Calculate total cost
  console.log("Total Cost: $" + cart.calculateTotalCost());
  
  // Apply discount code
  console.log("Total Cost with Discount (SUMMER10): $" + cart.applyDiscountCode("SUMMER10"));
  
  // Remove an item from the cart
  cart.removeItem(3);
  
  // Display updated cart summary
  console.log("Updated Cart Summary after removing an item:");
  console.log(cart.getCartSummary());