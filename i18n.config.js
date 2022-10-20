const i18n = require('i18n')
const path = require('path');
/**
 * configure shared state
 */
i18n.configure({
  locales: ['en', 'ar'],
  // directory: path.join(__dirname, '/locales'),
  directory: path.join('./src/', 'locales')
})
module.exports = i18n;