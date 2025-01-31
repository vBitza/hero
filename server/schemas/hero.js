import joi from 'joi';

const heroSchema = joi.object({
  name: joi.string().required(),
  superPower: joi.string().required(),
  humilityScore: joi.number().integer().min(1).max(10).required(),
});

export default heroSchema;
