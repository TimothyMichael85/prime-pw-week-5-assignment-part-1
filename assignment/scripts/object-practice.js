console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Tim ',
  lastName: 'Anderson',
  hasSiblings: true,
  shoeCount: 15,
  favThreeNoms: ['pizza', 'pasta', 'steak']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + me.lastName;
console.log ('My full name is ', fullName);



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log ('My most favorite nom is', me.favThreeNoms[0]);
console.log ('but I also really like to nom on', me.favThreeNoms[me.favThreeNoms.length -1]);



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('I have', me.shoeCount, 'pairs of shoes');

me.shoeCount = me.shoeCount +1;
console.log('I bought a new pair of shoes, so now I have', me.shoeCount, 'pairs of shoes');

me.shoeCount = me.shoeCount -1;
console.log('My partner will not allow me to own another pair of Crocs, so I guess it is back to', me.shoeCount, 'pairs of shoes for me');


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'green';
console.log( 'My favorite color is', me.favoriteColor);

console.log(me) //check to verify favoriteColor stayed in object. It did!