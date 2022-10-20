const i18n = require("@root/i18n.config");

module.exports = function setLocale(req, res, next) {
  const language = req.header("accept-language") ?? "en";
  i18n.setLocale(language);
  next();
};
