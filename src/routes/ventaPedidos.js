import pool from '../config/db.js';
export const crearPedido = async (req, res) => {
  try {
    const { id_cliente, numero_pedido, fecha, estado, total, direccion_entrega, transportadora, numero_seguimiento, metodo_pago, referencia_pago, estado_pago, fecha_pago_efectivo, trazabilidad } = req.body;
    const sql = `INSERT INTO VENTAS_PEDIDOS(id_cliente, numero_pedido, fecha, estado, total, direccion_entrega, transportadora, numero_seguimiento, metodo_pago, referencia_pago, estado_pago, fecha_pago_efectivo, trazabilidad)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [id_cliente, numero_pedido, fecha, estado, total, direccion_entrega, transportadora, numero_seguimiento, metodo_pago, referencia_pago, estado_pago, fecha_pago_efectivo, trazabilidad]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listarPedidos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM VENTAS_PEDIDOS');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const obtenerPedido = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM VENTAS_PEDIDOS WHERE id_pedido = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const actualizarPedido = async (req, res) => {
  try {
    const { id_cliente, numero_pedido, fecha, estado, total, direccion_entrega, transportadora, numero_seguimiento, metodo_pago, referencia_pago, estado_pago, fecha_pago_efectivo, trazabilidad } = req.body;
    const sql = `UPDATE VENTAS_PEDIDOS SET id_cliente=?, numero_pedido=?, fecha=?, estado=?, total=?, direccion_entrega=?, transportadora=?, numero_seguimiento=?, metodo_pago=?, referencia_pago=?, estado_pago=?, fecha_pago_efectivo=?, trazabilidad=? WHERE id_pedido=?`;
    await pool.execute(sql, [id_cliente, numero_pedido, fecha, estado, total, direccion_entrega, transportadora, numero_seguimiento, metodo_pago, referencia_pago, estado_pago, fecha_pago_efectivo, trazabilidad, req.params.id]);
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const eliminarPedido = async (req, res) => {
  try {
    await pool.execute('DELETE FROM VENTAS_PEDIDOS WHERE id_pedido = ?', [req.params.id]);
    res.json({ message: 'Eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};