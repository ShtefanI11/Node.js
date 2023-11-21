import express from 'express';
import v1Router from './v1/routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/v1', v1Router);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
