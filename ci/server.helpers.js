const boxen = require('boxen');
const chalk = require('chalk');
const ip = require('ip');

const printServingMessage = (servingFolder, host, port) => {
    'use strict';
    let message = chalk.green('Master, here is your webz!');

    message += `\n\n- ${chalk.bold('Folder:          ')} ${servingFolder}`;

    const localURL = `http://${host}:${port}`;
    message += `\n- ${chalk.bold('Local:           ')} ${localURL}`;

    try {
        const ipAddress = ip.address();
        const url = `http://${ipAddress}:${port}`;

        message += `\n- ${chalk.bold('On Your Network: ')} ${url}`;
    } catch (err) {
        // Don't do anything
    }

    message += '\n\n' + chalk.green('GLHF!');

    console.log( // eslint-disable-line no-console
        boxen(message, {
            padding: 1,
            borderColor: 'green',
            margin: 1
        })
    );
};

module.exports = {
    printServingMessage
};