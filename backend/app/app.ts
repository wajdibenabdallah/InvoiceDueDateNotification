import express from 'express';
import cron from 'cron';
import notifier from 'node-notifier';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const CronJob = cron.CronJob;

app.use(cors());

const { Schema } = mongoose;

const billSchema = new Schema({
  id: String,
  customer: String,
  description: String,
  price: Number,
  dueDate: Date,
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/billNotif', { useNewUrlParser: true });

app.post('/bill/save', (req, res) => {});

app.post('/bill/init', (req, res) => {
  initCron(req.body.bills);
  res.status(200).send({ message: 'Success' });
});

app.get('/bill/new', (req, res) => {
  res.send('new bill');
});

app.listen(port, () => {
  // RUN CRON
  return console.log(`server is listening on ${port}`);
});

const initCron = (bills: any) => {
  for (const bill of bills) {
    let cronDate = `${new Date(bill.dueDate).getMinutes()} ${new Date(bill.dueDate).getHours()} ${new Date(bill.dueDate).getDate()} ${
      new Date(bill.dueDate).getMonth() + 1
    } *`;
    console.log('cronDate =>', cronDate);
    new CronJob(
      cronDate,
      () => {
        notifier.notify({
          title: bill.customer,
          message: bill.description,
        });
      },
      null,
      true,
      'America/Los_Angeles',
    ).start();
  }
};
