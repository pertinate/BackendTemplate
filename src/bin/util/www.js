import express from 'express';
import { name } from '../../../package.json';
import controller from '../default';
import path from 'path';

// Any express middleware gets set here

export default () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.get('/', (request, response) =>
        response.sendFile(path.resolve('../PortfolioFrontend/build/index.html'))
    );

    app.use(`/${name}`, controller);

    return app;
};
