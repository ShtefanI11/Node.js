import { getAllWorkouts } from '../database/Workout.js';

const getAllWorkoutsService = () => {
  const allWorkouts = getAllWorkouts();
  return allWorkouts;
};

const getOneWorkoutService = () => {
  return;
};

const createNewWorkoutService = () => {
  return;
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
