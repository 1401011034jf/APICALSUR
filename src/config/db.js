// Get the client
import mysql from 'mysql2/promise';
import 'dotenv/config';


const pool = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    database: 'CALSUR',
    password: 'root',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0
});
console.log("conexion exitosa")

export default pool;  // sirve para hacer publico al metodo

// se recomiedna usar pool cuando tenemos conexiones multiples