require('module-alias/register')

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routes = require('@routes/index.js');
const setLocale = require('@middlewares/setLocale');


global.prisma = require('@prisma_root/index.js')

require('dotenv').config();

const app = express();
const monk = require('monk');
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(setLocale)
app.use(express.static('public'));
// app.use(function( req, res, next ) {
//   // grab reference of render
//   var _render = res.render;
//   // override logic
//   res.json = async function( view, options, fn ) {
//       console.log('asd')
//       // do some custom logic
//       await global.prisma.$disconnect()
//       // continue with original render
//       _render.call( this, view, options, fn );
//   }
//   next();
// } );
app.use('/', routes);



const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});