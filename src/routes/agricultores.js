import express from 'express'
import pool from '../config/db.js'

const router = express.Router()

// Crear agricultor
router.post('/', async (req, res) => {
  const { nombre, cedula } = req.body
  try {
    const [result] = await pool.query(
      'INSERT INTO AGRICULTORES (nombre, cedula) VALUES (?, ?)',
      [nombre, cedula]
    )
    res.status(201).json({ id: result.insertId, message: 'Agricultor creado' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Obtener agricultores 
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT nombre, cedula FROM AGRICULTORES')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Obtener un agricultor por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const [rows] = await pool.query(
      'SELECT nombre, cedula FROM AGRICULTORES WHERE id_agricultor = ?',
      [id]
    )
    rows.length
      ? res.json(rows[0])
      : res.status(404).json({ error: 'No encontrado' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Actualizar
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { nombre, cedula } = req.body
  try {
    await pool.query(
      'UPDATE AGRICULTORES SET nombre = ?, cedula = ? WHERE id_agricultor = ?',
      [nombre, cedula, id]
    )
    res.json({ message: 'Agricultor actualizado' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Eliminar
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await pool.query('DELETE FROM AGRICULTORES WHERE id_agricultor = ?', [id])
    res.json({ message: 'Agricultor eliminado' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
