import express from 'express'
import routerRedirect from './src/routes/routes.redirect.js';
import routerApiStatistic from './src/api/api.routes.statistic.js';

const app = express();
app.set('view engine', 'pug');

app.use(routerRedirect);
app.use('/api', routerApiStatistic);

export default app;