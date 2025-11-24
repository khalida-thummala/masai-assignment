function processProducts(products) {
  
  const names = products.map(product => product.name);
  console.log(names); // optional, if needed

  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });
}


const input = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(input);
