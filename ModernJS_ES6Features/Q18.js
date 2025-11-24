// a)
20 
// ReferenceError: x is not defined

// b)
console.log(profile.user?.details?.email);
console.log(profile.user?.details?.phone);

// c)
const product = {};
console.log(product.specs?.size); // undefined (runtime error prevented)
