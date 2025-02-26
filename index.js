import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import validator from 'validator';

function generateUniqueID(string1, string2) {
    // valdate input paramaters
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return null;
    }

    if (!validator.isAlpha(string1, 'en-US', { ignore: '-' }) || !validator.isAlpha(string2, 'en-US', { ignore: '-' })) {
        return null;
    }

    let result = "";                        // empty string for the result

    result += string1[0].toLowerCase();     // add lowercased first letter of first string

    // remove all non-alphabetic characters from the string of string2
    // one-liner: split each character and joins all the alpha
    string2 = string2.split('').filter(ch => validator.isAlpha(ch)).join('');

    result += string2.toLowerCase();        // add lowercased all of the second string
    let uniqueID = uuidv4().split("-")[0];  // add uniqueID based on the two strings, remove after first hypen
    result += uniqueID;                     // add uniqueID to the result

    return result;
}

function addAccount(userInfo) {
    // userInfo must be an array of length 4
    if (!Array.isArray(userInfo) || userInfo.length !== 4) {
        return false;
    }

    // unpack array values
    let [firstName, lastName, email, age] = userInfo;

    // validate input values. should be: string, string, string, number
    if (typeof firstName !== "string" || typeof lastName !== "string" || typeof email !== "string" || typeof age !== "number") {
        return false;
    }

    // validate first and last names. should be non-empty alpha only
    if (!validator.isAlpha(firstName, 'en-US', { ignore: '-' }) || !validator.isAlpha(lastName, 'en-US', { ignore: '-' })) {
        return false;
    }

    // validate email. should be valid email
    if (!validator.isEmail(email)) {
        return false;
    }

    // validate age. should be at least 18
    if (age < 18) {
        return false;
    }

    // create users.txt if it doesn't exist yet. if it does, open for append
    let file = fs.openSync("users.txt", "a");

    // write user info to the file
    fs.writeSync(file, `${firstName},${lastName},${email},${age},${generateUniqueID(firstName, lastName)}\n`);

    return true;        // return a true value to signal success to the caller
}

export { generateUniqueID };
export { addAccount };