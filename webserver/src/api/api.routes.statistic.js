import Express from 'express';
import GetParams from '../controllers/controller.getData.js';
const router = new Express();

router.get('/championsLeaque', async (__req, res) => {
    const data = await new GetParams().getChampionsLeaque();
    res.json(data);
});

router.get('/europeanPlayers', async (__req, res) => {
    const data = await new GetParams().getEuropeanPlayers();
    res.json(data);   
});

router.get('/goldenboots', async (__req, res) => {
    const data = await new GetParams().getGoldenBoots();
    res.json(data);   
});

router.get('/goldenballs', async (__req, res) => {
    const data = await new GetParams().getGoldenBall();
    res.json(data);   
});

router.get('/worldChampions', async (__req, res) => {
    const data = await new GetParams().getWorldChampions();
    res.json(data);   
});

export default router;