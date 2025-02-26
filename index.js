import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import validator from 'validator';

function generateUniqueID(string1, string2) {
    // valdate input paramaters
    if (!validator.isString(string1) || !validator.isString(string2)) {
        return null;
    }
}