
/**
  * Tips: Shift + Alt + A
  *  Toggle block comment
  */

//  Final example
const fruitsComment = ['banana', 'pear', /* 'orange' */, 'strawberry'];

// Goal: comment the 'orange' string as the previous example
const fruitsExercise = ['banana', 'pear', 'orange', 'strawberry'];

//  Final example
const doSomethingComment = (isLoading: boolean, fruits: string[]) => {
  if(isLoading /* && fruits.length === 0 */) return;

  return fruits.map((fruit) => fruit.toUpperCase());
};

// Goal: comment the 'orange' string as the previous example
const doSomething = (isLoading: boolean, fruits: string[]) => {
  if(isLoading && fruits.length === 0) return;

  return fruits.map((fruit) => fruit.toUpperCase());
};