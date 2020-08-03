import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const PORT = 8000;

app.use(morgan('dev'));
app.use(helmet());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
