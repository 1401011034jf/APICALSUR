import pool from '../config/db.js';
export const crearProducto = async (req, res) => {
  try {
    const { sku, nombre, descripcion, categoria, presentacion, precio_costo, precio_sugerido, precio_minorista, precio_mayorista, inventario_stock, punto_reorden, stock_maximo } = req.body;
    const sql = `INSERT INTO PRODUCTOS(sku, nombre, descripcion, categoria, presentacion, precio_costo, precio_sugerido, precio_minorista, precio_mayorista, inventario_stock, punto_reorden, stock_maximo)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [sku, nombre, descripcion, categoria, presentacion, precio_costo, precio_sugerido, precio_minorista, precio_mayorista, inventario_stock, punto_reorden, stock_maximo]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listarProductos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM PRODUCTOS');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM PRODUCTOS WHERE id_producto = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const { sku, nombre, descripcion, categoria, presentacion, precio_costo, precio_sugerido, precio_minorista, precio_mayorista, inventario_stock, punto_reorden, stock_maximo } = req.body;
    const sql = `UPDATE PRODUCTOS SET sku=?, nombre=?, descripcion=?, categoria=?, presentacion=?, precio_costo=?, precio_sugerido=?, precio_minorista=?, precio_mayorista=?, inventario_stock=?, punto_reorden=?, stock_maximo=? WHERE id_producto=?`;
    await pool.execute(sql, [sku, nombre, descripcion, categoria, presentacion, precio_costo, precio_sugerido, precio_minorista, precio_mayorista, inventario_stock, punto_reorden, stock_maximo, req.params.id]);
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    await pool.execute('DELETE FROM PRODUCTOS WHERE id_producto = ?', [req.params.id]);
    res.json({ message: 'Eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};