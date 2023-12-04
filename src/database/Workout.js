import DB from './db.json' assert { type: 'json' };
import { saveToDataBase } from './util.js';

const getAllWorkoutsDB = () => {
  return DB.workouts;
};

const createNewWorkoutDB = newWorkout => {
  const isAlreadyAdded =
    DB.workouts.findIndex(indx => indx.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDataBase(DB);
  return newWorkout;
};

export { getAllWorkoutsDB, createNewWorkoutDB };
