// a)
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];

// b)
const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

// c)
const {
  name,
  address: { city, pin }
} = user;
