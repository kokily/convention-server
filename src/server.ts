import 'dotenv/config';
import { ApolloServer } from 'apollo-server-koa';
import Koa, { Context } from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';
import bodyParser from 'koa-body';
import https from 'https';
import http from 'http';
import fs from 'fs';
import { createConnection } from 'typeorm';
import ConnectionOptions from './libs/config';
import schema from './libs/schema';

const _bootStrap = async () => {
  try {
    await createConnection(ConnectionOptions);

    const app = new Koa();
    const router = new Router();

    app.use(
      cors({
        origin:
          process.env.NODE_ENV === 'production'
            ? 'https://mndconvention.co.kr'
            : 'http://localhost:4000',
        credentials: true,
      })
    );
    app.use(bodyParser({ multipart: true }));
    app.use(router.routes());
    app.use(router.allowedMethods());

    const apollo = new ApolloServer({
      schema,
      context: ({ ctx }: { ctx: Context }) => {
        return {
          ctx,
        };
      },
    });

    router.get('/graphql', apollo.getMiddleware());
    router.post('/graphql', apollo.getMiddleware());

    apollo.applyMiddleware({ app, cors: true });

    const configurations = {
      production: { ssl: true, port: 443, hostname: 'mndconvention.co.kr' },
      development: { ssl: false, port: 4000, hostname: 'localhost' },
    };
    const environment = process.env.NODE_ENV || 'production';
    const config = configurations[environment];

    let server;

    if (config.ssl) {
      server = https.createServer(
        {
          key: fs.readFileSync(`${process.env.SSL_KEY}`),
          cert: fs.readFileSync(`${process.env.SSL_CERT}`),
        },
        app.callback()
      );
    } else {
      server = http.createServer(app.callback());
    }

    server.listen(config.port, () => {
      console.log(
        `> Convention server on http${config.ssl ? 's' : ''}://${
          config.hostname
        }:${config.port}`
      );
    });
  } catch (err) {
    console.error(err);
  }
};

_bootStrap();
