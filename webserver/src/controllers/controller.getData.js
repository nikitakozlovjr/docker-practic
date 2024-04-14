import path from 'path';
import { fileURLToPath } from "node:url";
import csv from 'csvtojson';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class GetParams {
    async getChampionsLeaque() {
        return await csv().fromFile(path.join(__dirname, '..', '..', 'db', 'championsLeaque.csv'))
    }
    async getWorldChampions() {
        return await csv().fromFile(path.join(__dirname, '..', '..', 'db', 'worldChampions.csv'))
    }
    async getEuropeanPlayers() {
        return await csv().fromFile(path.join(__dirname, '..', '..', 'db', 'europeanPlayers.csv'))
    }
    async getGoldenBall() {
        return await csv().fromFile(path.join(__dirname, '..', '..', 'db', 'goldenBall.csv'))
    }
    async getGoldenBoots() {
        return await csv().fromFile(path.join(__dirname, '..', '..', 'db', 'goldenBoots.csv'))
    }
};

export default GetParams;