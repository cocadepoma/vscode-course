
//* 
//*     Goal:
//*         Change only the reference from SuperHero to Hero
//*         DO NOT REPLACE THE STRINGS
//* 
//*     Tips:
//*         Replace Symbol
//*         F2
//* 

import { Hero } from "./01-definitions";


const wolverine = new Hero();
const ironman   = new Hero();
const spiderman = new Hero();

function greet() {
  return 'El SuperHero Wolverine es genial!';
}

function shout() {
  return 'El SuperHero en este string no se debe de cambiar';
}


console.log({ wolverine, ironman, spiderman, greet: greet(), shout: shout() });