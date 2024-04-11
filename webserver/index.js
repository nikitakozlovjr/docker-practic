import express from 'express'
import routerRedirect from './src/routes/routes.redirect.js';

const app = express();
app.set('view engine', 'pug');

app.use(routerRedirect);

export default app;