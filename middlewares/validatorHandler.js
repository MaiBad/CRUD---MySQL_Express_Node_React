const boom = require('@hapi/boom');

function validatorHandler(schema, propiedad) {
  return (req, res, next) => {
    const data = req[propiedad];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
