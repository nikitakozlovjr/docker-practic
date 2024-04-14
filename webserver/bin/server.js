#!/usr/bin/env node

import app from '../index.js'

const port = 8000;
app.listen(port, () => {
    console.log('Server has been started -> http://localhost:8000');
})