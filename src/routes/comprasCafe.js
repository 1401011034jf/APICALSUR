import pool from '../config/db.js';
export const crearCompra = async (req, res) => {
  try {
    const { id_agricultor, id_finca, numero_lote, fecha_transaccion, cantidad_kg, precio_por_kg, total_usd, forma_pago, notas_sabor, lote_campo, coordenadas_exactas, comprobante, referencia_bancaria, registrado_por } = req.body;
    const sql = `INSERT INTO COMPRAS_CAFE_VERDE(id_agricultor, id_finca, numero_lote, fecha_transaccion, cantidad_kg, precio_por_kg, total_usd, forma_pago, notas_sabor, lote_campo, coordenadas_exactas, comprobante, referencia_bancaria, registrado_por)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [id_agricultor, id_finca, numero_lote, fecha_transaccion, cantidad_kg, precio_por_kg, total_usd, forma_pago, notas_sabor, lote_campo, coordenadas_exactas, comprobante, referencia_bancaria, registrado_por]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listarCompras = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM COMPRAS_CAFE_VERDE');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const obtenerCompra = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM COMPRAS_CAFE_VERDE WHERE id_compra = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const actualizarCompra = async (req, res) => {
  try {
    const { id_agricultor, id_finca, numero_lote, fecha_transaccion, cantidad_kg, precio_por_kg, total_usd, forma_pago, notas_sabor, lote_campo, coordenadas_exactas, comprobante, referencia_bancaria, registrado_por } = req.body;
    const sql = `UPDATE COMPRAS_CAFE_VERDE SET id_agricultor=?, id_finca=?, numero_lote=?, fecha_transaccion=?, cantidad_kg=?, precio_por_kg=?, total_usd=?, forma_pago=?, notas_sabor=?, lote_campo=?, coordenadas_exactas=?, comprobante=?, referencia_bancaria=?, registrado_por=? WHERE id_compra=?`;
    await pool.execute(sql, [id_agricultor, id_finca, numero_lote, fecha_transaccion, cantidad_kg, precio_por_kg, total_usd, forma_pago, notas_sabor, lote_campo, coordenadas_exactas, comprobante, referencia_bancaria, registrado_por, req.params.id]);
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const eliminarCompra = async (req, res) => {
  try {
    await pool.execute('DELETE FROM COMPRAS_CAFE_VERDE WHERE id_compra = ?', [req.params.id]);
    res.json({ message: 'Eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
