var CronJob = require('cron').CronJob;


const fetchGithub = require('./tasks/fetch-github')

new CronJob('*/3 * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');