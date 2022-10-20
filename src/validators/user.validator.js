const joi = require("joi");
const { responseWithoutData } = require("../utils/response");

const validation = joi.object({
  user_name: joi.string().alphanum().min(3).max(25).trim(true).required(),
  email: joi.string().email().trim(true).required(),
  password: joi.string().min(8).trim(true).required(),
  phone_number: joi.string().length(10).required(),
});

const userValidation = async (req, res, next) => {
  const payload = {
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
    phone_number: req.body.phone_number,
  };

  const { error } = validation.validate(payload);
  if (error) {
    return responseWithoutData(200, i18n.__("request_success"), res);
  } else {
    next();
  }
};

module.exports = userValidation;
