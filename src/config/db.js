// Get the client

import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'CALSUR',
})

export default pool


// // A simple SELECT query
// try {
//   const [results, fields] = await connection.query(
//     'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45'
//   );

//   console.log(results); // results contains rows returned by server
//   console.log(fields); // fields contains extra meta data about results, if available
// } catch (err) {
//   console.log(err);
// }

// // Using placeholders
// try {
//   const [results] = await connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Page', 45]
//   );

//   console.log(results);
// } catch (err) {
//   console.log(err);
// }