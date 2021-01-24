import express from 'express';
import cron from 'cron';
import notifier from 'node-notifier';

const app = express();
const port = 3000;
const CronJob = cron.CronJob;

app.get('/bill/new', (req, res) => {
  res.send('new bill');
  let job = new CronJob(
    '* * * * *',
    () => {
      notifier.notify({
        title: 'My notification',
        message: 'Hello, there!',
      });
    },
    null,
    true,
    'America/Los_Angeles',
  );
  job.start();
});
app.listen(port, () => {
  // RUN CRON
  return console.log(`server is listening on ${port}`);
});
