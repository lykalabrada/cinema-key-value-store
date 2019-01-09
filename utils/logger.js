const fs = require('fs')
const winston = require('winston')
const winstonDailyRotateFile = require('winston-daily-rotate-file')

const logDir = 'errorLogs'

if ( !fs.existsSync( logDir ) ) {
	fs.mkdirSync( logDir )
}

const tsFormat = () => ( new Date() ).toLocaleTimeString()
module.exports = logger = ( message ) => {
	new winston.Logger({
		transports: [
			new winston.transports.Console({
				timestamp: tsFormat,
				colorize : true
			}),
			new winston.transports.DailyRotateFile({
				filename   : `${logDir}/error.log`,
				timestamp  : tsFormat,
				datePattern: 'YYYY-MM-DD'
			})
		]
	}).error( message )
}
