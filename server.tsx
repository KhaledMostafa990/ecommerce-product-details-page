import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

import cors, { CorsOptions } from 'cors';
import helmet from 'helmet';
import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

import { JSDOM } from 'jsdom';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import store from './react-product-page-ui/src/store';
import App from './react-product-page-ui/src/App';

const PORT = process.env.PORT || 3000;
type corsCallback = (err: Error | null, allowed: boolean) => {};
const allowedOrigins = ['http://127.0.0.1:8080', 'http://localhost:8080'];
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(`${origin}`) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Sorry origin not allowed by CORS'), false);
    }
  },
  optionsSuccessStatus: 200,
  // credentials: true,
};

const dom = new JSDOM('');
const { window } = dom;
global.window = window as any;
global.document = window.document;

const app = express();

start();

async function start() {
  try {
    app.use(helmet());

    app.use(cors(corsOptions));

    app.use(express.json());

    app.use(express.urlencoded({ extended: false }));

    app.use(express.static(path.join(__dirname, '..', 'react-product-page-ui', 'dist'), { index: false, maxAge: 7 * 24 * 60 * 60 * 1000 }));

    app.get('/*', (req: Request, res: Response) => {
      const envPath = path.join(__dirname, '..', 'react-product-page-ui', 'dist', 'index.html');
      const templatePath = path.resolve(envPath);

      fs.readFile(templatePath, 'utf8', (err, data) => {
        if (err) {
          return res.status(500).send(err);
        }

        const reactApp = ReactDomServer.renderToString(
          <StaticRouter location={req.url}>
            <ReduxProvider store={store}>
              <App />
            </ReduxProvider>
          </StaticRouter>
        );

        const html = data.replace(
          `<div id="root"></div>`,
          `<div id="root">${reactApp}</div>`
        );

        return res.send(html);
      });
    });

    app
      .listen(PORT, () => console.log(`Server running on port: ${PORT}`))
      .on('error', (error) => process.exit());

  } catch (error) {
    console.log(error);
  }
}
