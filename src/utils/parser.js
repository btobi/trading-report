import { readFileSync } from 'fs';
import { join } from 'path';

console.log(readFileSync(
    join(__dirname, '../../data/DU2063479_20200101_20200410.tlg'), 'utf8'));
const tlgString = ""


const tlg2Summary = (tlgContent) => {
    console.log(tlgString);
};

const tlgSummary = tlg2Summary(tlgString);

export {tlgSummary};