const errorMap = {
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  BAD_REQUEST: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
