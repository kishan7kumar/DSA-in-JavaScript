/* 
    Hash Table
    - Used to store key-value pairs
    - Can find values quickly given a key
    - They are like arrays, but the keys are not ordered
    - Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!
    - Collision in hash table are inevitable 
    - To implement a hash table, we'll be using an array
      - to look up values by key, we need a way to convert keys into valid array indices
      - a function that performs this task is called a hash function
    
    - What makes a good hash function?
     - Fast (i.e. constant time)
     - Doesn't cluster outputs at specific indices, but distributes uniformly
     - Deterministic (same input yields same output)

    Examples:-
    1. Python has Dictionaries
    2. JS has Objects and Maps
    3. Java, Go, & Scala have Maps
    4. Ruby has...Hashes

    Time Complexity:-
    1. Insertion - O(1)
    2. Deletion - O(1)
    3. Access - O(1) Everything depends on hash function if it is good i.e. if evenly distributes the elements in the array then it is O(1) else it is O(n)

*/

/*  Simple Hash Example for strings*/
/* Some Problems:
   1. Only has strings
   2. Not constant time - linear in key length
   3. could be a little more random
*/
function hash(key, arrayLen) {
  let total = 0;
  /* Not a constant time O(n) */
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

/* use of prime number is to spread and avoid collisions */
function hashUpdated(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  /* Constant time O(1) */
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

// console.log("\n\n -----  hashUpdated  ----- \n", hashUpdated("pink", 10));
// console.log("\n\n -----  hashUpdated  ----- \n", hashUpdated("mad", 10));
// console.log("\n\n -----  hashUpdated  ----- \n", hashUpdated("dam", 10));

/* DEALING WITH COLLISIONS
   1. SEPARATE CHAINING
   2. LINEAR PROBING
   3. QUADRATIC PROBING
*/

/* 1. SEPARATE CHAINING 
      With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
      This allows us to store multiple key-value pairs at the same index.
    
*/
// TODO: LINEAR PROBING
/* 2.  LINEAR PROBING
      With linear probing, when we find a collision, we search through the array to find the next empty slot.
      Unlike with separate chaining, this allows us to store a single key-value at each index.
    ]
      To search value back we go to the index and check if the key is same if not we move to the next index and check if the key is same if not we move to the next index and so on.
     
*/


/* -------------------------------------------------------------------------- */
/*                Separate Chaining Implementation of Hash Table               */
/* -------------------------------------------------------------------------- */
class HashTable {
  constructor(size = 3) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    /* if there is nothing in that position */
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  get(key) {
    let index = this._hash(key);
    let chainArray = this.keyMap[index];
    if (chainArray) {
      for (let i = 0; i < chainArray.length; i++) {
        if (chainArray[i][0] === key) {
          return chainArray[i][1];
        }
      }
    }
    return undefined;
  }

  getKeys() {
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          /* Removes multiples same key */
          if (!keysArray.includes(this.keyMap[i][j][0]))
            keysArray.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArray;
  }

  getValues() {
    let valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          /* Removes multiples same values */
          if (!valuesArray.includes(this.keyMap[i][j][1]))
            valuesArray.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArray;
  }
}

let hashTable = new HashTable();
hashTable.set("pink", "#34sd3f");
hashTable.set("red", "#34sd3f");
hashTable.set("black", "#00d3f");
console.log("\n\n -----  hashTable  ----- \n", hashTable.keyMap);
console.log(
  "\n\n -----  hashTable Get Black  ----- \n",
  hashTable.get("black")
);
console.log("\n\n -----  hashTable.getKeys()  ----- \n", hashTable.getKeys());
console.log("\n\n -----  hashTable.getKeys()  ----- \n", hashTable.getValues());
