import { logger } from './utils';

require('source-map-support/register');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.port;

app.get('/', (req: any, res: any) => {
    res.send({ message: 'Data information.' });
});

app.listen(port, () => {
    logger.info(`[server]: Server is running at https://localhost:${port}`);
});
