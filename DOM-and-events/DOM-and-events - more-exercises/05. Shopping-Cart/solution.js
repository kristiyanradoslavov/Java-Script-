function solve() {
   const addBtn = Array.from(document.getElementsByClassName("add-product"));
   const textArea = document.getElementsByTagName("textarea")[0];
   const checkOutBtn = document.getElementsByClassName("checkout")[0];

   let products = {
      allProducts: [],
      totalPrice: 0,
   };

   checkOutBtn.addEventListener("click", checkOutHandler)

   for (const currentBtn of addBtn) {
      currentBtn.addEventListener("click", addHandler);
   }

   function addHandler() {
      const mainParent = this.parentNode.parentNode;
      const name = mainParent.querySelector(":nth-child(2)>div.product-title");
      const price = Number(mainParent.querySelector(":nth-child(4)").textContent);
      if (!products.allProducts.includes(name.textContent)) {
         products.allProducts.push(name.textContent)
      }
      products.totalPrice += price;
      textArea.value += `Added ${name.textContent} for ${price.toFixed(2)} to the cart.\n`
   }

   function checkOutHandler() {
      textArea.value += `You bought ${products.allProducts.join(", ")} for ${products.totalPrice.toFixed(2)}.`
      checkOutBtn.disabled = true;

      for (const currentBtn of addBtn) {
         currentBtn.disabled = true;
      }
   }
}