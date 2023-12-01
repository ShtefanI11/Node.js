import {
  createNewWorkoutService,
  deleteOneWorkoutService,
  getAllWorkoutsService,
  getOneWorkoutService,
  updateOneWorkoutService,
} from '../services/workoutService.js';

const getAllWorkoutsController = (req, res) => {
  const allWorkouts = getAllWorkoutsService();
  res.send({ status: 'OK', data: allWorkouts });
};
const getOneWorkoutController = (req, res) => {
  const workout = getOneWorkoutService();
  res.send('Get an existing workout');
};
const createNewWorkoutController = (req, res) => {
  const createdWorkout = createNewWorkoutService();
  res.send('Create a new workout');
};
const updateOneWorkoutController = (req, res) => {
  const updatedWorkout = updateOneWorkoutService();
  res.send('Update an existing workout');
};
const deleteOneWorkoutController = (req, res) => {
  deleteOneWorkoutService();
  res.send('Delete an existing workout');
};
export {
  getAllWorkoutsController,
  getOneWorkoutController,
  createNewWorkoutController,
  updateOneWorkoutController,
  deleteOneWorkoutController,
};
