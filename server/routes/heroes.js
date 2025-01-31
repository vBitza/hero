import express from 'express';

import heroesController from '../controllers/heroes.js';
import heroSchema from '../schemas/hero.js';
import requestValidator from '../utilities/requestValidator.js';

const router = express.Router();

router.get(
  '/',
  heroesController.getHeroes,
);

router.post(
  '/',
  requestValidator.bodyValidator(heroSchema),
  heroesController.createHero
);


export default router;
