import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import validator from 'validator';

function generateUniqueID(string1, string2) {
    // valdate input paramaters
    if(typeof string1 !== "string" || typeof string2 !== "string") {
        return null;
    }

    let result = "";                        // empty string for the result
    result += string1[0].toLowerCase();     // add lowercased first letter of first string
    result += string2.toLowerCase();        // add lowercased all of the second string
    result += uuidv4();                     // add uniqueID based on the two strings
    result = result.split("-")[0];          // remove everything after first hypen

    return result;
}

function addAccount(userInfo) {
    
}

export { generateUniqueID };
export { addAccount };