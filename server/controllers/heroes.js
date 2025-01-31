import Hero from '../models/hero.js';


async function getHeroes(req, res) {
  try {
    const heroes = await Hero.find({}).sort({ humilityScore: -1 }).lean();
    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).send();
  }
}

async function createHero(req, res) {
  const heroData = req.body;
  try {
    console.log(req.body);
    const hero = new Hero(heroData);
    await hero.save()

    res.status(201).json({ message: 'Hero was successfully created', hero });
  } catch (error) {
    console.error(error);
    res.status(500).json('Failed to save hero');
  }
}

export default {
  getHeroes,
  createHero,
};
