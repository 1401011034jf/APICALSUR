import pool from '../config/db.js';
export const crearProceso = async (req, res) => {
  try {
    const { lote_origen, perfil_tueste, temperatura, tiempo_minu, resultado_kg, tipo_molienda, granulometría, fecha_procesamiento, mezcla_encriptada, evaluaciones_sensoriales, parametros_fisicos } = req.body;
    const sql = `INSERT INTO PROCESAMIENTO(lote_origen, perfil_tueste, temperatura, tiempo_minu, resultado_kg, tipo_molienda, granulometría, fecha_procesamiento, mezcla_encriptada, evaluaciones_sensoriales, parametros_fisicos)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [lote_origen, perfil_tueste, temperatura, tiempo_minu, resultado_kg, tipo_molienda, granulometría, fecha_procesamiento, mezcla_encriptada, evaluaciones_sensoriales, parametros_fisicos]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listarProcesos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM PROCESAMIENTO');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const obtenerProceso = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM PROCESAMIENTO WHERE id_proceso = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const actualizarProceso = async (req, res) => {
  try {
    const { lote_origen, perfil_tueste, temperatura, tiempo_minu, resultado_kg, tipo_molienda, granulometría, fecha_procesamiento, mezcla_encriptada, evaluaciones_sensoriales, parametros_fisicos } = req.body;
    const sql = `UPDATE PROCESAMIENTO SET lote_origen=?, perfil_tueste=?, temperatura=?, tiempo_minu=?, resultado_kg=?, tipo_molienda=?, granulometría=?, fecha_procesamiento=?, mezcla_encriptada=?, evaluaciones_sensoriales=?, parametros_fisicos=? WHERE id_proceso=?`;
    await pool.execute(sql, [lote_origen, perfil_tueste, temperatura, tiempo_minu, resultado_kg, tipo_molienda, granulometría, fecha_procesamiento, mezcla_encriptada, evaluaciones_sensoriales, parametros_fisicos, req.params.id]);
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const eliminarProceso = async (req, res) => {
  try {
    await pool.execute('DELETE FROM PROCESAMIENTO WHERE id_proceso = ?', [req.params.id]);
    res.json({ message: 'Eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};