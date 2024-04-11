import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class GetParams {
    async getChampionsLeaque() {
        const content = fs.readFileSync(path.join(__dirname, '..', '..', 'db', 'championsLeaque.csv'), 'utf-8');
        return content;
    }
    async getWorldChampions() {
        const content = fs.readFileSync(path.join(__dirname, '..', '..', 'db', 'championsLeaque.csv'), 'utf-8');
    }
    async getChampionsLeaque() {
        const content = fs.readFileSync(path.join(__dirname, '..', '..', 'db', 'championsLeaque.csv'), 'utf-8');
    }
    async getChampionsLeaque() {
        const content = fs.readFileSync(path.join(__dirname, '..', '..', 'db', 'championsLeaque.csv'), 'utf-8');
    }
};

export default GetParams;