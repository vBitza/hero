import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';

import { connect } from './controllers/mongo.js';
import Hero from './models/hero.js';
import routes from './routes.js';

const expressApp = express();
const corsOptions = {
  origin: '*',
};
expressApp.use(bodyParser.json({
  limit: '100mb',
}));
expressApp.use(cors(corsOptions));

function normalizeHeroPower(powerstats) {
  const total = powerstats.intelligence
    + powerstats.strength
    + powerstats.speed
    + powerstats.durability
    + powerstats.power
    + powerstats.combat;

  const normalized = (total / 500) * 10;
  return Math.max(1, Math.min(10, normalized.toFixed(1)));
}

function startServer() {
  return new Promise((resolve, reject) => {
    connect().then(async () => {
      console.log('MongoDB connection was established!');
      routes(expressApp);
      await axios.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json').then(async (response) => {
        const heroes = response.data.map((hero) => new Hero({
          name: hero.biography?.fullName || hero.name,
          superPower: hero.work.occupation,
          humilityScore: normalizeHeroPower(hero.powerstats),
        }));

        await Hero.insertMany(heroes).then(() => {
          console.log('Heroes were successfully created!');
        });
      });


      const server = http.Server(expressApp);
      const port = 2000;
      server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
        resolve();
      })
    });
  })
}

export default startServer;

