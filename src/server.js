import express from 'express';
import { crearAgricultor, listarAgricultores, obtenerAgricultor, actualizarAgricultor, eliminarAgricultor} 
from './routes/agricultor.js';
import {crearFinca, listarFincas, obtenerFinca, actualizarFinca, eliminarFinca} 
from './routes/finca.js';
import {crearCompra, listarCompras, obtenerCompra, actualizarCompra, eliminarCompra} 
from './routes/comprasCafe.js';
import {crearProceso, listarProcesos, obtenerProceso, actualizarProceso, eliminarProceso} 
from './routes/procesamiento.js';
import {crearProducto, listarProductos, obtenerProducto, actualizarProducto, eliminarProducto} 
from './routes/productos.js';
import {crearMovimiento, listarMovimientos, obtenerMovimiento, actualizarMovimiento, eliminarMovimiento} 
from './routes/inventario.js';
import {crearCliente, listarClientes, obtenerCliente, actualizarCliente, eliminarCliente} 
from './routes/clientes.js';
import {crearPedido, listarPedidos, obtenerPedido, actualizarPedido, eliminarPedido} 
from './routes/ventaPedidos.js';

const app = express();
app.use(express.json());

app.post('/agricultores', crearAgricultor);
app.get('/agricultores', listarAgricultores);
app.get('/agricultores/:id', obtenerAgricultor);
app.put('/agricultores/:id', actualizarAgricultor);
app.delete('/agricultores/:id', eliminarAgricultor);

app.post('/fincas', crearFinca);
app.get('/fincas', listarFincas);
app.get('/fincas/:id', obtenerFinca);
app.put('/fincas/:id', actualizarFinca);
app.delete('/fincas/:id', eliminarFinca);

app.post('/compras', crearCompra);
app.get('/compras', listarCompras);
app.get('/compras/:id', obtenerCompra);
app.put('/compras/:id', actualizarCompra);
app.delete('/compras/:id', eliminarCompra);

app.post('/procesamiento', crearProceso);
app.get('/procesamiento', listarProcesos);
app.get('/procesamiento/:id', obtenerProceso);
app.put('/procesamiento/:id', actualizarProceso);
app.delete('/procesamiento/:id', eliminarProceso);

app.post('/productos', crearProducto);
app.get('/productos', listarProductos);
app.get('/productos/:id', obtenerProducto);
app.put('/productos/:id', actualizarProducto);
app.delete('/productos/:id', eliminarProducto);

app.post('/inventario', crearMovimiento);
app.get('/inventario', listarMovimientos);
app.get('/inventario/:id', obtenerMovimiento);
app.put('/inventario/:id', actualizarMovimiento);
app.delete('/inventario/:id', eliminarMovimiento);

app.post('/clientes', crearCliente);
app.get('/clientes', listarClientes);
app.get('/clientes/:id', obtenerCliente);
app.put('/clientes/:id', actualizarCliente);
app.delete('/clientes/:id', eliminarCliente);

app.post('/pedidos', crearPedido);
app.get('/pedidos', listarPedidos);
app.get('/pedidos/:id', obtenerPedido);
app.put('/pedidos/:id', actualizarPedido);
app.delete('/pedidos/:id', eliminarPedido);

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));





// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//   console.log(req.params)
//   res.send('Got a POST request')
// })
