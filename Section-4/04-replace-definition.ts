
//* 
//*     Goal:
//*         Change only the reference from SuperHero to Hero
//*         DO NOT REPLACE THE STRINGS
//* 
//*     Tips:
//*         Replace Symbol
//*         F2
//* 

import { SuperHero } from "./01-definitions";


const wolverine = new SuperHero();
const ironman   = new SuperHero();
const spiderman = new SuperHero();

function greet() {
  return 'El SuperHero Wolverine es genial!';
}

function shout() {
  return 'El SuperHero en este string no se debe de cambiar';
}


console.log({ wolverine, ironman, spiderman, greet: greet(), shout: shout() });