import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

import helmet from 'helmet';
import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

import React from 'react';
import { JSDOM } from 'jsdom';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/store';
import App from './src/App';

const PORT = process.env.PORT || 3000;

const dom = new JSDOM('');
const { window } = dom;
global.window = window as any;
global.document = window.document;

const app = express();

start();

async function start() {
  try {
    app.use(helmet());

    app.use(express.json());

    app.use(express.urlencoded({ extended: false }));

    app.use(express.static(path.join(__dirname, '..', 'dist'), { index: false, maxAge: 7 * 24 * 60 * 60 * 1000 }));

    app.get('*', (req: Request, res: Response) => {
      const envPath = path.join(__dirname, '..', 'dist', 'index.html');
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
