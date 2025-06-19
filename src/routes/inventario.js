import pool from '../config/db.js';
export const crearMovimiento = async (req, res) => {
  try {
    const { tipo_movimiento, fecha_hora, cantidad, motivo, estado_cafe, ubicacion, alertas, auditoria } = req.body;
    const sql = `INSERT INTO INVENTARIO(tipo_movimiento, fecha_hora, cantidad, motivo, estado_cafe, ubicacion, alertas, auditoria)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [tipo_movimiento, fecha_hora, cantidad, motivo, estado_cafe, ubicacion, alertas, auditoria]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listarMovimientos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM INVENTARIO');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const obtenerMovimiento = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM INVENTARIO WHERE id_movimiento = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const actualizarMovimiento = async (req, res) => {
  try {
    const { tipo_movimiento, fecha_hora, cantidad, motivo, estado_cafe, ubicacion, alertas, auditoria } = req.body;
    const sql = `UPDATE INVENTARIO SET tipo_movimiento=?, fecha_hora=?, cantidad=?, motivo=?, estado_cafe=?, ubicacion=?, alertas=?, auditoria=? WHERE id_movimiento=?`;
    await pool.execute(sql, [tipo_movimiento, fecha_hora, cantidad, motivo, estado_cafe, ubicacion, alertas, auditoria, req.params.id]);
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const eliminarMovimiento = async (req, res) => {
  try {
    await pool.execute('DELETE FROM INVENTARIO WHERE id_movimiento = ?', [req.params.id]);
    res.json({ message: 'Eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};