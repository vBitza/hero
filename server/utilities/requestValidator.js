import joi from 'joi';

function fieldValidator(schema, fieldKey, arrayKey) {
  return (req, res, next) => {
    try {
      // If an array key is provided then the query params gets transformed from a
      // string list into an array.
      if (arrayKey) {
        console.debug(`Received query array: ${JSON.stringify(req[fieldKey])} on key: ${arrayKey}.`,);
        console.debug(`Parsed query array: ${JSON.stringify(req[fieldKey])} on key: ${arrayKey}.`)
        req[fieldKey] = req[fieldKey][arrayKey].split(',').filter((item) => item?.length);
      }
      joi.assert(req[fieldKey], schema, { abortEarly: false });

      next();
    } catch (error) {
      const errorMessages = [];
      error.details.forEach((item) => {
        const errorMessage = `${fieldKey} validation fails due to ${item.message}`;
        errorMessages.push(errorMessage);
      });
      res.status(500).json(errorMessages);
    }
  };
}

const requestValidator = {
  queryValidator: (schema) => fieldValidator(schema, 'query'),
  arrayQueryValidator: (schema, arrayKey) => fieldValidator(schema, 'query', arrayKey),
  pathParamsValidator: (schema) => fieldValidator(schema, 'params'),
  bodyValidator: (schema) => fieldValidator(schema, 'body'),
  headersValidator: (schema) => fieldValidator(schema, 'headers'),
};

export default requestValidator;
