const UserService = require("@services/userService.js");
const securePassword = require("@utils/securePassword");
const i18n = require("i18n");
const { responseWithData, responseWithoutData } = require("@utils/response");

// TODO, for return messages, use i18 multiple languages json files.
// TODO, make common object for return object (success, failure), with option parameter of message, currently its repeating
// same code of res.status everywhere.
exports.index = async function (req, res) {
  try {
    var users = await UserService.getUsers();
    return responseWithData(200, i18n.__("request_success"), users, res);
  } catch (e) {
    return responseWithoutData(400, i18n.__("request_failed"), res);
  }
};

exports.store = async function (req, res) {
  try {
    const existingUser = await UserService.findUserByEmail(req.body.email);
    if (existingUser) {
      return responseWithoutData(403, i18n.__("user_exists"), res);
    } else {
      let data = req.body;
      data.password = await securePassword(data.password);
      const createdUser = await UserService.createUser(data);
      if (createdUser) {
        return responseWithData(
          201,
          i18n.__("request_success"),
          createdUser,
          res
        );
      } else {
        return responseWithoutData(400, i18n.__("request_failed"), res);
      }
    }
  } catch (e) {
    return responseWithoutData(400, i18n.__("request_failed"), res);
  }
};
