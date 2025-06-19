import pool from '../config/db.js';
export const crearFinca = async (req, res) => {
  try {
    const { codigo_unico, nombre, provincia, canton, coordenadas_gps, altitud, area_hectareas, variedades_cafe, certificaciones, historial_cambios } = req.body;
    const sql = `INSERT INTO FINCAS(codigo_unico, nombre, provincia, canton, coordenadas_gps, altitud, area_hectareas, variedades_cafe, certificaciones, historial_cambios)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [codigo_unico, nombre, provincia, canton, coordenadas_gps, altitud, area_hectareas, variedades_cafe, certificaciones, historial_cambios]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listarFincas = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM FINCAS');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const obtenerFinca = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM FINCAS WHERE id_finca = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const actualizarFinca = async (req, res) => {
  try {
    const { codigo_unico, nombre, provincia, canton, coordenadas_gps, altitud, area_hectareas, variedades_cafe, certificaciones, historial_cambios } = req.body;
    const sql = `UPDATE FINCAS SET codigo_unico=?, nombre=?, provincia=?, canton=?, coordenadas_gps=?, altitud=?, area_hectareas=?, variedades_cafe=?, certificaciones=?, historial_cambios=? WHERE id_finca=?`;
    await pool.execute(sql, [codigo_unico, nombre, provincia, canton, coordenadas_gps, altitud, area_hectareas, variedades_cafe, certificaciones, historial_cambios, req.params.id]);
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const eliminarFinca = async (req, res) => {
  try {
    await pool.execute('DELETE FROM FINCAS WHERE id_finca = ?', [req.params.id]);
    res.json({ message: 'Eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};