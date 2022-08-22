import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import router from './src/api/index.js';
const PORT = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hot Todo Backend');
});
app.use('/api', router);
app.use((err, req, res, next) => {
  res.status(500).send('Something Broken');
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
