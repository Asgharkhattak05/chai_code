import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/twitter", (req, res) => {
  res.send("AsgharTwiter.93");
});


app.listen(PORT, () => {
  console.log(`App Listening On ${PORT}`);
});
