
import{dirname,join} from 'path';
import {  readFile } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
readFile(join(__dirname, 'test.txt'), (err, data) => {      
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
});
