import Express from "express";
import GetParams from "../controllers/controller.getData.js";
import getHeaders from "../utils/getHeaders.js";

const router = new Express();

router.get('/', (__req, res) => {
    res.render('sections/major');
});

router.get('/championsLeaque', async (__req, res) => {
    const contents = await new GetParams().getChampionsLeaque();
    const headers = getHeaders(contents);
    res.render('sections/championsLeague', { headers, contents });
});

router.get('/europeanPlayers', async (__req, res) => {
    const contents = await new GetParams().getEuropeanPlayers();
    const headers = getHeaders(contents);
    res.render('sections/europeanPlayers', { headers, contents });
});

router.get('/goldenboots', async (__req, res) => {
    const contents = await new GetParams().getGoldenBoots();
    const headers = getHeaders(contents);
    res.render('sections/goldenboots', { headers, contents });
});

router.get('/goldenballs', async (__req, res) => {
    const contents = await new GetParams().getGoldenBall();
    const headers = getHeaders(contents);
    res.render('sections/goldenballs', { headers, contents });
});

router.get('/worldChampions', async (__req, res) => {
    const contents = await new GetParams().getWorldChampions();
    const headers = getHeaders(contents);
    res.render('sections/worldChampions', { contents, headers });
});

export default router;