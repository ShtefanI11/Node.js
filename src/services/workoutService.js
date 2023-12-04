import { createNewWorkoutDB, getAllWorkoutsDB } from '../database/Workout.js';
import { v4 as uuid } from 'uuid';

const getAllWorkoutsService = () => {
  const allWorkouts = getAllWorkoutsDB();
  return allWorkouts;
};

const getOneWorkoutService = () => {
  return;
};

const createNewWorkoutService = newWorkout => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
    }),
    updatedAt: new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
    }),
  };
  const createdWorkout = createNewWorkoutDB(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkoutService = () => {
  return;
};

const deleteOneWorkoutService = () => {
  return;
};

export {
  getAllWorkoutsService,
  getOneWorkoutService,
  createNewWorkoutService,
  updateOneWorkoutService,
  deleteOneWorkoutService,
};
