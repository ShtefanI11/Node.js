import * as fs from 'node:fs';

const saveToDataBase = DB => {
  fs.writeFileSync('./src/database/db.json', JSON.stringify(DB, null, 2), {
    encoding: 'utf-8',
  });
};
export { saveToDataBase };
