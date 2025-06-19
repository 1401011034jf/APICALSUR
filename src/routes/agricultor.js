import pool from '../config/db.js';

export const crearAgricultor = async (req, res) => {
  try {
    const { nombre, cedula, telefono, email, cuenta_bancaria, experiencia_anios } = req.body;
    const sql = `INSERT INTO AGRICULTORES(nombre, cedula, telefono, email, cuenta_bancaria, experiencia_anios)
                 VALUES (?, ?, ?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [nombre, cedula, telefono, email, cuenta_bancaria, experiencia_anios]);
    res.status(201).json({ message: 'Agricultor creado', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// export const listarAgricultores = async (req, res) => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM AGRICULTORES');
//     res.json(rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const obtenerAgricultor = async (req, res) => {
//   try {
//     const [rows] = await pool.query('SELECT * FROM AGRICULTORES WHERE id_agricultor = ?', [req.params.id]);
//     if (rows.length === 0) return res.status(404).json({ message: 'No encontrado' });
//     res.json(rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const actualizarAgricultor = async (req, res) => {
//   try {
//     const { nombre, cedula, telefono, email, cuenta_bancaria, experiencia_anios } = req.body;
//     const sql = `UPDATE AGRICULTORES SET nombre=?, cedula=?, telefono=?, email=?, cuenta_bancaria=?, experiencia_anios=?
//                  WHERE id_agricultor=?`;
//     await pool.execute(sql, [nombre, cedula, telefono, email, cuenta_bancaria, experiencia_anios, req.params.id]);
//     res.json({ message: 'Agricultor actualizado' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const eliminarAgricultor = async (req, res) => {
//   try {
//     await pool.execute('DELETE FROM AGRICULTORES WHERE id_agricultor = ?', [req.params.id]);
//     res.json({ message: 'Agricultor eliminado' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };