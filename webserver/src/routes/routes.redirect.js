import Express from "express";
import GetParams from "../controllers/getData.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = new Express();

router.get('/', (req, res) => {
    res.render('sections/major');
});

router.get('/championsLeaque', async (req, res) => {
    const content = new GetParams().getChampionsLeaque();
    console.log(content);
    res.render('sections/сhampionsLeague');
});

router.get('/europeanPlayers', (req, res) => {
    res.render('sections/europeanPlayers');
});

router.get('/goldenboots', (req, res) => {
    res.render('sections/goldenboots');
});

router.get('/goldenballs', (req, res) => {
    res.render('sections/goldenballs');
});

router.get('/worldChampions', (req, res) => {
    res.render('sections/worldChampions');
});

export default router;