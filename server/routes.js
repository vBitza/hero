import heroRoutes from './routes/heroes.js';

export default (app) => {
  app.use('/superheroes', heroRoutes);
};
