import { generateUniqueID } from './index.js';
import { addAccount } from './index.js';

console.log(generateUniqueID("Alan", "Turing"));        // aturing<uuid>
console.log(generateUniqueID("Tim", "Berners-Lee"));    // tbernerslee<uuid>
console.log(generateUniqueID("Grace", "Hopper"));       // ghopper<uuid>

addAccount(["Alan", "Turing", "aturing@w3c.com", 25]);
addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 30]);
addAccount(["Grace", "Hopper", "ghopper@def.gov", 40]);