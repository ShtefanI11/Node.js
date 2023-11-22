import express from 'express';
import v1WorkoutRouter from './v1/routes/WorkoutRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
