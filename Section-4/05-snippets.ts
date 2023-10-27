
/**
* !Tips:  Crtl + Shift + P
* !       User snippets
*/

const debugMe = 'my value';

//  Goal: Create a snippet to create the next line
console.log('debugMe', debugMe);

//  Goal: Create a snippet to create the next line
const filterByDate = () => {
  console.log('filterByDate');
};

//  Goal: Create a snippet to create the next line
const getProducts = async () => {
  await new Promise(resolve => setTimeout(resolve, 400))
  console.log('getProducts');
};
