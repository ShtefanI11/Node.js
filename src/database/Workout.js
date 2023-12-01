import DB from './db.json' assert { type: 'json' };

const getAllWorkoutsDB = () => {
  return DB.workouts;
};

export { getAllWorkoutsDB };
