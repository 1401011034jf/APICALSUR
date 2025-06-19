import pool from '../config/db.js';
export const crearCliente = async (req, res) => {
  try {
    const { tipo, nombre, email, telefono, ruc, razon_social, contactos, preferencias_compra, valor_vida_cliente, frecuencia_compra, productos_preferidos, consentimiento_gdpr, derecho_olvido } = req.body;
    const sql = `INSERT INTO CLIENTES(tipo, nombre, email, telefono, ruc, razon_social, contactos, preferencias_compra, valor_vida_cliente, frecuencia_compra, productos_preferidos, consentimiento_gdpr, derecho_olvido)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [tipo, nombre, email, telefono, ruc, razon_social, contactos, preferencias_compra, valor_vida_cliente, frecuencia_compra, productos_preferidos, consentimiento_gdpr, derecho_olvido]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listarClientes = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM CLIENTES');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const obtenerCliente = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM CLIENTES WHERE id_cliente = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const actualizarCliente = async (req, res) => {
  try {
    const { tipo, nombre, email, telefono, ruc, razon_social, contactos, preferencias_compra, valor_vida_cliente, frecuencia_compra, productos_preferidos, consentimiento_gdpr, derecho_olvido } = req.body;
    const sql = `UPDATE CLIENTES SET tipo=?, nombre=?, email=?, telefono=?, ruc=?, razon_social=?, contactos=?, preferencias_compra=?, valor_vida_cliente=?, frecuencia_compra=?, productos_preferidos=?, consentimiento_gdpr=?, derecho_olvido=? WHERE id_cliente=?`;
    await pool.execute(sql, [tipo, nombre, email, telefono, ruc, razon_social, contactos, preferencias_compra, valor_vida_cliente, frecuencia_compra, productos_preferidos, consentimiento_gdpr, derecho_olvido, req.params.id]);
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const eliminarCliente = async (req, res) => {
  try {
    await pool.execute('DELETE FROM CLIENTES WHERE id_cliente = ?', [req.params.id]);
    res.json({ message: 'Eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};