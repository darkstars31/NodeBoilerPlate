const logFileName = Date.getFullYear()+Date.getMonth()+Date.getDate();
const log4js = require('log4js');
log4js.configure({
	appenders: { standard: { type: 'file', filename: logFileName+'.log' } },
	categories: { default: { appenders: ['standard'], level: 'debug' } }
  });