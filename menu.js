var Menu = require('terminal-menu');
var menu = Menu({ width: 80, x: 4, y: 2 });
menu.reset();
menu.write('Stock Wizard - v1.0.1\n');
menu.write('-------------------------\n');

menu.add('VIEW DASHBOARD');
menu.add('OPEN TRADE');
menu.add('CLOSE TRADE');
menu.add('VIEW OPEN TRADES');
menu.add('EDIT OPEN TRADES');
menu.add('GET SYMBOL CURRENT PRICE');
menu.add('GET NEWS');
menu.add('GET FUTURES');
menu.add('GET UPCOMING EARNINGS');
menu.add('GET ETFS FOR SYMBOL');
menu.add('GET HOLDING FOR ETF');
menu.add('GET ECONOMIC EVENTS');
menu.add('EXIT');

menu.on('select', function (label) {
    menu.close();
    console.log('SELECTED: ' + label);
});
process.stdin.pipe(menu.createStream()).pipe(process.stdout);

process.stdin.setRawMode(true);
menu.on('close', function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
});