const createObjectError = require('./../../../helpers/create-object-error/create-object-error.helper');
const typeErrorsEnum = require('./../../../models/enum/type-errors.enum');

const getUser = (req, res, next) => {

  try {
    // Em desenvolvimento
    res.send('Teste');
    throw createObjectError(typeErrorsEnum.XML_HTTP_REQUEST, 200, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.');

  } catch (error) {
    return next(error);
  }
};

module.exports = getUser;
